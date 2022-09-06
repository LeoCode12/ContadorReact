import React from 'react'
import './style.css'

function Boton({texto, click, manejarClick}){
  return(
    <button
    className={click ? "click" : "reiniciar"}
    onClick={manejarClick} >
      {texto}
    </button>
  )
}

export default Boton