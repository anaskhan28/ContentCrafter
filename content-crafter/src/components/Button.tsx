import React from 'react'

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
    label: string;
  }

const Button: React.FC<ButtonProps> = ({ onClick, loading, label }: ButtonProps) => (
    <button
      type='submit'
      className="bg-black text-white pt-2 pb-2 pr-6 pl-6 rounded-full mt-12"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Loading..." : label}
    </button>
  );

export default Button