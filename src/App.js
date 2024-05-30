// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './components/Store';
import Cart from './components/Cart';

const App = () => {
    const [showCart, setShowCart] = useState(false);

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">The Generics</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">STORE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary" onClick={() => setShowCart(true)}>
                                CART <span className="badge badge-light">{cartElements.length}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className="jumbotron text-center bg-secondary text-white mt-4">
                <h1 className="display-4">The Generics</h1>
            </header>

            <Store />

            <Cart showCart={showCart} onClose={() => setShowCart(false)} />
        </div>
    );
};

export default App;
