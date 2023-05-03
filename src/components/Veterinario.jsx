import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


const Veterinario = () => {
    const veterinario = JSON.parse(localStorage.getItem('Usuario'));
    const veterinarioId = veterinario.data.veterinarioId;

    const nombre= veterinario.data.nombre;
    const apellido = veterinario.data.apellido;
    const telefono=veterinario.data.telefono;
    const [DatosMascota, setDatosMascota]= useState([]);
    const[Mascota, setMascota]= useState('')
    const cogerMascota=(event)=>{
        setMascota(event.target.value);
    }

    const cogerDatosMascota= async () =>{
        try {
          const response = await axios.get(`http://localhost:8080/api/mascota/mascota/${Mascota}`,{
    
          })
          if(response.data){
           setDatosMascota(response.data)
           console.log(response.data);
          }else{
            console.log("Mascota no encontrada")
          }
        } catch (error) {
          console.log(error)
        }
      }
    console.log(Mascota);

    const Eliminar= (id)=>{
        setDatosMascota([])
        fetch(`http://localhost:8080/api/mascota/delete/${id}`,{
            method:'DELETE'
        })
        .then(response => {
            console.log("Eliminado")
        } )
    }
    useEffect(()=>{
        cogerDatosMascota();
    },[])


  return (
    <div className='veterinario'>
        <div className='vetebuscar'>
            <div className='datosvete'>
                    <h2>Datos Veterinario</h2>
                <div className='datosvete1'>
                    <h3>Nombre:{nombre}</h3>
                    <h3>Apellido:{apellido}</h3>
                    <h3>Teléfono:{telefono}</h3>
                </div><br />
                <div className='botones1'>
                        <h2>Añadir Mascota</h2><br /><br />
                        <NavLink to="/AnadirMascota">
                            <button>Añadir Mascota</button>
                        </NavLink>
                </div>
            </div>
            
                <div className='buscarmascota'>
                    <div className='datosmascota'>
                        <div className='buscarmascota1'>
                            <h2>Buscar Mascota</h2>
                        </div>
                        <input type="text" placeholder='Ingresar Mascota' name='mascota' onChange={cogerMascota} />
                        <button onClick={cogerDatosMascota}>Buscar</button>
                        <button className='btn btn-danger' onClick={()=>Eliminar(DatosMascota.mascotaId)}>Eliminar</button>
                        
                        <h3>Nombre :{DatosMascota.nombre}</h3>
                        <h3>Especie :{DatosMascota.especie}</h3>
                        <h3>Raza :{DatosMascota.raza}</h3>
                        <h3>Fecha Nacimiento :{DatosMascota.fNacimiento}</h3>
                        <h3>ID Cliente :{DatosMascota.clienteId}</h3>
                        <h3>ID Veterinario :{DatosMascota.veterinarioId}</h3> 
                        
                    </div>     
            </div>
        </div>
        <div className='botones'>
        <div className='botonsalir1'>
            <NavLink to="/">
                <button>Salir</button>
            </NavLink>
        </div>
        </div>
        
    </div>
  )
}

export default Veterinario
