import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
// import logo from './img/logo.png';
import './styles/boton.css';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const hacerClick = () => {
    setNumClics(numClics + 1);
    }

  const reiniciarContador = () => {
    setNumClics(0)
  }
  return (
    <div className="App">
      <div className='logo-container'>
        {/* <img 
        className='logo'
         src={logo} 
         alt='Logo' 
         />   */}
        <h2 className='tittle'> CONTADOR DE CLICKS</h2>
      </div>         
      <div className='container-principal'>
       <Contador
          numeroClicks={numClics} />
       <Boton 
          texto='Clic' 
          esBotonClick={true}
          hacerClick={hacerClick} />
       <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          hacerClick={reiniciarContador} />
      </div>
      
    </div>
  );
}

export default App;
