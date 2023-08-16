import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'


const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <>
      <div className="card">
        <img className='card-img' src={img} alt={title} />
        <div className="card-details">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <section className="section-reviews">
            {star} {star} {star} {star}
            <span className='total-reviews'>{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>  ${newPrice}
            </div>
            <div className="bag-icon">
              <BsFillBagHeartFill />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Card