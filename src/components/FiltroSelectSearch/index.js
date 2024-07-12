import React from "react";
import TextField from "../TextField";
import './style.css';

const FiltroSelectSearch = ({ formValues, handleChange }) => {
    return (
        <div className="filtro-select-search">
            <div>
                <label>USINAS</label><br />
               
                <TextField
                    value={formValues.usinas}
                    onChange={(e) => handleChange('usinas', e.target.value)}
                    placeholder="Digite o nome"
                />
            </div>
            <div>
                <label>FAZENDAS</label><br />                
                <TextField 
                    value={formValues.fazendas}
                    onChange={(e) => handleChange('fazendas', e.target.value)}
                    placeholder="Digite o nome"
                />

            </div>
            <div>
                <label>BLOCOS</label><br />
                <TextField 
                    value={formValues.blocos}
                    onChange={(e) => handleChange('blocos', e.target.value)}
                    placeholder="Digite os blocos"
                />
            </div>
            <div>
                <label>TALHÕES</label><br />
                <TextField 
                    value={formValues.talhoes}
                    onChange={(e) => handleChange('talhoes', e.target.value)} 
                    placeholder="Digite os talhões"
                />

            </div>
        </div>
    )
}

export default FiltroSelectSearch;