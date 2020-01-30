import React, { Component } from 'react'
import CartColumns from './CartColumns.js';
import EmptyCart from './EmptyCart.js';
import { ProductConsumer } from '../../context';
import CartList from './CartList.js';
import CartTotals from './CartTotals.js';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value =>{
            const {cart} = value;
            if (cart.length>0){
              return(
                <React.Fragment>
                  <div className="row ">
                    <div className="my-5 w-100 text-title text-center">
                      <h3 className="text-capitalize font-weight-bold">
                          Your <strong className="text-blue">Cart</strong>
                      </h3>
                    </div>
                  </div>
                  <CartColumns/>
                  <CartList value={value}/>
                  <CartTotals value={value} history={this.props.history}/>
                </React.Fragment>
              )
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
        
      </section>
    )
  }
}
