import React from 'react';

interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ primary = false, label, ...props }) => {
  const baseStyles = 'rounded-md px-4 py-2 font-medium';
  const styles = primary
    ? `${baseStyles} bg-blue-600 text-white hover:bg-blue-700`
    : `${baseStyles} bg-gray-200 text-gray-800 hover:bg-gray-300`;

  return (
    <button className={styles} {...props}>
      {label}
    </button>
  );
};
