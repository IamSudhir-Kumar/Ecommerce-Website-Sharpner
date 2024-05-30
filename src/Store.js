import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import album1 from './assets/Album 1.png';
import album2 from './assets/Album 2.png';
import album3 from './assets/Album 3.png';
import album4 from './assets/Album 4.png';

import cofee from './assets/Cofee.png';
import tshirt from './assets/Shirt.png';

const Store = () => {
    const musicProducts = [
        { id: 1, title: 'Album 1', price: '$12.99', img: album1},
        { id: 2, title: 'Album 2', price: '$14.99', img: album2 },
        { id: 3, title: 'Album 3', price: '$9.99', img: album3 },
        { id: 4, title: 'Album 4', price: '$19.99', img: album4 }
    ];

    const merchProducts = [
        { id: 5, title: 'T-Shirt', price: '$19.99', img: tshirt },
        { id: 6, title: 'Coffee Cup', price: '$6.99', img: cofee }
    ];

    return (
        <div className="container">
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
                            <a className="nav-link" href="#">CART <span className="badge badge-light">0</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <header className="jumbotron text-center bg-secondary text-white mt-4">
                <h1 className="display-4">The Generics</h1>
            </header>

            {/* Music Section */}
            <div className="text-center my-4">
                <h2>MUSIC</h2>
            </div>
            <div className="row justify-content-center">
                {musicProducts.slice(0, 2).map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.img} className="card-img-top" alt={product.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <a href="#" className="btn btn-primary">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row justify-content-center">
                {musicProducts.slice(2, 4).map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.img} className="card-img-top" alt={product.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <a href="#" className="btn btn-primary">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Merch Section */}
            <div className="text-center my-4">
                <h2>MERCH</h2>
            </div>
            <div className="row justify-content-center">
                {merchProducts.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.img} className="card-img-top" alt={product.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <a href="#" className="btn btn-primary">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center my-4">
                <button className="btn btn-secondary">See the cart</button>
            </div>

            <footer className="bg-info text-white text-center py-4">
                <h3>The Generics</h3>
                <div>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-spotify"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                </div>
            </footer>
        </div>
    );
};

export default Store;
