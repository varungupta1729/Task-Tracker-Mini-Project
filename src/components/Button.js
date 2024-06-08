import React from 'react'
import PropTypes from 'prop-types'


const Button = (props) => {
  return (
    
      <button style={{backgroundColor: props.color}} onClick={props.onClick} className='btn'>{props.content}</button>
    
  )
}

Button.defaultProps = {
    color: 'black' ,
}

Button.propTypes = {
    content: PropTypes.string,
    color: PropTypes.string,
    onClick:PropTypes.func
}

export default Button
