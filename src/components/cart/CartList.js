import React, { Component } from 'react';

class CartList extends Component {
    state = {  }
    render() { 
        const value = this.props.val;
        const{id,img,title,price} = value;
        return ( <div className="container-fluid text-center d-none d-lg-block">
        
        <div className="row my-1 text-capitalize text-center">
        
        <div className="col-10 mx-auto col-lg-2">
        <img 
            src = {img} 
            alt = "mama"
            className="img-fluid"
            style={{width:"5rem",height:"5rem"}}
            
            />
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase text-center">{title}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">{price}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">1</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
       <i style ={{color:'yellow'}}className = "fa fa-trash-alt"
       
       />
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">{price}</p>
        </div>
        </div></div>  );
    }
}
 
export default CartList;