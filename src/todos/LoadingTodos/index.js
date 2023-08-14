import React from 'react';
import { RiLoader4Line } from 'react-icons/ri';

import './LoadingTodos.css';

function LoadingTodos() {
  return (
    <div className={`loadingContainer`}>
      <RiLoader4Line className={`loadingIcon`} />
    </div>
  );
}

export { LoadingTodos };
