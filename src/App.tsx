import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {routes} from "./router";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <div className="container">
            <BrowserRouter>
                <Header />
                <AppRouter links={routes}/>
                <Footer />
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
