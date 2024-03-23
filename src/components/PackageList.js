import React, { useState } from 'react';
import { Item } from './Item.js';

export function PackageList({
  items,
  deleteItem,
  handleToggleItem,
  clearList,
}) {
  const [sortby, setSortby] = useState('input');

  let sortedItems;
  if (sortby === 'input') sortedItems = items;
  if (sortby === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === 'packed') {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div>
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>

        <button onClick={clearList}>Clear the list</button>
      </div>
    </div>
  );
}
