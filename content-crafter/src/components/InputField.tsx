import React from 'react'

interface InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: any;
    placeholder: string;
  }
const InputField: React.FC<InputProps> = ({ value, onChange, placeholder }: InputProps) => (
    <input
      onChange={onChange}
      className="text-black text-center rounded-xl w-[500px] pr-4 pl-4 pt-2 pb-2"
      type="text"
      placeholder={placeholder}
      value={value}
    />
  );

export default InputField