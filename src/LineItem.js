import React from 'react'

function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li className='item' key={item.id}>
        <input
            type='checkbox'
            onChange={() => handleCheck(item.id)}
            checked={item.checked}         
        />
        <label
            onDoubleClick={() => handleCheck(item.id)}
            style={(item.checked) ? { textDecoration: 'line-through'} : null}
        >
            {item.item}</label>
        <svg 
        onClick={() => handleDelete(item.id)}
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
        arail-label={`Delete ${item.item}`}
        />
        </svg>
</li>
  )
}

export default LineItem