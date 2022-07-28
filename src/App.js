import React, { Fragment, useEffect, useState,} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
//arreglo de citas 

let citasIniciales = JSON.parse(localStorage.getItem('citas'))
if(!citasIniciales){
  citasIniciales=[]
}

const [citas,guardarCitas]= useState(citasIniciales);

//crear funcion 
/* programar arriba de return */
useEffect(() => {
  if(citasIniciales){
localStorage.setItem('citas',JSON.stringify(citas))
  }else{
    localStorage.setItem('citas',JSON.stringify([]))
  }
},[citas])

const crearCita = cita => {
  guardarCitas([...citas,cita])
//console.log(cita)
}

//funcion eliminar cita
const eliminarCita = id => {
const nuevasCitas=citas.filter(cita => cita.id !== id)
guardarCitas(nuevasCitas)
}

//cuando no hay citas
const  titulo = citas.length ===0 ? 'no hay citas':'administra citas'

  return (
    <Fragment>

      <h2>Administrador Pacientes</h2>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario 
            crearCita={crearCita}/>
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
