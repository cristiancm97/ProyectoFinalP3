import React from 'react';
import './CardAdminClub.css';

const ClubCard = ({ club }) => {

    const handleClick = () => {
        alert("Historial de reservas");
      };

  return (
    <div className="club-card">
      <div className="card-header">
        <strong>{club.nombreClub}</strong>
      </div>
      <div className="grid-info-card-negocio">
        <div className="card-negocio-admin">
            <p id='admin-info-negocio'><strong>Nombre del Titular:</strong> {club.nombreTitular}</p>
            <p><strong>Número del Titular:</strong> {club.nroTitular}</p>
            <p><strong>Edad:</strong> {club.edad}</p>
            <p><strong>Número del Club:</strong> {club.nroClub}</p>
            <p><strong>Localidad:</strong> {club.localidad}</p>
        </div>
        <div className="card-negocio-admin">
            <p><strong>Dirección:</strong> {club.direccion}</p>
            <p><strong>Correo:</strong> {club.correo}</p>
            <p><strong>Usuario:</strong> {club.usuario}</p>
            <p><strong>Password:</strong> {club.password}</p>
            <p><strong>Canchas:</strong> {club.canchas}</p>
        </div>
      </div>
      <div className="card-footer">
        <p><strong>Fecha de registro:</strong> {new Date(club.date).toLocaleDateString()}</p>
      </div>
      <div className="grid-btn-card-negocio">
        <button className="btn-card-negocio" id='btn-negocio-baja'><strong>Dar de Baja</strong></button>
        <button className="btn-card-negocio" id='btn-negocio-reserva' onClick={handleClick}><strong>Ver Historial de Reservas</strong></button>
        <button className="btn-card-negocio" id='btn-negocio-editar'><strong>Editar</strong></button>
      </div>
    </div>
  );
};

export default ClubCard;
