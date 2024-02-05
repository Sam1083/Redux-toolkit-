import { useDispatch} from "react-redux"
import { removeItem, decrease, increase } from '../features/bucketSlice'




const Product = ({ id, image, title, price, quantity }) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <article className="bucket-product mt-4">
                                <img src={image} alt={title} style={{ height: "100px", width: "100px" }} />
                                <div>
                                    <h4>{title}</h4>
                                    <h4>{price}</h4>
                                    <button className="remove-btn bg-info" onClick={() => {
                                        dispatch(removeItem(id));
                                    }}>Remove</button>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="col-lg-6">

                        <div className="container d-flex align-items-center justify-content-end gap-3">

                             <button className="quantity-btn bg-warning d-flex justify-content-center fs-3" onClick={() => {
                                if (quantity === 1) {

                                    dispatch(removeItem(id))
                                    return;
                                }
                                dispatch(decrease({ id }));
                            }} style={{ height: "40px", width: "40px" }}>-</button>

                            <p className="quan fs-3 mt-3">{quantity}</p>

                            <button className="quantity-btn bg-warning d-flex justify-content-center fs-3" onClick={() => { dispatch(increase({ id })); }} style={{ height: "40px", width: "40px" }}>+</button> 

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product