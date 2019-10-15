import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
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
  background: rgb(69,71,119); /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgba(69,71,119,1) 0%, rgba(42,42,114,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(69,71,119,1) 0%,rgba(42,42,114,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgb(50, 52, 93) 0%,rgba(42,42,114,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  -webkit-box-shadow: 0px -2px 25px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -2px 25px -7px rgba(0,0,0,0.75);
  box-shadow: 0px -2px 25px -7px rgba(0,0,0,0.75);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
`;