import React from 'react'
import './Cards.css'

const Card = (props) => {

  return (
    <div className={`card ${props.active ? 'active' : ''}`}>
      <h3>{props.title}</h3>
      {/* <p>{props.description}</p> */}
    </div >
  )
}
export default Card