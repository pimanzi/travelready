import React from 'react';

export function Item({ item, deleteItem, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}.{item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
