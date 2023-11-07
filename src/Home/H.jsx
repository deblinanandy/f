import React from 'react'
import movie from '../Assect/movie.jpg'
import './Header1.css'

function H() {
  return (
      <>
          <div className="header">
              <div className='image-container'>
      <img src={movie} alt="Website Logo" />
              </div>
              </div>
      </>
  )
}

export default H