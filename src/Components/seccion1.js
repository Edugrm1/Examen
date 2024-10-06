import React, { useState } from 'react';
import './Seccion1.css'; // Asegúrate de crear este archivo para los estilos

const ataquesData = {
  DDoS: 'Un ataque de denegación de servicio distribuido (DDoS) se lleva a cabo utilizando múltiples sistemas para inundar a un objetivo con tráfico, causando que se vuelva inaccesible.',
  'Ordenador Zombie': 'Un ordenador zombie es una máquina que ha sido comprometida por un hacker y está bajo su control. Puede ser utilizada para llevar a cabo ataques sin el conocimiento del propietario.',
  'Ciberdelincuente': 'Un ciberdelincuente es una persona que realiza actividades ilegales en línea, como el robo de información personal, fraude o extorsión.',
  'Botmaster': 'Un botmaster es un individuo que controla una red de ordenadores zombies (botnet) para realizar ataques o enviar spam.',
  Botnet: 'Una botnet es un conjunto de dispositivos infectados que pueden ser controlados de manera remota para llevar a cabo ataques cibernéticos o realizar tareas maliciosas.',
  Ransomware: 'El ransomware es un tipo de malware que cifra los archivos de un usuario y exige un rescate para restaurar el acceso a ellos.',
  Disclaimer: 'Un disclaimer es una advertencia o declaración que aclara que la información proporcionada no es responsable de cualquier uso indebido.',
  'The Morris Worm': 'El Morris Worm fue uno de los primeros gusanos informáticos en propagarse a través de Internet, causando daños a miles de computadoras en 1988.',
  'Ciberwarfare': 'La ciberwarfare se refiere a actividades hostiles llevadas a cabo a través de la red para dañar o interrumpir los sistemas informáticos de un enemigo.',
  Stuxnet: 'Stuxnet es un malware diseñado específicamente para atacar instalaciones industriales, notablemente utilizado para sabotear el programa nuclear de Irán.',
  'Moonlight Maze': 'Moonlight Maze fue una serie de ataques cibernéticos en los Estados Unidos en la década de 1990, que se cree que fueron llevados a cabo por hackers rusos.',
  'Operation Aurora': 'Operation Aurora fue un ataque cibernético dirigido a empresas como Google en 2009, buscando robar información sobre derechos humanos en China.',
  'Freeze it into Submission': 'Este término se refiere a tácticas utilizadas en ataques para paralizar un sistema o red, impidiendo su funcionamiento normal.',
  WannaCry: 'WannaCry es un ransomware que afectó a cientos de miles de computadoras en 2017, cifrando datos y exigiendo rescate.',
  Petya: 'Petya es un ransomware que afecta los sistemas operativos de Windows, cifrando la información y evitando el acceso a los sistemas.',
  'Equifax (ataque)': 'El ataque a Equifax en 2017 comprometió información personal de aproximadamente 147 millones de personas debido a una vulnerabilidad en su sistema.',
  'Cam4 (ataque)': 'En 2020, el sitio de webcams Cam4 sufrió un ataque de filtración de datos, exponiendo la información de millones de usuarios.',
};

function Seccion1() {
  const [selectedAtaque, setSelectedAtaque] = useState(null);

  const handleItemClick = (ataque) => {
    setSelectedAtaque((prev) => (prev === ataque ? null : ataque));
  };

  return (
    <div className="seccion1">
      <h1>Ataques Cibernéticos</h1>
      <ul className="ataques-list">
        {Object.keys(ataquesData).map((ataque) => (
          <li key={ataque} style={{ cursor: 'pointer' }} onClick={() => handleItemClick(ataque)}>
            {ataque}
            {selectedAtaque === ataque && (
              <span className="info">{ataquesData[ataque]}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Seccion1;
