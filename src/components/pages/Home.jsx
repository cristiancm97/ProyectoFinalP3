import React from 'react'
import '../pages/Home.css'
import NavBar from '../NavBar/NavBar'
import Slider from '../Slider/Slider'
import Titulo from '../Titulo/Titulo'
import Cards from '../Cards/Cards'
import BtnFlotanteWp from '../Button/BtnFlotanteWp/BtnFlotanteWp'

function Home() {
  return (
    <div>
      <NavBar/>
      <Slider/>
      <Titulo
        title={'Clubes mas visitados'}
      />
      <Cards/>
      <div className="contenedor-btnFlotanteWsp">
        <BtnFlotanteWp
          NroCelular={'3814653130'}
        />
      </div>  
    </div>
  )
}

export default Home
