import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />
const Product = (props) => {
    if (props.product === undefined) {
        return (
            <>
                
            </>
        )
    }
    // console.log(props)

    const { name, img, seller, price, stock } = props.product;
    // console.log(name
    return (
        <div className= 'product'>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
                <h4 className= 'product-name'>{name}</h4>
                <p>By: {seller}</p>
                <p>Price ${price}</p>
                <p><small>Only {stock} left in stock- order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'>{element}add to cart  </button>
            </div>
        </div>
    );
};

export default Product;
 