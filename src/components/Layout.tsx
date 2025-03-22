
import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 transition-all duration-500 ease-in-out">
        {children}
      </main>
      <footer className="py-6 px-8 text-center text-sm text-nic-muted border-t border-gray-100">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} NIC Code Resource. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
