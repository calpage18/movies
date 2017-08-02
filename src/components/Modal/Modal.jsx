import React from 'react'

import './modal.css'

const Modal = (props) => {
  return (
    <div className='modal'>
      <div className='modal__overlay' onClick={props.clearSelectedItem} />
      <div className='modal__body'>
        <div className='modal__header'><button className='modal__close' onClick={props.clearSelectedItem}>{'< Back to search results'}</button></div>
        <div className='modal__content'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal
