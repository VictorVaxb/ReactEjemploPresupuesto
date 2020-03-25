import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ setPresuApp, setRestoApp, setShowPregApp }) => {

    const [presupuesto, setPresu] = useState(0);
    const [error, setError] = useState({
        hasError: false,
        errorMsg: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        if(presupuesto < 1 || isNaN(presupuesto)){
            setError({
                hasError: true,
                errorMsg: "Presupuesto no valido"
            })
            return;
        }else{
            setError({
                hasError: false,
                errorMsg: ""
            })
            setPresuApp(presupuesto);
            setRestoApp(presupuesto);
            setShowPregApp(false);
        }
    }

    const editPresup = e => {
        let val = parseInt(e.target.value);
        if(val > 0){
            setError({
                hasError: false,
                errorMsg: ""
            })
        }
        setPresu(parseInt(e.target.value));
    }

    return (
        <Fragment>
            <h2>Informa tu presupuesto</h2>
            {
                error.hasError ? 
                <Error
                    error={ error.errorMsg } 
                /> :
                null
            }
            <form onSubmit={handleSubmit}>
                <input 
                    className="u-full-width"
                    type="number"
                    placeholder="Presupuesto mensual"
                    onChange={editPresup}
                />
                <input 
                    className="button-primary u-full-width"
                    type="submit"
                    value="Aceptar"
                />
            </form>
        </Fragment>
    );
};

Pregunta.propTypes = {
    setPresuApp: PropTypes.func.isRequired,
    setRestoApp: PropTypes.func.isRequired,
    setShowPregApp: PropTypes.func.isRequired
}

export default Pregunta;