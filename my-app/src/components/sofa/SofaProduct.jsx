import React from "react";
import './SofaProduct.scss'

const imgProductSofa = [
    {
        img: "https://product.hstatic.net/200000289413/product/sc012ld_2b5b3d6b5f19464b801e6a51f9e4ff54_1024x1024.jpg",
        name: "Sofa băng",
        price: "4.900.000"
    },
    {
        img: "https://product.hstatic.net/1000406288/product/3240135_1_3c821498f6ae4641b663beea4b70d39f_grande.jpg",
        name: "Sofa băng",
        price: "4.900.000"
    },
    {
        img: "https://product.hstatic.net/1000406288/product/upload_1a9c1f80729142f2930b2a85194919d5_grande.jpg",
        name: "Sofa băng",
        price: "4.900.000"
    },
    {
        img: "https://product.hstatic.net/1000406288/product/4910235_1_c8577e420ce1403999ef7c32629e4dd8_grande.jpg",
        name: "Sofa băng",
        price: "4.900.000"
    },
    {
        img: "https://product.hstatic.net/1000406288/product/upload_116d851ef52a43edba4d8c245ee83616_grande.jpg",
        name: "Sofa băng",
        price: "4.900.000"
    },
    {
        img: "https://product.hstatic.net/1000406288/product/upload_b17282cf288141bfb217a067c2951593_grande.jpg",
        name: "Sofa băng",
        price: "4.900.000"
    },{
        img: "https://product.hstatic.net/1000406288/product/upload_dcae530e89e54f6b804ae781b1734932_grande.jpg",
        name: "Sofa băng",
        price: "4.900.000"
    },{
        img: "https://product.hstatic.net/1000406288/product/upload_e8935a3254db4f6597457a68d142aca4_grande.jpg",
        name: "Sofa băng",
        price: "4.900.000"
    },
];

function SofaProduct() {
    return ( 
        <div className="container-sofa">
            <div className="wrapper-sofa">
                <p>Sofa</p>
                <div className="dash"></div>
                <div className="banner-sofa">
                    <img src="https://vnnoithat.net/media/1040/banner-sofa.jpg" alt="Banner Sofa" />
                </div>

                <div className="list-product-sofa">
                    {imgProductSofa.map((product, index) => (
                        <div className="sofa-item" key={index}>
                            <img src={product.img} alt={product.name} />
                            <p>{product.name}</p>
                            <p className="price">{product.price} VNĐ</p>
                        </div>
                    ))}
                </div>

                <div className="more-sofa">
                    <button>Xem thêm</button>
                </div>
            </div>
        </div>
    );
}

export default SofaProduct;
