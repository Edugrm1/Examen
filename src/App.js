import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Seccion1 from './Components/seccion1'; 
import Seccion2 from './Components/seccion2'; 
import Seccion3 from './Components/seccion3'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-left">Alumno: Manuel Eduardo Gurrola Romero</div>
          <div className="header-right">
            <Link to="/">INICIO</Link>
            <Link to="/seccion1">Sección 1</Link>
            <Link to="/seccion2">Sección 2</Link>
            <Link to="/seccion3">Sección 3</Link>
            <Link to="#perfil">Perfil</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <div className="content">
                <img src="/images/si.jpeg" alt="Seguridad Informática" className="image" />
                <div className="text">
                  <h2>Seguridad Informática</h2>
                  <p>también conocida como ciberseguridad, es un conjunto de prácticas, procesos y tecnologías diseñadas para proteger los sistemas, redes, dispositivos y datos de ataques, daños o accesos no autorizados. En un mundo donde la información se crea, almacena y comparte principalmente en formato digital, la seguridad informática se ha vuelto crucial para garantizar la integridad, confidencialidad y disponibilidad de los datos.</p>
                </div>
              </div>
            } />
            <Route path="/seccion1" element={<Seccion1 />} />
            <Route path="/seccion2" element={<Seccion2 />} />
            <Route path="/seccion3" element={<Seccion3 />} />
          </Routes>
        </main>
        
        {/* Secciones adicionales al final */}
        <div className="sections">
          <div className="section">
            <Link to="/seccion1">
              <img src="/images/seccion1.jpeg" alt="Seguridad Informática" className="image" />
              <p>Sección 1</p>
            </Link>
          </div>
          <div className="section">
            <Link to="/seccion2">
              <img src="/images/seccion2.jpeg" alt="Seguridad Informática" className="image" />
              <p>Sección 2</p>
            </Link>
          </div>
          <div className="section">
            <Link to="/seccion3">
              <img src="/images/seccion3.jpeg" alt="Seguridad Informática" className="image" />
              <p>Sección 3</p>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
