import React from "react";
import './showmore.scss'
import Layout from "../Layout/Layout";


const introDuce = [
    {
        brand: "ASHLEY",
        title: [
            "Ashley Furniture là một trong những",
            "thương hiệu sản xuất nội thất lớn nhất thế giới.",
            "Hiện nay Ashley Furniture bao gồm 4 trụ sở chính",
            "được đặt tại Arcadia, WI, Brandon và Florida"
        ],
        image: "https://www.retailtouchpoints.com/wp-content/uploads/2023/07/Store.png"
    }
];

function Showmore() {
    return ( 
        <Layout>
            <div className="container">
            <div className="wrapper">
                <div className="introduce">
                    <div className="introduce-text">
                        <pan>{introDuce[0].brand}</pan>
                        <p>
                            {introDuce[0].title.map((line , index) => (
                                <span key = {index}>{line} <br/></span>
                            ))}
                        </p>
                    </div>
                    <div className="introduce-img">
                        <img src={introDuce[0].image} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        
     );
}

export default Showmore;