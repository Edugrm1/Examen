import React, { useState } from 'react';
import './seccion2.css'; // Asegúrate de crear este archivo para los estilos

const confidencialidadData = {
  "Ley General de Protección de Datos Personales de México": "Esta ley regula la protección de datos personales, estableciendo los derechos de los titulares y las obligaciones de quienes los manejan.",
  "Ley de Propiedad Industrial": "Esta ley protege los derechos de los inventores sobre sus invenciones y garantiza el respeto a las marcas y patentes.",
  "Ley Federal de Derechos de Autor": "Regula los derechos de los autores sobre sus obras, asegurando su reconocimiento y protección ante el uso no autorizado.",
  "Ley Federal de Datos Personales en Posesión de Particulares": "Establece las normas para el manejo y protección de datos personales por entidades privadas.",
  "Código Penal Federal": "Incluye disposiciones sobre delitos informáticos y sanciones para la violación de la privacidad de datos.",
  "Ley General de Transparencia y Acceso a la Información": "Garantiza el derecho de acceso a la información pública y establece las bases para la transparencia gubernamental.",
  "Criptografía Simétrica": "Un método de cifrado donde la misma clave se utiliza para cifrar y descifrar la información.",
  "Criptografía Asimétrica": "Utiliza un par de claves, una pública y una privada, para realizar el cifrado y descifrado.",
  "Cifrado por Bloques y por Flujo": "Métodos de cifrado donde el primero cifra datos en bloques fijos y el segundo cifra los datos en flujos continuos.",
  "Criptoanálisis": "El proceso de estudiar y romper códigos y cifrados para acceder a información protegida.",
};

function Seccion2() {
  const [selectedLey, setSelectedLey] = useState(null);

  const handleItemClick = (ley) => {
    setSelectedLey((prev) => (prev === ley ? null : ley));
  };

  return (
    <div className="seccion2">
      <h1>Confidencialidad de la Información</h1>
      <ul className="confidencialidad-list">
        {Object.keys(confidencialidadData).map((ley) => (
          <li key={ley} style={{ cursor: 'pointer' }} onClick={() => handleItemClick(ley)}>
            {ley}
            {selectedLey === ley && (
              <span className="info">{confidencialidadData[ley]}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Seccion2;
