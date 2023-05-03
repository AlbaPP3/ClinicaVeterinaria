import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';


const Cliente = () => {
    const cliente = JSON.parse(localStorage.getItem('Usuario'));
    const clienteId = cliente.data.clienteId;

    const nombre= cliente.data.nombre;
    const apellido = cliente.data.apellido;
    const telefono=cliente.data.telefono;
    
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
    useEffect(()=>{
        cogerDatosMascota();
    },[])

  return (
    <div className='cliente'>
         <div className='info'>
        <img src="images1.png" alt="10px" />
        <div className='info1'>
            <div className=''>
                <p className=''>De Lunes a Viernes de 8:00 a 20:30<br/>Sábados de 9:00 a 14:00 </p>
            </div>
                <div className='tlf'>
                <p className=''>Llámanos +34 600 123 456</p>
            </div>
        </div>
        </div>
        <div className='datoscliente'>
            <div className='cliente1'>
                <h2>Datos Cliente</h2><br />
                <h3>Nombre:{nombre}</h3><br />
                <h3>Apellido:{apellido}</h3><br />
                <h3>Teléfono:{telefono}</h3>
            </div> 
            <div className='servicios'>
                <div className='servicios1'>
                    <div className='servicios2'>
                        <h2>Tratamientos</h2>
                        <p>Podrá obtener los medicamentos necesarios para el tratamiento de su mascota en nuestro centro</p>
                        <h2>Sala Quirúrgica</h2>
                        <p>Para una atención más completa, disponemos de una sala quirúrgica para operaciones menores</p>
                        <h2>Sala de Recuperación</h2>
                        <p>Equipada con la máxima comodidad y confort posible para su mascota, bajo los cuidados de nuestros profesionales</p>

                    </div>
                </div>
            </div>
        </div>
        <div className='buscarmascotac'>
                    <div className='datosmascotac'>
                        <img src="14.png" alt="10px" />
            
                        <div className='buscarmascota1c'>
                            <div className=''>
                            <h2>Buscar Mascota</h2>
                        
                            <input type="text" placeholder='Ingresar Mascota' name='mascota' onChange={cogerMascota} />
                            <button onClick={cogerDatosMascota}>Buscar</button>
                            <h3>Nombre :{DatosMascota.nombre}</h3>
                            <h3>Especie :{DatosMascota.especie}</h3>
                            <h3>Raza :{DatosMascota.raza}</h3>
                            <h3>Fecha Nacimiento :{DatosMascota.fNacimiento}</h3>
                            </div>
                            <div className='idesmasc'>
                            <h3>ID Cliente :{DatosMascota.clienteId}</h3>
                            <h3>ID Veterinario :{DatosMascota.veterinarioId}</h3>  
                            </div>
                        </div>
                    </div>     
            </div>
        <div className='botonsalir'>
        <NavLink to="/">
            <button>Salir</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Cliente
