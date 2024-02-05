import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';


const CheckOut = () => {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const { increment} = useSelector((store) => store.bucket);

useEffect(() => {
  // Calculate the total whenever 'items' changes
  const newTotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  setTotal(newTotal);

  // Update local storage
  localStorage.setItem('cartItems', JSON.stringify(items));
}, [items]);

// Retrieve items from local storage
const cartItems = JSON.parse(localStorage.getItem('cartItems'));
console.log(cartItems);

  return (
    <div className='container'>
      <h2 className='checkout d-flex flex-column justify-content-center align-items-center text-primary'>
        Check Out Page
      </h2>
      <hr />

      {items.map((item) => (
        <div className='d-flex justify-content-evenly w-50 gap-3' key={item.id}>
          <img src={item?.image} alt={item?.title} height='100px' width='100px' />
          <h1>{item?.title.slice(0, 10)}</h1>
          <h1>{item?.quantity}</h1>
          <h3>{item.price}</h3>
          <Counter id={item.id}/>
          <h4>{item?.quantity * item.price}</h4>
        </div>
      ))}

      {/* Display the total */}
      <div className='d-flex justify-content-end'>
        <h4>Total: {total}</h4>
      </div>
    </div>
  );
};

export default CheckOut;
 