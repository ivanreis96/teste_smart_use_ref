import React, { useState, useEffect } from 'react';
import FiltroSelectSearch from './FiltroSelectSearch';

const MyForm = () => {

    const [usinaInputError, setUsinaInputError] = useState('');

    const [formValues, setFormValues] = useState({
      usinas: '',
      fazendas: '',
      blocos: '',
      talhoes: ''
    });

    useEffect(() => {
      if(formValues.usinas.length < 2){
        setUsinaInputError('Nome da usina tem que ter mais que 2 caracteres');
      }else{
        setUsinaInputError('');
      }
    }, [formValues.usinas])
    
    useEffect(() => {
      setUsinaInputError('');
    }, [])

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
      <form>
        {usinaInputError && <p>{usinaInputError}</p>}
        <FiltroSelectSearch formValues={formValues} handleChange={handleChange} />
        <button onClick={handleSubmit}>Get Input Values</button>
      </form>
    );
  };
  
  export default MyForm;


