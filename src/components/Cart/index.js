import Header from '../Header';

import {Link} from 'react-router-dom';

import './index.css';

const Cart=()=>{

    

    const renderCartItems=()=>{

        return(
            <div className="cart-order-items-container">
                <div className="order-summary-container">
                    <h1 className="cart-heading order-title">Order Summary</h1>
                    <div className="order-amount-container">
                        <p className="order-amount">Amount Payable:</p>
                        <h1 className="cart-price">price</h1>
                    </div>
                    <p className="order-text">(inclusive of all taxes)</p>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            </div>

        )
    };

        const renderCartEmptyMessage=()=>{
            return(
                <div className="cart-empty-message-container">
                    <h1 className="cart-empty-message">
                         You Have No Items In Your Cart
                    </h1>
                    <Link to="/books" className="nav-link">
                        <button className="books-button">Continue Shopping</button>
                    </Link>
                </div>
            )
        };
    
        return(
            <>
                <Header/>
                <div className="cart-container">
                    <div className="cart-content-container">
                        <h1 className="cart-heading">My Bag</h1>
                        {renderCartEmptyMessage()}
                        {renderCartItems()}
                    </div>
                </div>
            </>
        )
    
}

export default Cart;