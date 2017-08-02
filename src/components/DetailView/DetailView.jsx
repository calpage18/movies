import React from 'react'

import './detail-view.css'

const DetailView = ({ title, overview, image, date }) => {
  return (
    <div className='detail-view'>
      <div className='detail-view__sidebar'>
        <img className='detail-view__image' src={image} />
      </div>
      <div className='detail-view__body'>
        <span className='detail-view__title'>{title}</span>
        <span className='detail-view__date'>{date}</span>
        <p className='detail-view__overview'>{overview}</p>
      </div>
    </div>
  )
}

export default DetailView
