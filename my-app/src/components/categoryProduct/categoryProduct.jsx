import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import SideBar from "../sidebar/SideBar";
import ProductList from "../listProduct/listProduct";
import "./categoriProduct.scss";



function CategoryProduct() {
    return ( 
        <div>
            
            <Layout>
                <Header/>
                    <div className="container-category"></div>
                        <div className="sidebar-list">
                            <div className="sidebar"><SideBar/></div>
                            <div className="product-list"><ProductList/></div>
                        
                    </div>
                    
            </Layout>
        </div>
    );
}

export default CategoryProduct;