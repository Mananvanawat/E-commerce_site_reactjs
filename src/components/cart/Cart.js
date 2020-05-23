import React, { Component } from 'react';
import {ProductConsumer} from '../context'
import CartColumn from './CartColumn'
import CartList from './CartList';
class Cart extends Component {
    state = {  }
    render() { 
        
        return (
            <React.Fragment>
            <h1 className="text-title text-center">Your Cart</h1>
            <CartColumn/>
            <ProductConsumer>
            {
                (value)=>(value.cart.map(val=><CartList val={val}/>))
                
            }
            </ProductConsumer>
            </React.Fragment> );
    }
}
 
export default Cart;