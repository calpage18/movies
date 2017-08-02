import React from 'react'
import PropTypes from 'prop-types'

import './modal.css'

const Modal = ({ clearSelectedItem, children }) => {
  return (
    <div className='modal'>
      <div className='modal__overlay' onClick={clearSelectedItem} />
      <div className='modal__body'>
        <div className='modal__header'><button className='modal__close' onClick={clearSelectedItem}>{'< Back to search results'}</button></div>
        <div className='modal__content'>
          { children }
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  clearSelectedItem: PropTypes.func.isRequired
}

export default Modal
