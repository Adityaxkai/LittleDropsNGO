 import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';
const JWT_EXPIRES_IN = '7d';

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Generate JWT token
export function generateToken(payload: { id: string; email: string }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Verify JWT token
export function verifyToken(token: string): { id: string; email: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string; email: string };
  } catch {
    return null;
  }
}

// Mock admin user (in production, this would be in a database)
export const ADMIN_USER = {
  id: '1',
  email: 'admin@littledrops.org',
  password: '$2b$12$GMmRBdOXCgTsmru9UM3Vx.urX9ZfWXjGklGYNaXFTcWnYrz9kdxhe', // password: admin123
  name: 'Admin User',
  role: 'admin'
};

// Verify admin credentials
export async function verifyAdminCredentials(email: string, password: string): Promise<{ success: boolean; user?: { id: string; email: string; name: string; role: string }; token?: string }> {
  console.log('Verifying credentials for:', email);
  console.log('Expected email:', ADMIN_USER.email);
  console.log('Email match:', email === ADMIN_USER.email);
  
  if (email === ADMIN_USER.email) {
    console.log('Email matches, verifying password...');
    const isValid = await verifyPassword(password, ADMIN_USER.password);
    console.log('Password valid:', isValid);
    
    if (isValid) {
      const token = generateToken({ id: ADMIN_USER.id, email: ADMIN_USER.email });
      console.log('Token generated successfully');
      return { success: true, user: ADMIN_USER, token };
    }
  }
  console.log('Authentication failed');
  return { success: false };
}
