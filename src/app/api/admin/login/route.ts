import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminCredentials } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    console.log('Login attempt:', { email, password: password ? '***' : 'empty' });

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const result = await verifyAdminCredentials(email, password);
    console.log('Verification result:', { success: result.success });

    if (result.success) {
      return NextResponse.json({
        success: true,
        token: result.token,
        user: {
          id: result.user?.id,
          email: result.user?.email,
          name: result.user?.name,
          role: result.user?.role
        }
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
