import React from 'react'
import { toast} from 'react-toastify'
import '../components/Style.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../features/cartSlice'





const Counter = ({ id }) => {

    const dispatch = useDispatch();
    const { quantity } = useSelector((store) => store.bucket);

    return (
        <div className='d-flex justify-content-center align-items-center gap-5 mt-5'>
            <button
                onClick={() => {dispatch(decrementQuantity({ id })); }} className='buttonSub border order-dark'> -
            </button>



            <button onClick={() => dispatch(incrementQuantity({ id }))} className='buttonAdd border border-dark '>+</button>


        </div>
    )
}

export default Counter



