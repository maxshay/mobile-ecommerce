import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import Filter from './Filter';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5 w-100">
          <div className="container-fluid px-5 w-100">
            


            
       
              {/* new */}
              <ProductConsumer>
                {function(value) {
                  const { updateFilter, filteredProducts } = value
                  return (
                    <div className="row">
                      <div className="col-lg-3">
                      <Filter updateFilter={updateFilter} />
                      </div>
                      <div className="col-lg-9">
                      <Title name="our" title="products" />
                      <div className="row">
                        {filteredProducts.map(product => (
                          <Product key={product.id} product={product}/>
                        ))}
                      </div>
                      </div>
                    </div>
                  )
                }}
              </ProductConsumer>

              { /* end new */}

              {/* end products list */}


     
          </div>
        </div>
      </React.Fragment>

      //<Product />
    
    )
  }
}
