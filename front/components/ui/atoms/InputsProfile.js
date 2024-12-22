// Input.js
import React from 'react';

const InputProfile = ({ placeholder, type, name, value, onChange, className }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`border rounded-[0.5rem] p-[0.8rem] w-full ${className}`}
    />
  );
};

export default InputProfile;