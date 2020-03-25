import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Form from './components/Form';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presup, setPresu] = useState(0);
  const [resto, setResto] = useState(0);
  const [showpreg, setShowPreg] = useState(true);
  const [gastos, setGastos] = useState([]);

  const addGasto = gasto => {
    setGastos([
      ...gastos,
      gasto
    ])
    let rest = resto - gasto.cant;
    setResto(rest)
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto mensual</h1>
        <div className="contenido-principal contenido">
          {
            showpreg ?
            (<Pregunta 
              setPresuApp={setPresu}
              setRestoApp={setResto}
              setShowPregApp={setShowPreg}
            />) :
            <div className="row">
              <div className="one-half column">
                <Form 
                  addGasto={addGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />
                <ControlPresupuesto 
                  presup={presup}
                  resto={resto}
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
