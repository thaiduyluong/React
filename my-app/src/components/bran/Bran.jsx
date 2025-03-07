import React, { useState } from 'react';
import './Bran.scss';
import { Link } from 'react-router';


const brands = [
    'Ashley',
    'Aaron',
    'Dunelm Group',
    'French Heritage',
    'Forma ideale',
    'Harvey Norman',
    'Steelcase'
];

const imageBrands = [
    "https://giaonhan247.vn/wp-content/uploads/2023/11/Ashley-Furniture-jpg.webp",
    "https://assets1.chainstoreage.com/images/v/max_width_1440/2023-09/aaron_s_new_store_0.jpg",
    "https://www.retailgazette.co.uk/wp-content/uploads/2021/12/DUNELM-ST-1024x683-1.jpg",
    "https://hestiadecor.com/wp-content/uploads/2021/09/aaron-la-thuong-hieu-noi-that-noi-tieng-tai-my-25499.jpg",
    "https://i.ytimg.com/vi/sBEfXAAv8jI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDAtmsZjz-WaNLEnUjgxbvXE7LrmQ",
    "https://www.applianceretailer.com.au/wp-content/uploads/Harvey-Norman-store.jpg?w=770",
    "https://images.steelcase.com/image/upload/c_fill,q_auto,f_auto,h_656,w_1166/v1662022967/22-0175816-1.jpg"
];

function Bran() {
    const [selectedIndex, setSelectedIndex] = useState(0); 

    return (
        <div className='container-bran'>
            <div className='wrapper-bran'>
                {/* Danh sách thương hiệu */}
                <div className='menu-bran'>
                    {brands.map((brand, index) => (
                        <button key={index} onClick={() => setSelectedIndex(index)}>
                            {brand}
                        </button>
                    ))}
                </div>

                {/* Giới thiệu thương hiệu */}
                <div className='about-bran'>
                    <div className='tile-bran'>
                        <div className='tile-about-us'>
                            <h2 className='name-bran'>{brands[selectedIndex]}</h2>
                            <p>
                                Đây là thông tin mô tả về thương hiệu <b>{brands[selectedIndex]}</b>. Bạn có thể cập nhật nội dung cụ thể về từng thương hiệu tại đây.
                            </p>
                        </div>
                        <Link to = '/more'><button className='show-more'>SHOW MORE</button></Link>
                        
                    </div>

                    {/* Hình ảnh thương hiệu thay đổi theo lựa chọn */}
                    <div className='img-bran'>
                        <img src={imageBrands[selectedIndex]} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bran;
