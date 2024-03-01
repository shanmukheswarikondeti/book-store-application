import { FaTrashAlt } from "react-icons/fa";

import './index.css'

const CartItem=props=>{

    const {cartItemDetails}=props
    const {isbn13,image,title,price}=cartItemDetails;

    return(
        <li className="cart-item-container">
            <div className="cart-item-content-container">
                <div className="cart-details-container">
                    <img src={image} alt={title} className="cart-item-image"/>
                    <h1 className="cart-itme-heading">{title}</h1>
                </div>
                <div className="cart-more-details-container">
                    <h1 className="cart-item-heading">{price}</h1>
                    <button className="delete-button">
                        <FaTrashAlt className="delete-icon"/>
                    </button>
                </div>
            </div>
        </li>

    )
    }
export default CartItem;