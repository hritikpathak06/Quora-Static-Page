import React from 'react'
import "./css/QuoraBox.css"
import { Avatar, Button } from '@mui/material';

const QuoraBox = () => {
  return (
    <div className='quoraBox'>
      <div className="quoraBox__info">
        <Avatar/>
        <h5>What is your question</h5>
      </div>
      
    </div>
  )
}

export default QuoraBox
