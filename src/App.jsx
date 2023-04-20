import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import TextContainer from './ejemplos/Contenedor';
import { Clicker } from './ejemplos/Clicker';
import { Button } from 'react-bootstrap';
import Parrafos from './ejemplos/Parrafos';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Navbar />
      { <ItemListContainer saludo={"Hola mundo!"}/> }
      

      
      
    </div>
  );
}

export default App;