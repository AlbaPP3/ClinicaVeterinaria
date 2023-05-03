import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';


const EditarMascota = () => {
 const {id}=useParams();
 const {mascota,setMascota} = useState({});
 const getMascota =() => {
 fetch (`http://localhost:8080/api/mascota/${id}`)
 .then (Response => Response.json())
 .then (Respuesta_final => {setMascota(Respuesta_final)})

 }

useEffect(()=>{
    getMascota();
},[])

console.log(mascota);

return (
   
            <NavLink to="/Veterinario">
            <button>Atrás</button>
        </NavLink>
   
)

}
export default EditarMascota