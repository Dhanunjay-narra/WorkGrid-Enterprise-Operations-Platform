
import React from 'react';
export const Button: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary' | 'sage'; onClick?: () => void }> = ({
  children,
  variant = 'primary',
  onClick
}) => {
  const styles = {
    primary: 'bg-[#5E6AD2] text-white hover:bg-[#4E5AC2] px-4 py-2 rounded-xl text-sm font-medium transition',
    secondary: 'bg-[#EFECE6] text-[#1E2022] hover:bg-[#E2DFD8] px-4 py-2 rounded-xl text-sm font-medium transition',
    sage: 'bg-[#6B8E7B] text-white hover:bg-[#5A7C6A] px-4 py-2 rounded-xl text-sm font-medium transition'
  };
  return <button className={styles[variant]} onClick={onClick}>{children}</button>;
};
