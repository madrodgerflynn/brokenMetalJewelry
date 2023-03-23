import React from "react";
import "./Purchase.css";
import data from "../data";

function Purchase(props) {
 const {products} = props;
 return(
    <div className="block col-2">
        <h2>Your Purchase</h2>
        <div className="row">
            {products.map((product)=>(
                <Prodcut key={product.id} product={product}></Prodcut>
            ))}
        </div>
    </div>
 )
}
export default Purchase;