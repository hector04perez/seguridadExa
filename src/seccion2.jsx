import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

import datosperso from './images/sec2/datos personales.jpg';
import propiedad from './images/sec2/propiedad industrial.jpg';
import derechos from './images/sec2/derechos.jpg';
import particulares from './images/sec2/particulares.jpg';
import penal from './images/sec2/penal.jpg';
import transparencia  from './images/sec2/transparencia.jpg';
import simetrica  from './images/sec2/simétrica.png';
import asimetrica  from './images/sec2/asimétrica.jpg';
import bloques  from './images/sec2/bloques.png';
import cripto  from './images/sec2/Criptoanálisis.jpg';

const terms = [
  { 
    title: 'Ley General de protección de datos Personales de México', 
    definition: 'Es una legislación que protege los datos personales que están en posesión de entidades gubernamentales o privadas.', 
    image: datosperso 
  },
  { 
    title: 'Ley de propiedad industrial', 
    definition: 'Conjunto de normas que protege las invenciones, modelos de utilidad, marcas y otros derechos exclusivos de los creadores.', 
    image: propiedad
  },
  { 
    title: 'Ley federal de derechos de autor', 
    definition: 'Ley que protege los derechos de los autores sobre sus obras literarias, artísticas, científicas, entre otras.', 
    image: derechos 
  },
  { 
    title: 'Ley federal de datos personales en posesión de particulares', 
    definition: 'Establece las condiciones para el manejo de datos personales por parte de entidades privadas en México.', 
    image: particulares 
  },
  { 
    title: 'Código penal federal', 
    definition: 'Regula las penas y sanciones aplicables a las conductas tipificadas como delitos en México.', 
    image: penal 
  },
  { 
    title: 'Ley general de transparencia y acceso a la información', 
    definition: 'Promueve la transparencia en la gestión pública y garantiza el derecho de acceso a la información pública.', 
    image: transparencia 
  },
  { 
    title: 'Criptografía simétrica', 
    definition: 'Método de cifrado donde se usa la misma clave para cifrar y descifrar la información.', 
    image: simetrica 
  },
  { 
    title: 'Criptografía asimétrica', 
    definition: 'Método de cifrado que utiliza un par de claves: una pública para cifrar y una privada para descifrar.', 
    image: asimetrica  
  },
  { 
    title: 'Cifrado por bloques y por flujo', 
    definition: 'El cifrado por bloques procesa la información en bloques de datos, mientras que el cifrado por flujo procesa la información bit a bit o carácter por carácter.', 
    image: bloques 
  },
  { 
    title: 'Criptoanálisis', 
    definition: 'Estudio de técnicas que permiten obtener el texto claro a partir del texto cifrado sin conocer la clave de cifrado.', 
    image: cripto 
  }
];

function Section2() {
  const [show, setShow] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (term) => {
    setSelectedTerm(term);
    setShow(true);
  };

  return (
    <Container className="my-4">
      <h2>Confidencialidad de la informacion</h2>
      <Row>
        {terms.map((term, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card 
              onClick={() => handleShow(term)} 
              style={{ cursor: 'pointer', width: '18rem', height: '18rem' }}
            >
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

export default Section2;
