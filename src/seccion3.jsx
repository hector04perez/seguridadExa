import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

import acs from './images/sec3/acs.jpg';
import conf from './images/sec3/conf.png';
import disp from './images/sec3/dis.jpg';
import auten from './images/sec3/auten.jpg';
import inte from './images/sec3/inte.jpg';
import con from './images/sec3/cont.jpg';


const terms = [
  { 
    title: 'Accesibilidad', 
    definition: 'Es la capacidad de acceder a un sistema, recurso o servicio sin restricciones innecesarias. En ciberseguridad, se refiere a la disponibilidad de la información para aquellos que están autorizados.', 
    image: acs
  },
  { 
    title: 'Confidencialidad', 
    definition: 'Garantiza que la información solo sea accesible para aquellos con autorización. La confidencialidad protege los datos de accesos no autorizados.', 
    image: conf
  },
  { 
    title: 'Disponibilidad', 
    definition: 'Asegura que los sistemas, servicios y datos estén disponibles para los usuarios cuando los necesiten, minimizando el tiempo de inactividad.', 
    image: disp
  },
  { 
    title: 'Autenticación', 
    definition: 'Proceso de verificar la identidad de un usuario o dispositivo antes de conceder acceso a un sistema o recurso.', 
    image: auten
  },
  { 
    title: 'Integridad', 
    definition: 'Garantiza que los datos no han sido alterados o destruidos de manera no autorizada, asegurando la exactitud y consistencia de los mismos.', 
    image: inte 
  },
  { 
    title: 'Control de acceso', 
    definition: 'Mecanismo que restringe el acceso a sistemas o datos, garantizando que solo los usuarios autorizados puedan acceder a recursos específicos.', 
    image: con 
  }
];

function Section3() {
  const [show, setShow] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (term) => {
    setSelectedTerm(term);
    setShow(true);
  };

  return (
    <Container className="my-4">
      <h2>Principios de seguridad de la información</h2>
      <Row>
        {terms.map((term, index) => (
          <Col md={4} className="mb-4" key={index}>
            {/* Estilo fijo para el tamaño de la tarjeta */}
            <Card 
              onClick={() => handleShow(term)} 
              style={{ cursor: 'pointer', width: '18rem', height: '22rem' }}
            >
              {/* La clase img-fluid junto con object-fit: cover asegura que la imagen llene la tarjeta */}
              <Card.Img 
                variant="top" 
                src={term.image} 
                className="img-fluid" 
                style={{ height: '12rem', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>{term.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>{selectedTerm.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* La clase img-fluid ajusta la imagen en el modal */}
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

export default Section3;
