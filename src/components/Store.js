import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import album1 from '../assets/Album 1.png';
import album2 from '../assets/Album 2.png';
import album3 from '../assets/Album 3.png';
import album4 from '../assets/Album 4.png';

import cofee from '../assets/Cofee.png';
import tshirt from '../assets/Shirt.png';

const musicProducts = [
    { id: 1, title: 'Album 1', price: '$12.99', img: album1},
    { id: 2, title: 'Album 2', price: '$14.99', img: album2 },
    { id: 3, title: 'Album 3', price: '$9.99', img: album3 },
    { id: 4, title: 'Album 4', price: '$19.99', img: album4 }
];

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import album1 from '../assets/Album 1.png';
// import album2 from '../assets/Album 2.png';
// import album3 from '../assets/Album 3.png';
// import album4 from '../assets/Album 4.png';

// import cofee from '../assets/Cofee.png';
// import tshirt from '../assets/Shirt.png';

// const Store = () => {
//     const musicProducts = [
//         { id: 1, title: 'Album 1', price: '$12.99', img: album1},
//         { id: 2, title: 'Album 2', price: '$14.99', img: album2 },
//         { id: 3, title: 'Album 3', price: '$9.99', img: album3 },
//         { id: 4, title: 'Album 4', price: '$19.99', img: album4 }
//     ];

//     const merchProducts = [
//         { id: 5, title: 'T-Shirt', price: '$19.99', img: tshirt },
//         { id: 6, title: 'Coffee Cup', price: '$6.99', img: cofee }
//     ];

const Store = () => {
    return (
        <div className="container">
            <h2 className="text-center my-4">Music</h2>
            <div className="row">
                {musicProducts.map(product => (
                    <div key={product.id} className="col-md-3 mb-4">
                        <div className="card">
                            <img src={product.img} className="card-img-top" alt={product.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
