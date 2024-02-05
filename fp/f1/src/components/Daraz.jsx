import React, { useEffect, useRef } from 'react';
import Carousel from './Carousel'
import Bar from './Bar'
import CardChannel from './CardChannel'
import SaleCards from './SaleCards'
import Category from './Category'
import OtherProducts from './OtherProducts'
import CheckOut from './CheckOut';
import BucketContainer from './BucketContainer';






const Daraz = () => {
const topRef = useRef(null);

// useEffect to scroll to the top when the component mounts
useEffect(() => {
  if (topRef.current) {
    // Scroll to the top when the component mounts
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, []); // Empty dependency array means this effect will only run once (on mount)

// Function to scroll to the top when called
const scrollToTop = () => {
  if (topRef.current) {
    // Scroll to the top
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <>
  <Carousel/>
  <Bar/>
  <CardChannel/>
  <SaleCards/>
  <Category/>
  <OtherProducts/>
  


  
    </>
  )
}

export default Daraz