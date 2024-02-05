import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import { clearBucket} from "../features/cartSlice";




const CartContainer = () => {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  // const { increment} = useSelector((store) => store.bucket);

useEffect(() => {
  // Calculate the total whenever 'items' changes
  const newTotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  setTotal(newTotal);

  // Update local storage
  localStorage.setItem('cartItems', JSON.stringify(items));
}, [items]);

// Retrieve items from local storage
const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// console.log(cartItems);




if (items < 1){
  return(
  <section className="container">
    <header>
      <h2 className="d-flex justify-content-center" >Your Bucket</h2>
      <h4 className="empty-cart">Is currently Empty</h4>
    </header>
  </section>)}
 

  return (
    <div className='container'>
      <h2 className='checkout d-flex flex-column justify-content-center align-items-center text-primary'>
        Check Out Page
      </h2>
      <hr />
      <section className="container">
        <header>
          <h2 className="d-flex justify-content-center">Your Bucket</h2>
        </header>
        <div>       

{items.map((item) => (
        <>
          <div className=' container d-flex'>
          
                <article className='d-flex justify-content-evenly flex-column w-50 mt-3' key={item.id}>
                  <img src={item?.image} alt={item?.title} height='100px' width='100px' />
                  <h1 className='fs-5'>{item?.title.slice(0, 30)}</h1>             
                  <h1 className='fs-5'>Rs.<span className='text-danger' >{item?.price}</span>,</h1>                 
                  <h1 className='fs-5'>Quantity: <span className='text-primary' style={{ color: 'blue' }}>{item?.quantity}</span>.</h1>

                  <hr />
        
                  {/* <h4>{item?.quantity * item.price}</h4> */}
                </article>                
                {<Counter id={item.id} />}
              
            
           
          </div>
        </>
      ))}
       </div>
       <footer>
         <hr />
         <div className="bucket-total d-flex justify-content-end">
           <h4>      
             Total : <span>${total}</span>
           </h4>
         </div>
         <div className="d-flex justify-content-center ">
         <button className="btn clear-btn border bg-warning border-dark" onClick={()=>{dispatch(clearBucket())}} style={{ height: "40px", width: "200px" }} >Clear Bucket</button></div>
       </footer>
     </section>    
    </div>
  );
};
export default CartContainer