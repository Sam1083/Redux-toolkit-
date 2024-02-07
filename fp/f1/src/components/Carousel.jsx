
import "./Carousel.css"
import React, {useState} from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



 // import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
const Carousel = () => {
    return (
      <>
          <div className="container">
              <div className='row mt-4'>
                  <div className="col-lg-3 ">
                      <div className="custom">
                          <ul className="list-unstyled mt-1 pb-2 d-flex flex-column gap-2 ms-4">
                              <li><Link  className="a"><i className="fa-solid fa-basket-shopping"></i> <span className="txt-holder">Groceries & Pets</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-heart"></i> <span className="txt-holder">Health & Beauty</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-shirt"></i> <span className="txt-holder">Men's Fashion</span></Link></li>
                              <li><Link  className="a"> <i className="fa-solid fa-person-dress"></i> <span className="txt-holder">Women's Fashion</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-person-breastfeeding"></i> <span className="txt-holder">Mother & Baby</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-couch"></i> <span className="txt-holder">Home & Lifestyle</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-camera"></i> <span className="txt-holder">Electronic Devices</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-plug"></i>   <span className="txt-holder">Electronic Accessories</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-tv"></i>     <span className="txt-holder">TV & Home Appliances</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-basketball"></i>  <span className="txt-holder">Sports & Outdoor</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-ring"></i>   <span className="txt-holder">Watches, Bags & Jewelry</span></Link></li>
                              <li><Link  className="a"><i className="fa-solid fa-car"></i>    <span className="txt-holder">Automotive & Motorbike</span></Link></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-9 media">
                      <Swiper
                          spaceBetween={30}
                          centeredSlides={true}                    
                          autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                          }}
                          pagination={{
                              clickable: true,
                          }}
                          navigation={true}
                          modules={[Autoplay, Pagination]}
                          className="mySwiper"
                      >
                          <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/e45ca806-dc4b-4162-bd1d-510e3418eed1.jpg" alt=""  className="img" /></SwiperSlide>
                          <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/9fe83308-d572-4fb3-8406-8ee54fa30f24.jpg_1200x1200.jpg" alt="" className="img" /></SwiperSlide>
                          <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/7bfdcc7d-73b1-4cdd-99ee-b7a18bf539e4.jpg" alt="" className="img" /></SwiperSlide>
                          <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/868c60a2-0d73-4057-b400-b2ff8cfc8d43.jpg" alt="" className="img" /></SwiperSlide>
                          <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/e45ca806-dc4b-4162-bd1d-510e3418eed1.jpg" alt="" className="img" /></SwiperSlide>
                          <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/35fc72d9-d84f-4d34-bd35-a6e1a872b363.jpg" alt="" className="img" /></SwiperSlide>
                          <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/0167cfb2-8cf3-45ee-82cb-7fc06ae2e58c.jpg" alt="" className="img" /></SwiperSlide>
                      </Swiper>
                  </div>
              </div>
          </div>
      </>

  )
}

export default Carousel