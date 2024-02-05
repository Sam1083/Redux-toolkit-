import React, { useState, useEffect } from 'react'
import './salecards.css'
import CountdownTimer from './CountdownTimer'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SaleCards = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/js")
    setProducts(response.data.js)
  }

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
          <a href="#" className="SM btn-light">SHOP MORE</a>
        </div>
        
        <div className="border-top">
          <div class="mt-3 d-flex justify-content-evenly flex-wrap gap-2 ">

            
            {
              products.map((item) => {
                return (                
                  <div class="card car" style={{width:"15rem"}}>
                    <Link to={`/SaleCards/${item._id}`} class="text-decoration-none">
                
                    <img src={item.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text text-dark">{item.title.slice(0,50)}</p>
                        <h5 class="price fs-5 mt-5">{item.price}</h5>
                                             
                    </div>
                      </Link>
                  </div>                  
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SaleCards
