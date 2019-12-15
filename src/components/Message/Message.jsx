import React from 'react';
import { ReactComponent as Image } from './undraw_choice.svg';
import './styles.css';

const Message = () => {
  return (
    <div className="content-message">
      <Image />
      <div className="item-text">Seleccione una opcion en la lista</div>
    </div>
  )
}

export default Message;
