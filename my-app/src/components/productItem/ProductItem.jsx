import './ProductItem.scss'



import React from "react";

function ProductItem({ product }) {
    return (
        <div className="product-item">
            <img src={product.image} alt=""/>
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()}đ</p>
        </div>
    );
}

export default ProductItem;
