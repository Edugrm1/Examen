import React, { useState } from 'react';
import './Seccion3.css'; // Asegúrate de crear este archivo para los estilos

const principiosData = {
  "Accesibilidad": "Se refiere a la capacidad de obtener información y recursos de manera oportuna y sin restricciones. La información debe estar disponible para quienes la necesiten.",
  "Confidencialidad": "Implica proteger la información de accesos no autorizados, asegurando que solo las personas autorizadas puedan acceder a ciertos datos.",
  "Disponibilidad": "Asegura que la información y los recursos estén accesibles a los usuarios autorizados cuando los necesiten.",
  "Autenticación": "Es el proceso de verificar la identidad de un usuario o sistema, asegurando que quien accede a la información es quien dice ser.",
  "Integridad": "Se refiere a la protección de la información contra modificaciones no autorizadas, asegurando que los datos sean precisos y confiables.",
  "Control de Acceso": "Es el proceso de limitar el acceso a la información o recursos a solo aquellos usuarios o sistemas que tienen permisos específicos."
};

function Seccion3() {
  const [selectedPrincipio, setSelectedPrincipio] = useState(null);

  const handleItemClick = (principio) => {
    setSelectedPrincipio((prev) => (prev === principio ? null : principio));
  };

  return (
    <div className="seccion3">
      <h1>Principios de Seguridad de la Información</h1>
      <ul className="principios-list">
        {Object.keys(principiosData).map((principio) => (
          <li key={principio} style={{ cursor: 'pointer' }} onClick={() => handleItemClick(principio)}>
            {principio}
            {selectedPrincipio === principio && (
              <span className="info">{principiosData[principio]}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Seccion3;
