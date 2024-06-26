import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Cards from '../Cards/Cards'
import"./Canchas.css"

function Canchas() {
  return (
    <div>
        <NavBar/>
        <h1 className="titulo-canchas">Listado de clubes:</h1>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Canchas