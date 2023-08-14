import React from 'react';
import { FiLoader } from 'react-icons/fi';

import './LoadingTodos.css';

function LoadingTodos() {
  return (
    <div>
      <FiLoader className={`loadingIcon`} />
    </div>
  );
}

export { LoadingTodos };
