import React from 'react';
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Section1 from './seccion1';
import Section2 from './seccion2';
import Section3 from './seccion3';

function App() {
  return (
    <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Alumno: Perez Varela Hector Guillermo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="seccion1">Sección 1</Nav.Link>
              <Nav.Link href="seccion2">Sección 2</Nav.Link>
              <Nav.Link href="seccion3">Sección 3</Nav.Link>
              <Button href="/" variant="outline-warning" className="ms-2">
                Inicio
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4 text-center">
      <Routes>
      <Route path="/" element={ 
        <>
        <h1>Seguridad informatica</h1>
        <p>
          La seguridad informática es el conjunto de tecnologías, procesos y prácticas diseñadas para proteger redes, dispositivos, programas y datos contra ciberataques, hackeos, daños o accesos no autorizados.
          Su objetivo principal es garantizar la confidencialidad, integridad y disponibilidad de la información.</p>
        <Image src="https://th.bing.com/th/id/R.db7b0964758f9c86a7f46470273497ae?rik=WF1rZqe5%2bOdo5Q&pid=ImgRaw&r=0" width={400} height={400} alt="Seguridad" fluid />
        </>

      } />
            <Route path="/seccion1" element={<Section1 />} />
            <Route path="/seccion2" element={<Section2 />} />
            <Route path="/seccion3" element={<Section3 />} />
          </Routes>
      </Container>
    </div>
    </Router>
  );
}

export default App;

