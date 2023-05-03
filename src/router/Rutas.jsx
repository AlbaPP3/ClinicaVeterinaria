import React from 'react'
import IniciarSesion from '../components/IniciarSesion'
import Veterinario from '../components/Veterinario'
import { Routes, Route,  BrowserRouter } from 'react-router-dom'
import Cliente from '../components/Cliente'
import AnadirMascota from '../components/AnadirMascota'
import EditarMascota from '../components/EditarMascota'

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>                   
      <Routes>             
            <Route path='/' element={<IniciarSesion/>}/> 
            <Route path='/Veterinario' element={<Veterinario/>}/>
            <Route path='/Cliente' element={<Cliente/>}/>
            <Route path='/AnadirMascota' element={<AnadirMascota/>}/>
            <Route path='/EditarMascota' element={<EditarMascota/>}/>                          
        </Routes>          
        </BrowserRouter>
    </div>
  )
}

export default Rutas