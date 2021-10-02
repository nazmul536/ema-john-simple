import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import ReactStars from 'react-stars';


const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, star } = props.product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <ReactStars
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}

                    readonly></ReactStars>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>

        </div >
    );
};

export default Product;