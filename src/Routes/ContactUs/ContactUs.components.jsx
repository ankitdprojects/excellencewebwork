import React from 'react';
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <Wrapper>
    
    <div className="container">
    <h2 className="common-heading">Contact Us</h2>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/maykbbyz"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


display: flex;
    overflow: hidden;
    background:linear-gradient(0.25turn,rgba(57,113,31,1),rgba(111,215,16,1) 30%,transparent 50%,rgba(57,113,31,1) 80%,rgba(111,215,16,1));
    border-top: 1px solid rgb(204, 204, 204);
    border-bottom: 1px solid rgb(204, 204, 204);
padding: 9rem 0;
justify-content: center;

.container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }

`

export default ContactUs