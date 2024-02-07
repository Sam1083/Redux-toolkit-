import React from 'react'
import "./CardChannel.css"
import { Link } from 'react-router-dom'
 
const CardChannel = () => {


  return (

      <>
          <div className='container'>
              <div className="infocards ">
                  <ul className='list-unstyled d-flex justify-content-evenly align-items-center
                  flex-wrap'>
                      <li className='cimg1'><Link  className="text-decoration-none text-reset"  ><img src=" https://icms-image.slatic.net/images/ims-web/1440c427-d3fe-49f7-aa90-09c8eb0b84ea.png" alt="" height="90px" width="90px" className='mb-1' /> <p className='ptext ms-4'>Mart</p></Link></li>
                      <li className='cimg'><Link  class="text-decoration-none text-reset"><img src="https://icms-image.slatic.net/images/ims-web/4f250051-aac7-46bd-9bea-c5b836dea844.png " alt="" height="90px" width="90px" className='mb-1' /><p className='ptext ms-4'>Fashion</p></Link></li>
                      <li className='cimg'><Link  className="text-decoration-none text-reset"><img src="https://icms-image.slatic.net/images/ims-web/0ed92f69-d596-458b-bcd6-8d2bb69ef911.png " alt="" height="90px" width="90px" className='mb-1' /><p className='ptext ms-4'>Beauty</p></Link></li>
                      <li className='cimg'><Link  className="text-decoration-none text-reset"><img src=" https://icms-image.slatic.net/images/ims-web/d85f0ced-6459-455a-8504-150655bf948c.png" alt="" height="90px" width="90px" className='mb-1' /><p className='ptext ms-1'>Home & Decor</p></Link></li>
                      <li className='cimg'><Link  className="text-decoration-none text-reset"><img src=" https://icms-image.slatic.net/images/ims-web/9f2cf12a-3899-423e-9273-c752acafa387.png" alt="" height="90px" width="90px" className='mb-1' /><p className='ptext ms-1'>Daraz Like New </p></Link></li>
                      <li className='cimg'><Link  className="text-decoration-none text-reset"><img src="https://icms-image.slatic.net/images/ims-web/cc89e68e-c809-4638-a5a6-2dc7e450d2a1.png " alt="" height="90px" width="90px" className='mb-1' /><p className='ptext ms-2'>Free Delivery</p></Link></li>
                      <li className='cimg'><Link  className="text-decoration-none text-reset"><img src="https://icms-image.slatic.net/images/ims-web/a13edb2b-61bf-4dec-a410-f85b63d41490.png" alt="" height="90px" width="90px" className='mb-1 text-decoration-underline' /><span className='ptext1'>Everyday Low</span><span className='ms-4'>Price</span>
                      </Link></li>
                      <li className='cimg'><Link  className="text-decoration-none text-reset"><img src="https://icms-image.slatic.net/images/ims-web/62624b46-f8ca-43b7-a5fa-1d31920a6eb5.png " alt="" height="90px" width="90px" className='mb-1' /><p className='ptext ms-2'>New on Daraz</p></Link></li>
                      <li className='cimg'><Link  className="text-decoration-none text-reset"><img src=" https://icms-image.slatic.net/images/ims-web/e7b9ee8c-1fbf-4548-ab35-db6eeca830a6.png" alt="" height="90px" width="90px" className='mb-1' /><p className='ptext ms-4'>Flash Sale</p></Link></li>
                  </ul>
              </div>
          </div>
      </>
  )
}

export default CardChannel
