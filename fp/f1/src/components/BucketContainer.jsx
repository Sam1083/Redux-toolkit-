import { useSelector,useDispatch } from "react-redux"
import Product from './Product'
import { clearBucket} from "../features/bucketSlice";


const BucketContainer = () => {
const dispatch=useDispatch();
const {products,quantity,total}=useSelector((store)=>store.bucket)

if (quantity < 1){
return(
<section className="container">
  <header>
    <h2 className="d-flex justify-content-center" >Your Bucket</h2>
    <h4 className="empty-cart">Is currently Empty</h4>
  </header>
</section>)}



  return (

    <section  className="container">
      <header>
        <h2 className="d-flex justify-content-center">Your Bucket</h2>
      </header>

      <div>
        {products.map((item) =>{
            return <Product key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="bucket-total d-flex justify-content-end">
          <h4>      
            Total <span>${total}</span>
          </h4>
        </div>
        <div className="d-flex justify-content-center ">
        <button className="btn clear-btn border bg-warning" onClick={()=>{dispatch(clearBucket())}} style={{ height: "40px", width: "200px" }} >Clear Bucket</button></div>
      </footer>
    </section>




  )
}

export default BucketContainer