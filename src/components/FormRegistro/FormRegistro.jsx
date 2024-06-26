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
  const [canchas, setCanchas] = useState('');
  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Habilitar el botón de envío solo si todos los campos están completos
    const isFormValid =
      nombreClub && nombreTitular && nroTitular && edad && nroClub && localidad && direccion && correo && canchas && usuario && password;
    setIsSubmitDisabled(!isFormValid);
  }, [nombreClub, nombreTitular, nroTitular, edad, nroClub, localidad, direccion, correo, canchas, usuario, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const club = {
      nombreClub: nombreClub,
      nombreTitular: nombreTitular,
      nroTitular: nroTitular,
      edad: edad,
      nroClub: nroClub,
      localidad: localidad,
      direccion: direccion,
      correo: correo,
      usuario: usuario,
      password: password,
      canchas:canchas,
    };
    
    console.log(club)
    try {
      // Envía el objeto club como JSON al backend
      const response = await fetch('http://localhost:5000/registro/nuevoclub', {
        method: 'POST',
        body: JSON.stringify(club),
      });
  
      if (response.ok) {
        // Si la solicitud fue exitosa, muestra el mensaje y el modal
        setMensaje('Formulario enviado correctamente');
        setModalVisible(true);
      } else {
        // Si hubo algún problema en la solicitud, lanza un error
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      // Captura y maneja cualquier error ocurrido durante la solicitud
      console.error('Error al enviar el formulario:', error);
      setMensaje('Error al enviar el formulario');
      setModalVisible(true);
    }
  
    // Limpia los campos del formulario después de enviarlo
    setNombreClub('');
    setNombreTitular('');
    setNroTitular('');
    setEdad('');
    setNroClub('');
    setDireccion('');
    setCanchas('');
    setCorreo('');
    setUsuario('');
    setPassword('');
    setLocalidad('San Miguel de Tucumán'); // Reinicia el valor de localidad
  
    // Mostrar el modal
    setModalVisible(true);

    // Oculta el modal después de 1 segundo y limpia el mensaje
    setTimeout(() => {
      setModalVisible(false);
      setMensaje('');
    }, 1000);
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
          <label>Cantidad de canchas:</label>
          <input type="number" value={canchas} onChange={(e) => setCanchas(e.target.value)} required />
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
      {modalVisible && (
        <Modal
          tituloMsj="Formulario enviado"
          cuerpoMsj={mensaje}
        />
      )}
    </div>
  );
}

export default FormRegistro;
