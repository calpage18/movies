import React from 'react'
import PropTypes from 'prop-types'

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

ItemCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  item: PropTypes.object,
  onSelect: PropTypes.func
}

export default ItemCard
