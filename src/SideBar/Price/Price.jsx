import React from 'react'
import './Price.css'
import Input from '../../components/Input'

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className='sidebar-title price-title'>Price</h2>
        <div>
          <label className="sidebar-label-container">
            <input type="radio" name="test2"
              onChange={handleChange}
              id="" />
            <span className='checkmark'></span>All
          </label>

          <Input
            handleChange={handleChange}
            value={50}
            title="$0 - $100"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={100}
            title="$100 - $150"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={150}
            title="$150 - $200"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={200}
            title="above $200"
            name="test2"
          />
        </div>
      </div>
    </>
  )
}

export default Price