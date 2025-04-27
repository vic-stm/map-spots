import React from 'react';

type FooterProps = {
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className = '' }) => (
  <footer className={`bg-gray-800 dark:bg-indigo-600 text-white py-4 ${className}`}>
    <div className="container mx-auto text-center">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
      <p>
        <a href="/privacy" className="text-gray-400 hover:text-white">
          Privacy Policy
        </a>
        {' | '}
        <a href="/terms" className="text-gray-400 hover:text-white">
          Terms of Service
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
