import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => setNewItem(e.target.value);

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem(''); 
    }
  };

  return (
    <div>
      <h3>Shopping List</h3>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;