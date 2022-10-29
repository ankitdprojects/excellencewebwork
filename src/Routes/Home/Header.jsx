import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../../Navigation/Navigation.components';``

const Header = () => {

  
  return (
    
    <MainHeader >
        <NavLink to="/" >
            <img src="./images/logo2.png" alt='logo' className='logo' />
        </NavLink>
        <Navigation />
    </MainHeader>
  );
};


const MainHeader = styled.header`
  padding: 0 0 0 7rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  width: 100rem;

  .logo {
    height: 6rem;
  }

  

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
      justify-content: space-between;
      padding: 2.8rem;
      height: 10em;
      width: 50rem;

      .logo{
        height: 9rem;
      }
    
  }
`;

export default Header;