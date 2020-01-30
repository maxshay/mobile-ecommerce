import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">

        <Link to='/'>
          {/* <img src={logo} alt="store" className="navbar-brand"/> */}
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: transparent;
  -webkit-box-shadow: 0px -2px 25px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -2px 25px -7px rgba(0,0,0,0.75);
  box-shadow: 0px -2px 25px -7px rgba(0,0,0,0.75);
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
  }
`;