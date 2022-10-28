import React from 'react';
import styled from 'styled-components';
import img from './Images/aboutus.png'

const AboutSection = () => {
  return (
    <Wrapper>
    <div className='container'>
    <div className="about-section-data">
    
      <h1 className='about-head'>About Us</h1>
      <div className='text'>
      <p>We are a full-service digital solution provider,You Think,We Create,thereby expanding gradually in today's world,We, at Excellence Web Work, are a group of committed and competent service providers that seek to outsource a service to our clients, which include corporations, agencies, and startups. We work hard to achieve our major slogan of 'customer pleasure and appreciation,' and we endeavour to give solutions and services that are as precise and high-quality as possible </p>
    </div>
    </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `

background-image: url(${img});
width: 100vw;
height: 100vh;
background-repeat: no-repeat;
  background-size: cover;
  padding: 9rem 0;
display: flex;
align-items: center;
justify-content: center;

.container{
  margin: 0rem 2rem 23rem 0;
  width: 78vw;
}

.about-section-data{

  h1 {
      text-transform: capitalize;
      font-weight: bold;
      color: #fff;
      font-size: 3rem;
      text-align: center;
    }
    p{
      color: #fff;
    }
    .data{
      color: #fff;
      font-size: 1rem;
      text-align: center;
      height: 5rem 0 0 0;
      
    }
  }

  .about-head{
    margin: 30rem 0 0 0;
    height: 7rem;
  }

`

export default AboutSection