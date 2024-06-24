import React from 'react'
import '../pages/Login.css'
import Logo from '../Logo/Logo'

function Login() {
  return (
    <div>
        <div id='contenedor-login'>
            <div className='grid-login'>
                <div className="grid-item-login">
                    <div className="contenedor-img-login" id='img-usuario'></div> 
                    <h2 className='titulo-login'>Quiero reservar un turno</h2>
                    <button className='btn-iniciar-sesion-usuario' id='btn-google'>Iniciar con Google</button>
                    <h3>O</h3>
                    <button className='btn-iniciar-sesion-usuario' id='btn-facebook'>Iniciar con Facebook</button>
                </div>
                
                <div className='grid-item-login'>
                    <div className="contenedor-img-login" id='img-negocio'></div>                    
                    <h2 className='titulo-login'>Quiero gestionar mi club</h2>
                    <div className="formulario-negocio">
                        <input type='text' placeholder='   Usuario' className='input-usuario'/>
                        <input type='password' placeholder='   Contraseña' className='input-contraseña' />
                        <button className='btn-iniciar-sesion'>Iniciar Sesión</button>
                    </div>
                    <p className='recuperar-password-negocio' onClick={handleRecuperarPassword}>¿Has olvidado tu contraseña?</p>
                    <p className='registro-negocio' onClick={handleRegistroClub}>¿Eres nuevo? Resgistrate aquí</p>
                </div>
                
            </div>
        </div>
        <div className="contenedor-logo">
            <Logo/>
        </div>
    </div>
  )
}

export default Login
