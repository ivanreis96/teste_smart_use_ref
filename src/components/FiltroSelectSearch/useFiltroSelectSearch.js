import { useState, useEffect } from 'react';

const useFiltroSelectSearch = () =>{
    const [formValues, setFormValues] = useState({
        usinas: '',
        fazendas: '',
        blocos: '',
        talhoes: ''
    });

    const [usinaInputError, setUsinaInputError] = useState('');

    const handleChange = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value
        });
    };

    useEffect(() => {
        if (formValues.usinas.length < 2) {
            setUsinaInputError('Nome da usina tem que ter mais que 2 caracteres');
        } else {
            setUsinaInputError('');
        }
    }, [formValues.usinas]);

    useEffect(() => {
        setUsinaInputError('');
    }, [])

    return {
        formValues,
        usinaInputError,
        handleChange
    };
};

export default useFiltroSelectSearch;