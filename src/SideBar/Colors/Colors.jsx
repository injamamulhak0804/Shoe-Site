import React from 'react'
import './Colors.css'
import Input from '../../components/Input'


const Colors = ({ handleChange }) => {
  return (
    <>
      <div className="cl">
        <h2 className='sidebar-title color-title'>Color</h2>
        <div>
          <label className="sidebar-label-container">
            <input type="radio" name="test1"
              onChange={handleChange}
              id="" />
            <span className='checkmark all'></span>All
          </label>

          <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test1"
            color="black"
          />
          <Input
            handleChange={handleChange}
            value="blue"
            title="Blue"
            name="test1"
            color="blue"
          />
          <Input
            handleChange={handleChange}
            value="green"
            title="Green"
            name="test1"
            color="green"
          />

          <label className='sidebar-label-container'>
            <input type="radio" onChange={handleChange} value="white" name = "test1"/>
            <span className='checkmark' style = {{background: "white", border:"2px solid black"}}></span>White
          </label>
        </div>
      </div>
    </>
  )
}

export default Colors