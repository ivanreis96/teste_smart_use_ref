import React, { useRef } from 'react';
import FiltroSelectSearch from './FiltroSelectSearch';

const MyForm = () => {
    const textFieldRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
    const handleSubmit = () => {
      textFieldRefs.forEach((ref, index) => {
        if (ref.current) {
          const inputValue = ref.current.getValue();
          console.log(`Input ${index + 1}: ${inputValue}`);
          // Faça algo com o valor do input
        }
      });
    };
  
    return (
      <div>
        <FiltroSelectSearch refs={textFieldRefs} />
        <button onClick={handleSubmit}>Get Input Values</button>
      </div>
    );
  };
  
  export default MyForm;


