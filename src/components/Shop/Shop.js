import React, {useState, useEffect} from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([])

    useEffect ( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
        }
        ,[]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if(products.length){
            for(const key in savedCart){
                const addedProduct = products.find(product=> product.key === key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    },[products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        //save to local storage for now
        addToDb(product.key);  
    }

    const handleSearch = event => {
        const searchText = event.target.value
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(matchedProducts.length)
    }

    return (
        <>
            <div className="search-container">
                <input type="text"
                 onChange = {handleSearch}
                 placeholder="search product"/>
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product=> <Product
                            key={product. key}
                            product= {product}
                            handleAddToCart = {handleAddToCart}
                            />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}/>
                </div>
            </div>
        </>
    )
}

export default Shop
