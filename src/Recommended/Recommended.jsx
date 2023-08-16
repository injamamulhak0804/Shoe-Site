import React from 'react'
import './Recommended.css'
import Buttons from './../components/Button'

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <Buttons
            onclickHandler={handleClick}
            value=''
            title="All Products"
          />
          <Buttons
            onclickHandler={handleClick}
            value='Nike'
            title="Nike"
          />
          <Buttons
            onclickHandler={handleClick}
            value='Adidas'
            title="Adidas"
          />
          <Buttons
            onclickHandler={handleClick}
            value='Puma'
            title="Puma"
          />
          <Buttons
            onclickHandler={handleClick}
            value='Vans'
            title="Vans"
          />
        </div>
      </div>
    </>
  )
}

export default Recommended