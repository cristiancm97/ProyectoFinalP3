import React from 'react'
import './Card.css'

function Card({imagen,titulo}) {
  return (
    <div id='contenedor-card'>
        <div className="card">
            <img src={imagen} alt={titulo} className="card-img" />
            <div className="card-contenido">
                <h2 className="card-titulo">{titulo}</h2>
                <div className='card-descripcion'>
                    <p className="card-localidad">Localidad: </p>
                    <p className="card-direccion">Ubicacion: </p>
                </div>
                <button className='btn-club'>  Ver más  </button>
            </div>
        </div>
    </div>
  )
}

export default Card
