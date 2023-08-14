import React from 'react';
import { TbError404 } from 'react-icons/tb';

import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className={`container`}>
      <TbError404 className={`notFoundIcon`} />
      <p>No TODOs where found</p>
    </div>
  );
}

export { EmptyTodos };
