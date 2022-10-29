import React ,{ useLayoutEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import {  useLocation } from 'react-router-dom';




const Footer = () => {
  
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <Wrapper>
        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
                <NavLink to='/excellencewebwork/'>
              <img src="./images/logo1.png" alt="logo" className='footer-logo'/></NavLink>
              <p className='rights-footer'>Make your business shine on the web
</p>
            </div>
            <div className="footer-contact">
              <h3>USEFUL LINKS</h3>
              <NavLink to='/' >
                <p>Home</p>
              </NavLink>
              <NavLink to='/about' >
                <p>About Us</p>
              </NavLink>
              <NavLink to='/contactus'>
                <p>Contact Us</p>
              </NavLink>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons icon1" />
                </div>
                <div>
                  <GrLinkedin className="icons icon2" />
                </div>
                <div>
                <BsTwitter className="icons icon3" />
                </div>
              </div>
            </div>
           
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Excellence Web Work All Rights reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section `

.grid{
    width: 77rem;

}

.icon1:hover{
    background-color: #7ED957;
}

.icon2:hover{
    background-color: #7ED957;
}

.icon3:hover{
    background-color: #7ED957;
}

footer {
    padding: 7rem 0 0rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      margin: 0 0 0 -4rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-logo{
    margin: 0 -4rem 0 -1rem;
  }

  .footer-contact{
    font-size: 2rem;
    color: white;
    margin: 0 0 0rem -7rem;
  }


  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  .rights-footer{
    width: 20rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }

`

export default Footer