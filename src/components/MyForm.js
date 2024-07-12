import React, { useState } from 'react';
import FiltroSelectSearch from './FiltroSelectSearch';

const MyForm = () => {
    const [formValues, setFormValues] = useState({
      usinas: '',
      fazendas: '',
      blocos: '',
      talhoes: ''
    });

    const handleChange = (field, value) => {
      setFormValues({
        ...formValues,
        [field]: value
      })
    }

    const handleSubmit = () => {
      console.log('Input values: ', formValues);
    };
  
    return (
      <div>
        <FiltroSelectSearch formValues={formValues} handleChange={handleChange} />
        <button onClick={handleSubmit}>Get Input Values</button>
      </div>
    );
  };
  
  export default MyForm;


