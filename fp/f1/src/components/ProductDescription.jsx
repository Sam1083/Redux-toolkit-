import axios from 'axios' 
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
// import BucketContainer from './BucketContainer'
import Counter from './Counter'
import {useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'


 





const ProductDescription = () => {


    
    const dispatch=useDispatch();
    const { quantity } = useSelector((store) => store.bucket);
  

    const [product,setProduct]=useState(null)
    const params=useParams();

    const fetchData=async()=>{
        const response=await axios.get(`http://localhost:5000/api/js/${params.id}`)
        setProduct(response.data.js)
    }
    useEffect(()=>{
        window.scrollTo(0,0)
        fetchData();
    },[])


    


    return (
        <div className='bg-white ' style={{ minHeight: '100vh', padding: '20px' }}   >
            <div className="container">
                <div className="row mt-1">
                    <div className="col-lg-6">
                        <img src={product?.image} height={"400px"} width={"500px"} alt={product?.title} />
                    </div>
                    <div className="col-lg-6">
                        <h1>{product?.title}</h1>
                        <p>{product?.inStock ? <span className='text-success'>In Stock</span> : <span className='text-danger'>Out of Stock</span>}</p>
                        <h3>Rs .{product?.price}</h3>                      

                        <hr />
                        
                        <div className='d-flex gap-4 justify-content-center mt-3'>
                            <button className='bg-warning fs-3' style={{ height: '50px', width: '200px' }}
                            onClick={() => {       

                                const payload = {
                                    id: product._id,
                                    title: product.title,
                                    price: product.price,
                                    image: product.image,
                                    quantity: 1
                                };
                            
                                dispatch(addToCart(payload));
                                
                            }}
                            >Add to Cart</button>                           

                           {/* <Link className="check-link" to="/checkout"> <button className='bg-warning fs-3' style={{ height: '50px', width: '200px' }}> Check Out</button> </Link> */}
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription
