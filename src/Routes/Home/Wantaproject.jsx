import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../../Styles/Button.styles";

const Wantaproject = () => {
  return (
    <Wrapper>
    <section className="contact-short">
          <div className="grid grid-two-column">
            <div className="col-1">
              <h3 className="col-heading">Want to start a project with us</h3>
              <h3 className = "col-heading2">Let's build the brand together</h3>
            </div>

            <div className="col-2">
              <Button className="btn hireme-btn">
                <NavLink to="/contactus"> Let's talk </NavLink>
              </Button>
              </div>
            </div>
        </section>
    </Wrapper>
  )
}


const Wrapper = styled.section `

background-color: black;
color: white;

  .contact-short {
    margin: auto;
    padding: 1rem 5rem;
    background-color: ${({ theme }) => theme.colors.bg};

    .grid{
        border: 2px solid #fff;
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        border-color: ${({theme}) => theme.colors.border};
        margin: 4rem 11rem 0rem 12rem;
        height: 15rem;
    }

    

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }


.col-1{
    margin: 1rem 2rem 0rem 15rem;
}

.col-heading{
      margin: 3rem -11rem 0 -10rem;
    }
    
    .col-heading2{
      margin: 0rem -7rem 0 -10rem;
    }

.btn{
    margin: 1rem 5rem 0 0;
}



`

export default Wantaproject