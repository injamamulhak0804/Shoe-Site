import React from 'react'
import './Products.css'
import Card from './../components/Card'

const Products = ({result}) => {
  return (
    <>
      <div className="card-container">
        {result}
      </div>
    </>
  )
}

export default Products