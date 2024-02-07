import React, { useState, useEffect } from 'react'
import './salecards.css'
import CountdownTimer from './CountdownTimer'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SaleCards = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/js");
      setProducts(response.data.js);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };
  
  useEffect(() => {
    fetchData();
  },[])
  return (
    <>
      <h1 className='ftext'>Flash Sale</h1>


      <div className='container boxx1 d-flex flex-column gap-5 flex-wrap'>
        <div className='d-flex align-items-center'>
          <p className='onsale'>On Sale Now</p>
          <span className='fs-timer-text tmo'>Ending in</span>
          <span className='countertimer tmo'><CountdownTimer /></span>
          <Link className="SM btn-light">SHOP MORE</Link>
        </div>
        
        <div className="border-top">
          <div class="mt-3 d-flex justify-content-evenly flex-wrap gap-2 ">

       

{
  products.map((item) => (
    <div key={item.id} className="card car" style={{ width: "15rem" }}>
      <Link to={`/SaleCards/${item._id}`} className="text-decoration-none">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text text-dark">{item.title.slice(0, 50)}</p>
          <h5 className="price fs-5 mt-5">Rs. {item.price}</h5>
        </div>
      </Link>
    </div>
  ))
}




          </div>
        </div>
      </div>
    </>
  )
}

export default SaleCards
