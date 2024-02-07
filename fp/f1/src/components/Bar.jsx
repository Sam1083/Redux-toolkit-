import React from 'react'
import './Bar.css'
import { Link } from 'react-router-dom'


const Bar = () => { 
  return (
      <>
          <div className="container">
              <ul className='list-unstyled mt-3 custom-bar'>
                  <li ><span className="usp-icon"><img src="//icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png" alt="" data-spm-anchor-id="a2a0e.home.usp.i1.6a274076HnzU6V" /></span> <Link  className='tex'>Safe Payments</Link></li>
                  <li className='l1'><span className="usp-icon"><img src="//icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png" alt="" /></span> <Link  className='tex' >Nationwide Delivery</Link></li>
                  <li className='l1'><span className="usp-icon"><img src="//icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png" alt="" /></span><Link  className='tex'>Free &amp; Easy Returns</Link></li>
                  <li className='l1'><span className="usp-icon"><img src="//icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png" alt="" /></span><Link  className='tex'>Best Price Guaranteed</Link></li>
                  <li className='l1'><span className="usp-icon"><img src="//icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png" alt="" /></span><Link  className='tex'>100% Authentic Products</Link></li>
                  <li className='l1' ><span className="usp-icon"><img src="//icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png" alt="" data-spm-anchor-id="a2a0e.home.usp.i0.6a274076HnzU6V" /><Link  className='tex'>Daraz Verified</Link></span></li>
              </ul>
          </div>
      </>
  )
}

export default Bar