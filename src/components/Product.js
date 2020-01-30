import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (            
              <div className="img-container p-5"
                   onClick={() => 
                      value.handleDetail(id)
                   }
              >
                <Link to='/details'>
                  <img src={img} alt="product" className="card-img-top"/>
                </Link>
                <button className={`card-btn ${inCart ? ' already-in-cart' : null}`} 
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                  }}
                >
                {inCart ? (<p className="text-capitalize mb-0 already-in-cart">
                            added
                          </p>): <i className="fas fa-cart-plus"></i>}
                </button>
              </div>
            )}

          </ProductConsumer>


          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="aligh-self-center mb-0">
              {title}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">
                ${price}
              </span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes = {
  product:PropTypes.shape({
    id: PropTypes.number,
    img:PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent
    transition: all 0.2s ease-in;
  }
  .already-in-cart {
    font-size: 0.75rem;
    color: #c3c3c3;
  }
  .already-in-cart:hover {
    cursor: default !important;
  }
  .card-footer {
    background: transparent;
    border: transparent;
    transition: all 0.2s ease-in;
  }
  &:hover {
    .card {
      -webkit-box-shadow: 2px 6px 23px -13px rgba(92,92,92,1);
      -moz-box-shadow: 2px 6px 23px -13px rgba(92,92,92,1);
      box-shadow: 2px 6px 23px -13px rgba(92,92,92,1);
    }

    
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.1s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.2);
  }
  .card-btn {
    position:absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 1rem;
    border: none;
    color: #c3c3c3;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .card-btn{
    transform: translate(0,0);
    transition: all 0.1s ease-in;
  }
  .card-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .card-btn:focus {
    outline: none;
  }
`;