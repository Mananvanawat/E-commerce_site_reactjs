import React, { Component } from 'react';
import {storeProducts,detailProduct} from '../setup-filese-react-phone-e-commerce-project/data';
const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
      products:[],
      detailProduct:detailProduct,
      cart:[],
      cartSubTotal:0,
      cartTax:0,
      cartTotal:0
    }
    componentDidMount(){
        this.setDtails();
    }
    setDtails=()=>{
        let tempProducts=[];
        storeProducts.forEach(element => {
            const single = {...element};
            tempProducts=[...tempProducts,single]
        });
        this.setState(()=>{return{products:tempProducts}})
    }
    getItem = (id) =>{
        const prod = this.state.products.find(item=> item.id===id);
        return prod;
    }
    handleDetail=(id)=>{
        const det = this.getItem(id);
        this.setState({detailProduct:det})
    }
    addToCart=(id)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const prod = tempProducts[index];
        prod.inCart = true;
        prod.count=1;
        const price=prod.price;
        prod.total=price;
        this.setState({products:tempProducts,cart:[...this.state.cart,prod]})
    }
    decrement=()=>{
        
    }
    increment=()=>{

    }
    removeItem=(id)=>{
        const prod = this.state.cart.find(item=> item.id!==id);
        this.setState({cart:prod})
    }

    clearCart=()=>{

    }

    render(){
        return(
            <ProductContext.Provider value={{...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }
            }>
            {this.props.children}
            </ProductContext.Provider>
        )

    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer} ;
