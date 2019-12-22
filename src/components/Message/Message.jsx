import React from 'react';
import { ReactComponent as Image } from './undraw_choice.svg';
import styles from './Message.module.css';

const Message = () => {
  return (
    <div className={styles.MessageContent}>
      <Image />
      <div>Seleccione una opción en la lista</div>
    </div>
  )
}

export default Message;
