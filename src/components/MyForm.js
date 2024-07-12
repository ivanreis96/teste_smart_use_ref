import React, { useState, useEffect } from 'react';
import FiltroSelectSearch from './FiltroSelectSearch';

const MyForm = () => {
    const [formValues, setFormValues] = useState({
      usinas: '',
      fazendas: '',
      blocos: '',
      talhoes: ''
    });

    useEffect(() => {
      if(formValues.usinas.length < 2){
        console.log('Nome da usina tem que ter mais que 2 caracteres');
      }
    }, [formValues.usinas])

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


