import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import InfoClub from '../InfoClub/InfoClub'
import "./Club.css"
import TablaCancha from '../TablaCanchas/TablaCachas'

function Club() {
  return (
    <div>
        <NavBar/>
        <h1 className="nombre-club">
          Italia Padel
        </h1>
       <div>
          <h1>Elegi tu turno</h1>
          <TablaCancha/>
        </div>
        <InfoClub/>
        <Footer/>
    </div>
  )
}

export default Club
