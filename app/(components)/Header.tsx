import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Header Component
const Header: React.FC = () => {
  return (
    <header className="relative">
      <nav className="container mx-auto max-w-screen-lg flex justify-between items-center py-4 px-8">
        {/* Logo image link */}
        <div className="text-xl font-bold mr-6">
          <Link href="/">
            <Image 
              src="/logo.png"
              alt="Global Traveler Logo" 
              width={100}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>
        {/* Navigation links */}
        <div className="flex space-x-12 ml-6">
          <Link href="/destinations" className="nav-link">Destinations</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
