import { useState } from 'react';
import './assets/styles/main.scss'
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Bran from './components/bran/bran';



function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <Layout>
            <Header/>
            <Banner/>
            <Bran/>
            
        </Layout>
        </>
        
     
    );
}

export default App;
