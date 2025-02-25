import { useState } from 'react';
import './assets/styles/main.scss'
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';



function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <Layout>
            <Header/>
         
        </Layout>
        </>
        
     
    );
}

export default App;
