import React from 'react';

function TodoItem({ text, index, deleteTask }) {
  return (
    <li>
      {text}
      <button  onClick={() => deleteTask(index)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
