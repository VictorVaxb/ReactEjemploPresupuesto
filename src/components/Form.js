import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({ addGasto }) => {

    const [nombre, setNombre] = useState("");
    const [cant, setCant] = useState(0);
    const [error, setError] = useState({
        hasError: false,
        errorMsg: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        if(nombre.trim === "" || cant < 1 || isNaN(cant)){
            console.log("Gasto incorrecto");
            setError({
                hasError: true,
                errorMsg: "Valores incorrectos"
            })
            return
        }
        setError({
            hasError: false,
            errorMsg: ""
        })
        let gasto = { id: uuid(), nombre, cant };
        addGasto(gasto)
        setNombre("")
        setCant(0)
    }

    const handleChangeCant = e => {
        let val = e.target.value;
        setCant(val);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agrega tus gastos aqui</h2>
            {
                error.hasError ? (<Error error={error.errorMsg} />) : null
            }
            <div className="campo">
                <label>Nombre gasto</label>
                <input 
                    className="u-full-width"
                    type="text"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <label>Monto gasto</label>
                <input 
                    className="u-full-width"
                    type="number"
                    placeholder="Ej. 1000"
                    value={cant}
                    onChange={handleChangeCant}
                />
                <input 
                    className="button-primary u-full-width"
                    type="submit"
                    value="Agregar gasto"
                />
            </div>
        </form>
    );
};

Form.propTypes = {
    addGasto: PropTypes.func.isRequired
}

export default Form;