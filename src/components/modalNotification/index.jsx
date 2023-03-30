import React from "react";
import fora from "../../assets/img/cuidado.png";

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '150px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  color: 'black'
}

const P = {
  fontSize: "2.5rem",
  fontWeight: "700"
}
export default function ModalAviso({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div style={{ cursor: 'pointer'}} onClick={setModalOpen}>
            x
          </div>
          <div>
            <p style={P}>Atualmente, o backend do projeto está fora do ar! Agradeço a compreensão.</p>
            <img src={fora} alt="" />
          </div>
        </div>
      </div>
    )
  }

  return null
}
