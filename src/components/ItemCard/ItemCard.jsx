import React from 'react'

import './item-card.css'

const ItemCard = ({ image, title, date, item, onSelect }) => {
  return (
    <div className='item' onClick={() => onSelect(item)}>
      <div className='item__image-wrapper'>
        <img className='item__image' src={image} />
      </div>
      <span className='item__title'>{title}</span>
      <span className='item__date'>{date}</span>
    </div>
  )
}

export default ItemCard
