import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import "./Nav.css"

const Nav = ({ setQuery , query}) => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <input type="text"
            className='search-item'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Enter Your Shoe' />
        </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className='nav-icons' />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className='nav-icons' />
            <AiOutlineUserAdd className='nav-icons' />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Nav