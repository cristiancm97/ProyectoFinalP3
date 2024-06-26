import React, { useState, useEffect } from 'react';
import './FormRegistro.css';
import Modal from '../Modal/Modal';

function FormRegistro() {
    const [nombreClub, setNombreClub] = useState('');
    const [nombreTitular, setNombreTitular] = useState('');
    const [nroTitular, setNroTitular] = useState('');
    const [edad, setEdad] = useState('');
    const [nroClub, setNroClub] = useState('');
    const [localidad, setLocalidad] = useState('San Miguel de Tucumán');
    const [direccion, setDireccion] = useState('');
    const [imagenPerfil, setImagenPerfil] = useState(null);
    const [correo, setCorreo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    
  
    useEffect(() => {
      // Habilitar el botón de envío solo si todos los campos están completos
      const isFormValid =
        nombreClub && nombreTitular && nroTitular && edad && nroClub && localidad && direccion && correo && imagenPerfil && usuario && password;
      setIsSubmitDisabled(!isFormValid);
    }, [nombreClub, nombreTitular, nroTitular, edad, nroClub, localidad, direccion, correo, imagenPerfil, usuario, password]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const club = {
        nombreClub,
        nombreTitular,
        nroTitular,
        edad,
        nroClub,
        localidad,
        direccion,
        correo,
        usuario,
        password,
      };
    
      // Convertir el objeto club a JSON
      const clubJson = JSON.stringify(club);
      
      try {
        const responseBackend = await fetch('http://localhost:3001/registro/nuevoclub', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: clubJson
        });
    
        if (!responseBackend.ok) {
          throw new Error('Error al enviar los datos');
        }
    
        // Restablecer los estados a sus valores iniciales
        setNombreClub('');
        setNombreTitular('');
        setNroTitular('');
        setEdad('');
        setNroClub('');
        setDireccion('');
        setImagenPerfil(null);
        setCorreo('');
        setUsuario('');
        setPassword('');
        setLocalidad('San Miguel de Tucumán'); // Reinicia el valor de localidad
    
        // Mostrar el modal
        setModalVisible(true);
    
        // Ocultar el modal después de 1 segundo
        setTimeout(() => {
          setModalVisible(false);
        }, 10000);
    
      } catch (error) {
        console.error('Error al enviar los datos:', error.message);
        // Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
      }
    };
    
    

  return (
    <div className="form-container">
      <h1>Formulario de registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del club:</label>
          <input type="text" value={nombreClub} onChange={(e) => setNombreClub(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Nompre y Apellido del titular:</label>
          <input type="text" value={nombreTitular} onChange={(e) => setNombreTitular(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Nro de celular del titular:</label>
          <input type="text" value={nroTitular} onChange={(e) => setNroTitular(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Número de contacto del club:</label>
          <input type="tel" value={nroClub} onChange={(e) => setNroClub(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Localidad:</label>
          <select id="select" value={localidad} onChange={(e) => setLocalidad(e.target.value)} required>
            <option value="San Miguel de Tucumán">San Miguel de Tucumán</option>
            <option value="Yerba Buena">Yerba Buena</option>
            <option value="Tafí Viejo">Tafí Viejo</option>
          </select>
        </div>
        <div className="form-group">
          <label>Dirección:</label>
          <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Imagen de perfil del club: </label>
          <input type="file" onChange={(e) => setImagenPerfil(e.target.files[0])} required />
        </div>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Usuario:</label>
          <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="button-container">
          <button type="submit" disabled={isSubmitDisabled}>Enviar</button>
        </div>
      </form>

      {/* Renderiza el modal si modalVisible es true */}
      {modalVisible && 
        <Modal 
            tituloMsj="Formulario enviado"
            cuerpoMsj="Tu formulario ha sido enviado correctamente, en breves nos contactaremos con usted. Muchas gracias"
            />}

    </div>
  );
}

export default FormRegistro;

