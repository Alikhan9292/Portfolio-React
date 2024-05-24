import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import AddPortfolioItem from "./components/AddComponent/AddPortfolioItem"; // Добавление нового компонента
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import { Provider } from 'react-redux'; // Добавлен импорт Provider
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <>
                    <Header />
                    <main className="main">
                        <Routes>
                            <Route path="/" element={<><Home /><About /><Skills /><Portfolio /><Qualification /><Contact /></>} />
                            <Route path="/add" element={<AddPortfolioItem />} />
                        </Routes>
                    </main>
                    <Footer />
                    <ScrollUp />
                </>
            </Router>
        </Provider>
    );
}

export default App;
