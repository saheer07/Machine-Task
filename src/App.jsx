import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (inputValue.trim() === '') return;

    if (editIndex !== null) {
     
      const updatedItems = [...items];
      updatedItems[editIndex] = inputValue;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      
      setItems([...items, inputValue]);
    }
    setInputValue('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(items[index]);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    
    if (editIndex === index) {
      setEditIndex(null);
      setInputValue('');
    }
  };

  return (
    <div className=''>
      <input
        type="text"
        value={inputValue}
        placeholder="Type something..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




