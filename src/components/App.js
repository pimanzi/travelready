import React, { useState } from 'react';
import Logo from './logo.js';
import { Form } from './Form.js';
import { PackageList } from './PackageList.js';
import { Stats } from './Stats.js';
/* eslint-disable */
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
];

export default function App() {
  const [items, setItem] = useState([]);
  function addItem(item) {
    setItem((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function clearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items'
    );
    if (confirmed) setItem([]);
  }
  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackageList
        items={items}
        deleteItem={deleteItem}
        handleToggleItem={handleToggleItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
