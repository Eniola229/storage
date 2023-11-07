import React from 'react';
import { useRef } from 'react';


function AddItem({ newItem, setNewItem, handleSubmit }) {
    const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='additem'>Add Item</label>
        <input
            autoFocus
            ref={inputRef}
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
           <button 
                type='submit'
                aria-label='Add item'
                onClick={() => inputRef.current.focus()}
                >
                +
            </button>
    </form>
  )
}

export default AddItem