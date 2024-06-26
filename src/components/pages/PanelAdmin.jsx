import React, { useState } from 'react';
import ListaCardsAdmin from '../ListaCardsAdmin/ListaCardAdmin';
import BtnFlotanteWp from '../Button/BtnFlotanteWp/BtnFlotanteWp';
import Footer from '../Footer/Footer';
import ListaTablaAdmin from '../ListaTablaAdmin/ListaTablaAdmin';

function PanelAdmin() {
  const [mostrarTabla, setMostrarTabla] = useState(true);

  return (
    <div>
      <div className="botones-alternancia">
        <button onClick={() => setMostrarTabla(true)}>Mostrar Clubes</button>
        <button onClick={() => setMostrarTabla(false)}>Mostrar Usuarios</button>
        </div>
        {mostrarTabla ? <ListaTablaAdmin /> : <ListaCardsAdmin />}
        <Footer />
        <div className="contenedor-btnFlotanteWsp">
            <BtnFlotanteWp
                NroCelular={'3814653130'}
            />
        </div>
    </div>
  );
}

export default PanelAdmin;


