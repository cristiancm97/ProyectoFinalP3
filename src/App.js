import './App.css';
//import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import RecPassword from './components/pages/RecPassword';
import RegistroClub from './components/pages/RegistroClub';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/recuperar-password" element={<RecPassword/>}/>
          <Route path="/registro-club" element={<RegistroClub/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
