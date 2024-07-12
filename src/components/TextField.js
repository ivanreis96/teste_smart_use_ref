import React, { useState, forwardRef } from 'react';

const TextField = forwardRef((props, ref) => {
    const [value, setValue] = useState('');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    if (ref) {
      ref.current = {
        getValue: () => value,
      };
    }
  
    return (
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={props.placeholder}
      />
    );
});
  
export default TextField;