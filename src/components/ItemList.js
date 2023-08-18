import React from 'react'

export default function ItemList(props) {
  return (
    <div>
      <ul>
    {props.array.map((item)=>(
        <div key={item.id}>
        {item.Name},
        {item.Description},
        {item.Price}
        <button >Buy One</button>
        <button >Buy Two</button>
        <button >Buy Three</button>
        </div>
       
    ))}
   </ul>
  
    </div>
  )
}
