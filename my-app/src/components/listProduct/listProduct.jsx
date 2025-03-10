import React from "react";
import products from "../products/Products";
import ProductItem from "../productItem/ProductItem";
import './listProduct.scss'

function ProductList() {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
