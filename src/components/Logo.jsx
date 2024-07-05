import React from 'react'
import { Link } from 'react-router-dom'

function Logo({width='100px'}) {
  return (
    <Link to={"/"}>
      <div className='bg-color-700'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStC6BQXzYhrbcyy7xiLyfXnWwq7jp36Q8Chg&s" style={{height:50}} ></img>
      </div>
    </Link>
    
  )
}

export default Logo
