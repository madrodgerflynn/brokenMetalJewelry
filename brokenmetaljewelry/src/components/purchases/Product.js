import React from "react";
import "./Purchase.css";
// import data from "../data";

function Product(props) {
 const {products} = props;
 return(
    <div className="purchaseForm">
        <h2>Your Purchase</h2>
        <div className="row">
            {products.map((product)=>(
                <Product key={product.id} product={product}></Product>
            ))}
        </div>
    </div>
 )
}
export default Product;