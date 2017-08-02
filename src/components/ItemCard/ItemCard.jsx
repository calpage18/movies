import React from 'react'

import './item-card.css'

const ItemCard = (props) => {
  return (
    <div className='item-'>
      <div className='item__image-wrapper'>
        <img className='item__image' src={props.image} />
        <span className='item__title'>{props.title}</span>
        <span className='item__date'>{props.date}</span>
      </div>
    </div>
  )
}

export default ItemCard
