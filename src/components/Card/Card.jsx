import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

function Card({ imagen, titulo, id,direccion,localidad }) {
  
  const navigate = useNavigate();

  return (
    <div id='contenedor-card'>
      <div className="card">
        <img src={imagen} alt={titulo} className="card-img" />
        <div className="card-contenido">
          <h2 className="card-titulo">{titulo}</h2>
          <div className='card-descripcion'>
            <p className="card-direccion">Dirección: {direccion}</p>
            <p className="card-localidad">Localidad: {localidad} </p>          
          </div>
          <button className='btn-club' onClick={() => navigate(`/canchas/${id}`)}>Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Card
