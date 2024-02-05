
import "./Carousel.css"
import React, {useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



 // import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Carousel = () => {
    return (
      <>
          <div className="container">
              <div className='row mt-4'>
                  <div className="col-lg-3 ">
                      <div className="custom">
                          <ul className="list-unstyled mt-1 pb-2 d-flex flex-column gap-2 ms-4">
                              <li><a href="#" className="a"><i class="fa-solid fa-basket-shopping"></i> <span class="txt-holder">Groceries & Pets</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-heart"></i> <span class="txt-holder">Health & Beauty</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-shirt"></i> <span class="txt-holder">Men's Fashion</span></a></li>
                              <li><a href="#" className="a"> <i class="fa-solid fa-person-dress"></i> <span class="txt-holder">Women's Fashion</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-person-breastfeeding"></i> <span class="txt-holder">Mother & Baby</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-couch"></i> <span class="txt-holder">Home & Lifestyle</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-camera"></i> <span class="txt-holder">Electronic Devices</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-plug"></i>   <span class="txt-holder">Electronic Accessories</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-tv"></i>     <span class="txt-holder">TV & Home Appliances</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-basketball"></i>  <span class="txt-holder">Sports & Outdoor</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-ring"></i>   <span class="txt-holder">Watches, Bags & Jewelry</span></a></li>
                              <li><a href="#" className="a"><i class="fa-solid fa-car"></i>    <span class="txt-holder">Automotive & Motorbike</span></a></li>
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