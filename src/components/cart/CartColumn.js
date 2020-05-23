import React, { Component } from 'react';

class CartColumn extends Component {
      
    render() { 
        
        return ( <div className="container-fluid text-center d-none d-lg-block">
        <strong>
        <div className="row">
        
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">Products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">Quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">total</p>
        </div>
        
        </div></strong></div> );
    }
}
 
export default CartColumn;