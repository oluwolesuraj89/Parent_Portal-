import React from 'react';

const selectStyle = {
  fontSize: '16px',
  padding: '8px',
  width: '250px',
  height: '41px',
  borderRadius: '4px',
  border: '1px solid #6C757D',
  // backgroundColor: '#f7f7f7',
  color: '#343A40',
  fontSize: '14px',
  fontWeight: '400',
  outline: 'none', // Remove default focus outline
};


const SelectTermInput = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} style={selectStyle}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
        
      ))}
    </select>
  );
};

export default SelectTermInput;