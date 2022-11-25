import React from 'react';
import styled from 'styled-components';

const WhatWeDo = () => {
  return (
    <Wrapper>
    <div className='container'>
        <div className='grid grid-two-column'>
        <div className='data'>
            <div className='what-we-do-data'>
                <div className='data-img'>
                    <img src="./images/hirededicateddev.png" alt="hirededicateddev" className='img-edit'/>
                </div>
                </div>
                
            </div>
            <div className='data-text'>
                   <p className='para-text'> We are a dedicated web developer company and passionate committed individuals which find the best possible solutions.We offer you the best website design and services to help you grow as a brand on internet.Our objective is to satisfy the needs and deliver quality services to our clients.We are dedicated web app company that provides benifits to the clients all over the world.In the fast moving world these days,we are always available to satisfy the needs of client </p>
                </div>
        </div>
    </div>

    </Wrapper>
  )
}


const Wrapper = styled.section `

background-color: black;

.grid{
    margin: 0rem 10rem 0rem 0rem;
}


.what-we-do-data{
    
    margin: 4rem 0 1rem 9rem;

}

.img-edit{
    height: 40em;
}

.data-text{
    margin: 3rem;
    padding: 2rem 0rem 5rem 0rem;
}

.para-text{
    color: #7ED957;
    text-align: center;
    
}


@media (max-width: ${({ theme }) => theme.media.mobile}){
    .data-img{
        margin: 0em 0em 0em -2em;
    }

    .data-text{
        margin: -2em 3em 0em 8rem;
    }
}

`

export default WhatWeDo;