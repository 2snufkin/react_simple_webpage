import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/footer";
import {Content} from "./components/content/content"

function App() {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <Content/>
            </div>

            <Footer/>

        </>
    );
}

export default App;
