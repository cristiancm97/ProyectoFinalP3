import React from 'react'
import '../pages/Login.css'
import Logo from '../Logo/Logo'

function Login() {

    const handleRecuperarPassword = () => {
        window.location.href = '/recuperar-password'; // Reemplaza con la URL de tu página de recuperación de contraseña
      };
    
      const handleRegistroClub = () => {
        window.location.href = '/registro-club'; // Reemplaza con la URL de tu página de registro
      };

      const mensaje = () => {
        const usuario = document.getElementById('user-club').value;
        const password = document.getElementById('password-club').value;

        // Verificar usuario y contraseña
        if (usuario === 'admin' && password === '1234') {
            // Redireccionar al link deseado
            window.location.href = '/admin'; // Reemplaza con la URL a donde quieras redireccionar
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

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
                        <input type='text' placeholder='   Usuario' className='input-usuario' id='user-club'/>
                        <input type='password' placeholder='   Contraseña' className='input-contraseña' id='password-club'/>
                        <button className='btn-iniciar-sesion' onClick={mensaje}>Iniciar Sesión</button>
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
