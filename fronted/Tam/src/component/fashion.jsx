import React from 'react'
import './fashion.css'

function Fashion(props) {
  return (
    <div id="card">
        <img src={props.image} alt=" " width={100} height={100} />
        <h4>Title : {props.title} </h4>
        <h4>Price: {props.price} </h4>
      
    </div>
  )
}

export default Fashion