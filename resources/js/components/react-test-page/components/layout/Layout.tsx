import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer'; 

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}