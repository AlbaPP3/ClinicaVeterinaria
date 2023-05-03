import React from 'react'
import  { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';





  const IniciarSesion = () => {
    const [formData,setFormData ] = useState({
        nombre: '',
        contraseña: '',
        persona:''
      })
    
      const [selectedOption, setSelectedOption] = useState('');

      const navigate = useNavigate();
      const handleChange = (event)=>{
        setFormData({
          ...formData, [event.target.name]:event.target.value
        })
      }
    
      const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
          }
    console.log(selectedOption)
    
      const cogerDatosVeterinario= async () =>{
        try {
          const response = await axios.get(`http://localhost:8080/api/veterinario/${formData.nombre}/${formData.contraseña}`,{
    
          })
          if(response.data){
            console.log(response.data)
            const datos= JSON.stringify(response);
            localStorage.setItem("Usuario", datos);
            navigate("/Veterinario")

          }else{
            console.log("Usuario no encontrado")
          }
        } catch (error) {
          console.log(error)
        }
      }
    
      const cogerDatosCliente= async () =>{
        try {
          const response = await axios.get(`http://localhost:8080/api/cliente/${formData.nombre}/${formData.contraseña}`,{
    
          })
          if(response.data){
            const datos= JSON.stringify(response);
            localStorage.setItem("Usuario", datos);
            console.log(response.data)
            navigate("/Cliente")
          }else{
            console.log("Usuario no encontrado")
          }
        } catch (error) {
    
        }
      }
    
      const handlesubmid = async (event)=>{
        event.preventDefault();
        console.log(formData);
    
        if(selectedOption==="Veterinario"){
          cogerDatosVeterinario();
         }else if(selectedOption === "Cliente"){
           cogerDatosCliente();
      }
      }

    return (
        <div  >
        <div>   
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
        </div> 
        <form className='formulario' onSubmit={handlesubmid}>
            <div className=''>
                    <h1>Veterinario<br/> La Mascota Feliz</h1>
                    <div>
                    <select name="" id="" value={selectedOption} onChange={handleSelectChange}>
                        <option value="Veterinario" name='persona'>Veterinario</option>
                        <option value="Cliente" name='persona'>Cliente</option>
                    </select>
                    </div><br/>
                    <div className=''>
                    <label htmlFor="" className=''>Nombre:</label>
                    <input type="text" placeholder='ingrese su nombre' name='nombre' onChange={handleChange}/> 
                    </div><br/>
                    <div className=''>
                    <label htmlFor="" className=''>Contraseña:</label>
                    <input type="text" placeholder='ingrese su contraseña' name='contraseña' onChange={handleChange}/> 
                    </div><br/>
    
                    <div className="boton">
                    <button>Ingresar</button>
                    </div>
            </div>    
        </form>
        <div className='clinicaintro'>
            <div className='intro'>
                <div className='titulo'>
                    <div className='titulo1'>
                        <h2>Lo mejor para tu compañero</h2>
                        
                    <ul>
                        <li>Amplio catálogo de servicios para su mascota.<br />Desparasitación, operaciones menores, limpieza y peinado, son solo algunos de nuestros servicios, venga y descubra el resto.</li>
                        <li>Formado equipo de profesionales veterinarios.<br />Nuestros veterinarios le atenderan encantados según las necesidades de su mascota.</li>
                        <li>Nuestros bonos.<br />Disponemos de bonos para que ahorre en el cuidado de su mascota.</li>
                    </ul>
                    </div>
                </div>
                <div className='imagenintro'>
                    <img src="img1.jpg" alt="50px" />
                </div>
                </div>    
        </div>
          
        <div className='infofooter'>
            <div className='imagenfooter'>
            <img src="images1.png" alt="10px" />
            </div>
        <div className='horariotlf'>
                <h2>Información</h2>
                <p className=''>De Lunes a Viernes de 8:00 a 20:30<br/>Sábados de 9:00 a 14:00 </p>
                <p className=''>Llámanos +34 600 123 456</p>
        </div>
        <div className='redes'>
            <h2>Síguenos en Redes</h2>
            <div className='imagenesredes'>
                <img src="https://well-app.cdn.bubble.io/d75/f1663751848433x160216836709769150/FACEBOOK.svg" alt="" />
                <img src="https://well-app.cdn.bubble.io/d75/f1663751858110x412620440416907600/INSTAGRAM.svg" alt="" />
                <img src="https://well-app.cdn.bubble.io/d75/f1663751869490x152364136197731500/LINKEDIN.svg" alt="" />
            </div>
        </div>
        </div>
      </div>
    )
  }
  export default IniciarSesion
