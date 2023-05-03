import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AnadirMascota = () => {
    const veterinario = JSON.parse(localStorage.getItem('Usuario'));
    const veterinarioId = veterinario.data.veterinarioId;

    const [ formData, setFormData] = useState({
        nombre:'',
        especie:'',
        raza:'',
        fNacimiento:'',
        veterinarioId:veterinarioId,
        clienteId:''
    });

    const handleChange = (event) => {
    

        setFormData({
          ...formData,[event.target.name]: event.target.value,
             
          
        });
    
        
        
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        let url = "http://localhost:8080/api/mascota/create";
          try {
            const response = await fetch(url,{
              method: 'POST',
              headers:{'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            })
          } catch (error) {
            console.log(error);
          }
      };
    
      
  return (
    <div className='mascota'>
    <div className='container '>
      <div className="mt-5 d-flex flex-column mb-2">
        <div className='w-100 titulo-mascota'>
            <h1>Añadir Mascota</h1>
            
        </div>
        <div className='contenedor-mascota '>
          <div className='titulo-añadir mt-1'>
            <h2>Información Necesaria</h2>
          </div>
          <form className='controls-mascota h-auto w-100 d-flex gap-2 justify-content-around align-items-center flex-column' onSubmit={handleSubmit} >
            <div className='w-100 d-flex justify-content-between'>
              <div className='d-flex flex-column gap-5 w-50 mx-2'>
                <div className='d-flex flex-column gap-1 '>
                  <label htmlFor="">Nombre</label>
                  <input type="text" placeholder='Nombre' required={true} className="form-control" name='nombre' onChange={handleChange} />
                </div><br />
                <div className='d-flex flex-column gap-1 '>
                  <label htmlFor="">Especie</label>
                  <input type="text" placeholder='Especie' required={true} className="form-control " name='especie' onChange={handleChange} />
                </div><br />
                <div className='d-flex flex-column gap-1 '>
                  <label htmlFor="">Raza</label>
                  <input type="text" placeholder='Raza' required={true} className="form-control " name='raza'onChange={handleChange} />
                </div><br />
                <div className='d-flex flex-column gap-1 '>
                  <label htmlFor="">Fecha Nacimiento</label>
                  <input type="text" placeholder='Fecha Nacimiento' required={true} className="form-control " name='fNacimiento' onChange={handleChange}/>
                </div><br />
                <div className='d-flex flex-column gap-2'>
                  <div className='d-flex align-items-center gap-2'>
                      <label className='fw-bold '>ID Cliente</label>
                      <input type="text" placeholder='ID Cliente' required={true} className="form-control" name="clienteId"onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div><br />
            <div className='w-100 d-flex justify-content-center'>
                <button className='btn btn-primary'>Añadir</button>
            </div>
            <div className='botonatras'>
      <NavLink to="/Veterinario">
            <button>Atrás</button>
        </NavLink>
        </div>
        </form>
       
        </div>
      </div>
     
     </div>
     
     </div>
  )
}

export default AnadirMascota
