import React from 'react'
import './Cards.css'
import Card from '../Card/Card'

function Cards() {
  return (
    
        <div className="contenedor-grid-cards">
            <div className="grid-item-card">
                <Card
                imagen={'/imagenes/cards/1.jpg'}
                titulo='El Galpon Padel'
                id={"1"}/>
            </div>
            <div className="grid-item-card">
                <Card
                imagen={'/imagenes/cards/2.jpg'}
                titulo='Italia Padel Club'
                id={"2"}/>
            </div>
            <div className="grid-item-card">
                <Card
                imagen={'/imagenes/cards/3.jpg'}
                titulo="El Fronton Padel"
                id={"3"}/>
            </div>
        </div>
    
  )
}

export default Cards
