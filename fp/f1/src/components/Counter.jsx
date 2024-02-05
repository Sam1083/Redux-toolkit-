import React from 'react'
import './Style.css'
import { toast} from 'react-toastify'
import '../components/Style.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from '../features/cartSlice'


const Counter = ({ id }) => {
const dispatch = useDispatch();
const item = useSelector((store) => store.cart.items.find((item) => item.id === id));

    return (
        <div className='d-flex justify-content-center align-items-center gap-5 mt-5 counter'>
            <button
                onClick={() => {                 
                      if (item.quantity === 1) {
                        dispatch(removeItem(id))
                        return;}                     
                    dispatch(decrementQuantity({ id }));}} className='buttonSub border border-dark'>-</button>
            <button onClick={() => dispatch(incrementQuantity({ id }))} className='buttonAdd border border-dark'>+</button>      
        </div>
    )
};

export default Counter



