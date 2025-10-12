import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel - LittleDrops NGO",
  description: "Admin panel for LittleDrops NGO management",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
}
