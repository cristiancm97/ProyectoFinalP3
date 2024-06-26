import React from 'react'
import NavBar from '../NavBar/NavBar'
import BtnFlotanteWp from '../Button/BtnFlotanteWp/BtnFlotanteWp'
import FormRegistro from '../FormRegistro/FormRegistro'

function RegistroClub() {
  return (
    <div>
        <NavBar/>
        <FormRegistro/>
        <div className="contenedor-btnFlotanteWsp">
            <BtnFlotanteWp
          NroCelular={'3814653130'}
        />
      </div> 
    </div>
  )
}

export default RegistroClub
