import React from 'react';

const TextField = React.forwardRef(({ value, onChange, placeholder }, ref) => {
  
    return (
      <input
        type="text"
        value={value}
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
});
  
export default TextField;