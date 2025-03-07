import { useState } from "react";
import './product.scss';

const spaceProduct = [
    'Bed Room',
    'Living Room',
    'Dining Room',
    'Working Room',
    'Bath Room'
];

const imageProduct = [
    [
        "https://hnau.imgix.net/media/catalog/product/g/p/gp1022318_1_1_7.jpg",
        "https://hnsfpau.imgix.net/5/images/detailed/379/bedsideee_sjze-bx.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress",
        "https://www.tlcinteriors.com.au/wp-content/uploads/2020/07/all-white-bedroom-harvey-norman-timber-furniture.jpg"
    ],
    [
        "https://www.blog.harveynormancommercial.com.au/wp-content/uploads/2019/10/Cardinal-Living-plus-study_-900-x-500.jpg",
        "https://www.harveynorman.com.au/media/wysiwyg/cms-plus/main-image/gp1072023-fabric-leather-lounge-lead.jpg",
        "https://hnau.imgix.net/media/catalog/product/2/_/2_22_108_1.jpg"
    ],
    [
        "https://hnau.imgix.net/media/catalog/product/g/p/gp1117910_1.jpg",
        "https://ncf.co.uk/cdn/shop/collections/BostonWoodcopy_1.jpg?v=1683205119&width=1024",
        "https://hnau.imgix.net/media/catalog/product/g/p/gp1165803_1_3.jpg"
    ],
    [
        "https://hnau.imgix.net/media/wysiwyg/buying-guides/furniture-outdoor-bbqs/home-office-furniture/home-office-furniture-lead-b.jpg",
        "https://www.harveynorman.com.au/blog/assets/Gen-X-Executive-Desk-1000x539.jpg",
        "https://hnau.imgix.net/media/wysiwyg/buying-guides/furniture-outdoor-bbqs/home-office-furniture/home-office-furniture-measuring-space-b.jpg",

    ],
    [
        "https://hnau.imgix.net/media/wysiwyg/group-pages/bathroom-tiles-renovations/IMAGE-BATHS-AND-SPAS-c.jpg",
        "https://hnau.imgix.net/media/wysiwyg/group-pages/bathroom-tiles-renovations/toilet-suites-b.jpg",
        "https://www.harveynorman.com.au/media/pageimages/multiblock/204/villeroy-boch.jpg"
    ]

   
];

function Product() {
    const [productIndex, setProductIndex] = useState(0);

    return ( 
        <div className="container-product">
            <div className="tile">
                <p>Product</p>
            </div>

            {/* Danh mục sản phẩm */}
            <div className="space-product">
                {spaceProduct.map((product, index) => (
                    <p 
                        key={index} 
                        onClick={() => setProductIndex(index)}
                        className={index === productIndex ? "active" : ""}
                    >
                        {product}
                    </p>
                ))}
            </div>

            {/* Hình ảnh sản phẩm */}
            <div className="img-product">
                {imageProduct[productIndex]?.map((img, index) => (
                    <img key={index} src={img} alt=""/>
                ))}
            </div>
        </div>
    );
}

export default Product;
