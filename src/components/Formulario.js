import React, { Fragment, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
/* const Formulario =()=> {
    return()
} */

const Formulario = ({crearCita}) => {
/* programar arriba de return */

const[cita,actualizarCita]=useState({
    mascota:'',
    propietario:'',
    fecha: '',
    hora:'',
    sintomas:''
})

const  [error,actualizarError]=useState (false)

const actualizarState = e => {
    actualizarCita({
      ...cita,[e.target.name]: e.target.value
    })
}

const {mascota,propietario,fecha,hora,sintomas}=cita
//cuando el usuario presiona agregar cita
const submitCita = e => {
   e.preventDefault();
console.log(mascota)

if(mascota.trim()===''|| propietario.trim()=== '' 

||fecha.trim()===''||hora.trim()===''|| sintomas.trim()===''){

   actualizarError(true)
    return
}
actualizarError(false)
cita.id=uuidv4();
//console.log(cita)
crearCita(cita)

actualizarCita({
    mascota:'',
    propietario:'',
    fecha: '',
    hora:'',
    sintomas:''
})
}
    return (
        <Fragment>
            <h2>Crear Cita</h2>
         
            {error ? <p className='alerta-error'>rellene los campos</p>:null}
            <form onSubmit={submitCita}>
                <label>Nombre de la Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre de Propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea  
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
                ></textarea>
               
                   <button
                   type="submit"  
                   className="u-full-width button-primary">
                    agregar cita</button>


            </form>
        </Fragment>
    )
}

export default Formulario;