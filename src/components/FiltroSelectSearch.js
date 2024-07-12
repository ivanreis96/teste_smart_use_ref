import React from "react";
import TextField from "./TextField";

const FiltroSelectSearch = ({ refs }) => {
    return(
        <div style={{ display: 'flex', gap:'2rem', marginBottom:'10px'}}>
            <div>
                <label>USINAS</label><br />
                <TextField ref={refs[0]} placeholder="Digite o nome" />
            </div>
            <div>
                <label>FAZENDAS</label><br />
                <TextField ref={refs[1]} placeholder="Digite o nome" />
            </div>
            <div>
                <label>BLOCOS</label><br />
                <TextField ref={refs[2]} placeholder="Digite os blocos" />
            </div>
            <div>
                <label>TALHÕES</label><br />
                <TextField ref={refs[3]} placeholder="Digite os talhões" />
            </div>
        </div>
    )
}

export default FiltroSelectSearch;