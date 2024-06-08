import React from 'react'
import Button from './Button'

const Header = ({onAdd , showAdd}) => {
    
  return (
    
        <header className='header'>
      Welcome to Task Tracker
      <Button color="black"content= {showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
      </header>
   
  )
}

export default Header
