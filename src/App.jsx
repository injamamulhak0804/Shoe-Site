import React, { useState } from "react"
import Nav from "./Nav/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import SideBar from "./SideBar/SideBar"
import './index.css'

// Import DataBase
import product from './DB/db';
import Card from "./components/Card"
import Footer from "./Footer/Footer"

function App() {

  const [selectedQuery, setSelectedQuery] = useState(null)
  const [query, setQuery] = useState('')

  //-------------------------Input Query ----------------

  const handleInputChange = (e) => {
    setSelectedQuery(e.target.value);
  }


  const filteredItems = product.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  )

  //-------------------------Radio Query ----------------

  const handleChange = (event) => {
    setSelectedQuery(event.target.value)
  }


  //-------------------------Buttons Query ----------------

  const handleClick = event => {
    setSelectedQuery(event.target.value)
  }

  function filterData(products, selected, query) {
    let filteredProducts = products

    // Input Items 

    if (query) {
      filteredProducts = filteredItems
    }

    // Selected Filtering  or Radio Filtering

    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, prevPrice }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        prevPrice === selected
      )
    }


    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ))
  }


  const result = filterData(product, selectedQuery, query);

  return (
    <>
      <SideBar
        handleChange={handleChange} />
      <Nav 
        query={query}
        setQuery={setQuery}
      />
      <Recommended 
        handleClick={handleClick}
      />
      <Products result={result} />
      <Footer />
    </>
  )
}

export default App
