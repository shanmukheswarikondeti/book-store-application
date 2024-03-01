import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css';

class Checkout extends Component{
    
    renderOrderSuccessMessage=()=>{
        return(
            <div className="success-message-container">
                <h1 className="order-success-message">Your Order is Placed</h1>
                <Link to="/" className="nav-link">
                    <button className="home-button">Go to Home</button>
                </Link>
            </div>
        );
    };
    
    render(){
        return(
            <>
               <div className="header-without-links-container">
                    <div className="header-content-container">
                        <div className="logo-container">
                            <div className="logo">B</div>
                                BOOKSTORE
                            </div>
                        </div>
                    </div>

                    <div className="checkout-container">
                        <div className="checkout-content-container">
                            {this.renderOrderSuccessMessage()}
                        </div>
                    </div>
                
                
            </>
        )
    }

}
export default Checkout;