import './Bed.scss'


const imgBed = [
    {
        img: "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/B633-78-76_AGR?fit=fit&wid=1200&hei=900",
        name: "Starmore queen panel bed",
        price: "20.000.000 VNĐ"
    },
    {
        img: "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/B633-78-76_AGR?fit=fit&wid=1200&hei=900",
        name: "Starmore queen panel bed",
        price: "20.000.000 VNĐ"
    },{
        img: "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/B633-78-76_AGR?fit=fit&wid=1200&hei=900",
        name: "Starmore queen panel bed",
        price: "20.000.000 VNĐ"
    },{
        img: "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/B633-78-76_AGR?fit=fit&wid=1200&hei=900",
        name: "Starmore queen panel bed",
        price: "20.000.000 VNĐ"
    },{
        img: "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/B633-78-76_AGR?fit=fit&wid=1200&hei=900",
        name: "Starmore queen panel bed",
        price: "20.000.000 VNĐ"
    },

]

function Bed() {
    return ( 
        <div className="container-bed">
            <div className="wrapper-bed">
                <p>Bed</p>
                <div className="dash-bed"></div>
                <div className="banner-bed">
                    <img src = "https://www.hookerfurniture.com/cid3280/css/1717/images/bedroom-banner.jpg" alt = ""/>
                </div>
                <div className='list-product-bed'>
                    {imgBed.map((product, index) =>(
                        <div  className = "bed-item" key={index}>
                            <img src = {product.img} alt = ""/>
                            <p>{product.name}</p>
                            <p className='price-bed'>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default Bed;
