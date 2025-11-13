import React, { useEffect, useState } from 'react'
import Fashion from './component/fashion'

function App() {
  const [books,setBooks] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      setBooks(data);
    })
  },[]) 

  return (
    <div> 
      {
        books.map((b,i)=>(
          <Fashion 
            key={i}
            title={b.title}
            price={b.price}
            image={b.image}
          />
        ))
      }
      
    </div>
  )
}

export default App