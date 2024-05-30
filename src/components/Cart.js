// src/components/Cart.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
];

const Cart = ({ showCart, onClose }) => {
    const [cart, setCart] = useState(cartElements);

    const removeItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    if (!showCart) {
        return null;
    }

    return (
        <div className="position-fixed top-0 end-0 bg-light p-3 border shadow" style={{ width: '300px', height: '100%', zIndex: 1050 }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Cart</h2>
                <button onClick={onClose} className="btn btn-danger btn-sm">Close</button>
            </div>
            <div>
                {cart.length === 0 ? (
                    <p>No items in cart.</p>
                ) : (
                    <ul className="list-group">
                        {cart.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={item.imageUrl} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                                    <div>
                                        <h6 className="mb-0">{item.title}</h6>
                                        <small>${item.price} x {item.quantity}</small>
                                    </div>
                                </div>
                                <button onClick={() => removeItem(index)} className="btn btn-danger btn-sm">Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Cart;
