import Header from '../Header';
import CartItem from '../CartItem';

import {Link} from 'react-router-dom';

import './index.css';

const Cart=()=>{

    const cartList=[
       {
           isbn13:1,
           title:"Book 1",
           price:10,
           image:"image 1"
       },
       {
           isbn13:2,
           title: "Book 2",
           price: 20,
           image:"image 2"
       }
    ]
    
    
    const isCartEmpty = cartList.length === 0;

    
    const renderCartItems=()=>{

        return(
            <div className="cart-order-items-container">
                <ul className="cart-list-container">
                     {cartList.map((eachCartItem)=>(
                        <CartItem key={eachCartItem.isbn13} cartItemDetails={eachCartItem}/>
                    ))}

                </ul>
                <div className="order-summary-container">
                    <h1 className="cart-heading order-title">Order Summary</h1>
                    <div className="order-amount-container">
                        <p className="order-amount">Amount Payable:</p>
                        <h1 className="cart-price">Price</h1>
                    </div>
                    <p className="order-text">(inclusive of all taxes)</p>
                    <Link to="/checkout" className="nav-link">
                        <button className="checkout-button"disabled={isCartEmpty}>Proceed to Checkout</button>
                    </Link>
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
                        {isCartEmpty?renderCartEmptyMessage():renderCartItems()}
                        
                    </div>
                </div>
            </>
        )
    
}

export default Cart;