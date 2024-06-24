import React from 'react'
import './Cards.css'
import Card from '../Card/Card'

function Cards() {
  return (
    
        <div className="contenedor-grid-cards">
            <div className="grid-item-card">
                <Card
                imagen={'/imagenes/cards/1.jpg'}
                titulo='El Galpon Padel'/>
            </div>
            <div className="grid-item-card">
                <Card
                imagen={'/imagenes/cards/2.jpg'}
                titulo='Italia Padel Club'/>
            </div>
            <div className="grid-item-card">
                <Card
                imagen={'/imagenes/cards/3.jpg'}
                titulo="El Fronton Padel"/>
            </div>
        </div>
    
  )
}

export default Cards
