import React from 'react';
import {RiEmotionSadLine} from 'react-icons/ri'

import './ErrorTodos.css';

function ErrorTodos() {
  return (
    <div className={`container`}>
      <RiEmotionSadLine
        className={`blockItem`}
      />
      <p
      className={`blockItem`}>
        Ups, something happened!
      </p>
    </div>
  );
}

export { ErrorTodos };
