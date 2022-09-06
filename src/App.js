import './App.css';
import logo from './logo.svg'
import Boton from './Componentes/Button/Button'



function App() {


  const manejarClick = () =>{
    console.log('click');
  }

  const reiniciarContador = () =>{
    console.log('reiniciar');
  }

  return (
    <div className="App">
     <div className="contenedor-logo">
       <img 
       src={logo} 
       alt=""
       className="logo" />
       <h1>Contador Click</h1>
     </div>
     <div className="contenedor-principal">
      <Boton
      texto="Click"
      click={true}
      manejarClick={manejarClick} />

      <Boton
      texto="Reiniciar"
      click={false}
      manejarClick={reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
