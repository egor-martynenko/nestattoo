import React from 'react'
import './switch.scss'

const Switch = () => {
  return (
    <div className='switch-wrapper'>
        <input type="checkbox" id="switch" / >
         <label htmlFor="switch">Toggle</label>
    </div>
    
  )
}

export default Switch