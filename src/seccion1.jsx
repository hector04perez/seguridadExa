import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';


import DDoS from './images/sec1/ddos.png';
import zombie from './images/sec1/zombie.jpg';
import ciberdeli from './images/sec1/Ciberdelincuente.jpg';
import botmaster from './images/sec1/Botmaster.jpg';
import ransom from './images/sec1/Ransomware.jpg';
import dis from './images/sec1/Disclaimer.jpg';
import morris from './images/sec1/The morris worm.jpg';
import ciberwar from './images/sec1/Ciberwarfare.jpg';
import stu from './images/sec1/Stuxnet.jpg';
import moon from './images/sec1/Moonlight Maze.jpg';
import auro from './images/sec1/Operation Aurora.jpg';
import freeze from './images/sec1/Freeze it into submission.jpg';
import cry from './images/sec1/Wannacry.jpg';
import pet from './images/sec1/Petya.jpg';
import equi from './images/sec1/Equifax(ataque).jpg';
import cam from './images/sec1/Cam4(ataque).jpg';

const terms = [
  { 
    title: 'DDoS', 
    definition: 'Un ataque DDoS intenta hacer que un servicio no esté disponible sobrecargándolo con tráfico de múltiples fuentes.', 
    image: DDoS
  },
  { 
    title: 'Ordenador Zombie', 
    definition: 'Un ordenador zombie es una máquina infectada que permite a un atacante controlarla remotamente.', 
    image: zombie 
  },
  { 
    title: 'Ciberdelincuente', 
    definition: 'Persona que comete delitos utilizando medios informáticos, como el robo de identidad o ataques a sistemas.', 
    image: ciberdeli
  },
  { 
    title: 'Botmaster', 
    definition: 'El controlador de una red de bots que puede dirigir las máquinas para actividades maliciosas.', 
    image: botmaster 
  },
  { 
    title: 'Ransomware', 
    definition: 'Tipo de malware que encripta archivos y pide un rescate para desbloquearlos.', 
    image: ransom
  },
  { 
    title: 'Disclaimer', 
    definition: 'Advertencia o declaración de limitación de responsabilidad que a menudo se utiliza en software o sitios web para proteger al autor o propietario legalmente.', 
    image: dis
  },{ 
    title: 'The Morris Worm', 
    definition: 'Uno de los primeros gusanos informáticos distribuidos por internet en 1988, que causó interrupciones significativas en la red.' ,
    image: morris 
  },{ 
    title: 'Ciberwarfare', 
    definition: 'Forma de guerra llevada a cabo en el ciberespacio, que incluye ataques a sistemas informáticos, infraestructura crítica y espionaje.', 
    image: ciberwar 
  },{ 
    title: 'Stuxnet', 
    definition: 'Un virus altamente sofisticado descubierto en 2010, diseñado para sabotear instalaciones industriales, especialmente plantas nucleares.', 
    image: stu 
  },{ 
    title: 'Moonlight Maze', 
    definition: 'Una operación de ciberespionaje a gran escala llevada a cabo a finales de los 90 contra agencias gubernamentales de EE. UU.', 
    image: moon 
  },{ 
    title: 'Operation Aurora', 
    definition: ' Un ataque cibernético masivo en 2009 que comprometió las redes de grandes empresas, incluido Google, y que se atribuye a atacantes chinos.', 
    image: auro 
  },{ 
    title: 'Freeze it into submission', 
    definition: 'Táctica en la que se "congela" la actividad de un sistema objetivo mediante ataques persistentes hasta que la víctima cede o deja de funcionar.', 
    image: freeze 
  },{ 
    title: 'WannaCry', 
    definition: 'Un ataque global de ransomware en 2017 que infectó más de 200,000 computadoras en 150 países, exigiendo pagos en Bitcoin para desbloquear los archivos.', 
    image: cry 
  },{ 
    title: 'Petya', 
    definition: 'Un ransomware que se propaga cifrando el disco duro de los ordenadores infectados, causando pérdidas de datos masivas.', 
    image: pet 
  },{ 
    title: 'Equifax (ataque)', 
    definition: 'Un hackeo masivo en 2017 a la agencia de crédito Equifax, que expuso información personal de 147 millones de personas.', 
    image: equi 
  },{ 
    title: 'Cam4 (ataque)', 
    definition: 'Una filtración de datos masiva en 2020 donde la plataforma de webcam Cam4 expuso 10.88 mil millones de registros sensibles de usuarios.', 
    image: cam 
  },
];

function Section1() {
  const [show, setShow] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (term) => {
    setSelectedTerm(term);
    setShow(true);
  };

  return (
    <Container className="my-4">
      <h2 className='mb-3'>Ataques ciberneticos</h2>
      <Row>
        {terms.map((term, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card onClick={() => handleShow(term)} style={{ cursor: 'pointer', width: '18rem', height: '18rem' }}>
            <Card.Img variant="top" src={term.image} className="img-fluid" style={{ height: '12rem', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{term.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{selectedTerm.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={selectedTerm.image} alt={selectedTerm.title} className="img-fluid mb-3" />
          <p>{selectedTerm.definition}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Section1;
