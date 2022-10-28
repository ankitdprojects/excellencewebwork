import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgMenu, CgClose } from "react-icons/cg";
import styled from "styled-components";

const Navigation = ({ scrolling }) => {
  const [menuIcon,setMenuIcon] = useState();
  return (
    <Nav>
    <div className={menuIcon ? "navbar active" : "navbar"}>
   
        <ul className="navbar-lists nav-logo" >
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Contact Us
            </NavLink>
          </li>
        
        <li className='navBtn'>
            <NavLink
              to="/contactus"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Start My Project
            </NavLink>
          </li>
        
          
        </ul>


        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
        
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};


const Nav = styled.nav`


.sticky {
  position: fixed;
  top: 2rem;
  width: 0 0 0 -15rem;

}

.sticky + .content {
  background: #7ED957;
}
.navbar.sticky {
  box-shadow: 0rem 0rem 3rem 0rem #7ED957;
  
  
}

.navbar-lists {
  display: flex;
  gap: 3.0rem;
  align-items: center;

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      transition: color 0.01s linear;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
}

.mobile-navbar-btn {
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
}

.mobile-nav-icon[name="close-outline"] {
  display: none;
}

.navBtn{
  line-height: 3em;
    width: 22vw;
    display: flex;
    justify-content: center;
  border: 2px solid;
    border-radius: 13px;
    border-color: #7ED957

}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .mobile-navbar-btn {
    display: inline-block;
    z-index: 9999;
    border: ${({ theme }) => theme.colors.white};

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .active .mobile-nav-icon {
    display: none;
    font-size: 4.2rem;
    position: absolute;
    top: 30%;
    right: 10%;
    color: ${({ theme }) => theme.colors.white};
    z-index: 9999;
  }

  .active .close-outline {
    display: inline-block;
  }

  .nav-logo{
    background-image: url(./images/logo2.png);
    background-repeat: no-repeat;
    background-size: 40em;
    background-position-x: 4em;
  }

  .navbar-lists {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(33 37 32);
    
    

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    transform-origin: top;
    transition: all 100ms linear;
  }

  .active .navbar-lists {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    z-index: 999;
    transform-origin: right;
    transition: all 100ms linear;

    .navbar-link {
      font-size: 4.2rem;
    }
  }

  .navBtn{
    line-height: 7em;
    width: 43em;
    display: flex;
    justify-content: center;
  border: 2px solid;
    border-radius: 13px;
    border-color: #7ED957
  }

  
}
`;

export default Navigation