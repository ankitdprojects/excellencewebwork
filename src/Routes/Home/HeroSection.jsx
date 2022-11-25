import React from 'react';
import styled from 'styled-components';
import img from './Image/background.png'
import { NavLink } from 'react-router-dom';
import { Button } from '../../Styles/Button.styles';

const HeroSection = () => {
  return (
    <Wrapper>
      <div className='container'>
      <div className='grid grid-two-column'>
        <div className="hero-section-data">
        <div className='wide'>
          <div className="intro-data">
            <h1>Website Devlopement/Design and Graphic Desgin</h1>
            <p className='data'>Hire the Web Devloper/Designer and build the best website.Our team will help you devlope,design and maintain your website</p>
          </div>
          <NavLink to='/contactus'> 
            <Button className='btn-edit'>Contact Us</Button>
          </NavLink>
          </div>
          
        </div>
        <div className="hero-section-image">
            <img src="./images/heroImage.png" alt="heroImage" className='img-style' />
          </div>
      </div>

      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section `
border: 1px solid #000;
  background-image: url(${img});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 9rem 0;


  

  .wide{
    margin: 1rem 0 1rem 8rem;
    
  }

  .btn-edit{
    margin:2rem 0 0 11rem;
  }

  

  .hero-section-data {

  h1 {
      text-transform: capitalize;
      font-weight: bold;
      color: #7ED957;
      font-size: 3rem;
      text-align: center;
    }
    .data{
      color: #fff;
      font-size: 1rem;
      text-align: center;
      
    }
  }


  .img-style {
    width: 40vw;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    .img-style{
      display: none;
    }

    .wide{
      margin: 11rem 0 0rem 5rem;
    }
  
  }
`


export default HeroSection