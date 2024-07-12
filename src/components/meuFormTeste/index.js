import React from 'react';
import FiltroSelectSearch from '../FiltroSelectSearch';
import useFiltroSelectSearch from '../FiltroSelectSearch/useFiltroSelectSearch';

const MeuFormTeste = () => {

    const { formValues, usinaInputError, handleChange } = useFiltroSelectSearch();

    const handleSubmit = () => {
      console.log('Input values: ', formValues);
    };
  
    return (
      <form>
        {usinaInputError && <p>{usinaInputError}</p>}
        <FiltroSelectSearch 
          formValues={formValues} 
          handleChange={handleChange} 
        />
        <button onClick={handleSubmit}>Get Input Values</button>
      </form>
    );
  };
  
  export default MeuFormTeste;


