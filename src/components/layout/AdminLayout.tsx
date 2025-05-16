
import React from "react";
import InitiumLogo from "@/components/InitiumLogo";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-initium-background">
      {/* Header */}
      <header className="bg-white border-b border-border py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <InitiumLogo className="h-8 w-auto" />
            <span className="text-xl font-semibold text-initium-primary hidden sm:inline-block">
              Admin Dashboard
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome, Admin</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-initium-primary">{title}</h1>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-4 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Initium Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
