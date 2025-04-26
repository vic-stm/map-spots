import React from 'react';

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = '' }) => (
  <header className={`bg-gray-800 text-white p-4 ${className}`}>
    <h1 className="text-2xl">My Application</h1>
  </header>
);

export default Header;
