import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/main.scss';
import Home from './components/Home/home';
import Showmore from './components/showmore/showmore'
import ListProduct from './components/listProduct/listProduct';

function App() {
    return (
        <Router>
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path = "/more" element = {<Showmore/>}/>
                    <Route path = "/listproduct" element = {<ListProduct/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
