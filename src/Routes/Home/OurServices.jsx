import React from 'react'
import { MdWeb } from 'react-icons/md'
import { MdWebAsset } from 'react-icons/md'
import { MdDesignServices } from 'react-icons/md'
import { RiFileSettingsFill } from 'react-icons/ri'
import styled from 'styled-components'

const OurServices = () => {
  return (
    <Wrapper>
    <div className='container'>
    <div className="heading-set">
    <p className='heading'>Our Services</p></div>
        <div className='grid grid-four-column'>
            <div className='card card1 col-1'>
            <MdWeb className='icon'/>
            <p>Web Development</p>
            <p className='description-col-1'>We develope the website with the best design.We create right solutions for the website with best functionality</p>
            </div>
            <div className='card card2 col-2'>
            <MdWebAsset className='icon' />
            <p className='details-col-2'>Web Apps</p>
            <p className='description-col-2'>We create websites that are mobile friendly variation of webpage that may be used on any smartphone or tablet.</p>
            </div>
            <div className='card card3 col-3'>
            <MdDesignServices className='icon'/>
            <p className='details-col-3'>Graphic Design</p>
            <p className='description-col-3'>We design website as per the client's requirement and provide them a bestspoke solution which brings meaningful results </p>
            </div>
            <div className='card card4 col-4'>
            <RiFileSettingsFill className='icon'/>
            <p className='details-col-4'>Maintenance and Support</p>
            <p className='description-col-4'>We give you services as your needs,we aim to continually grow,maintain,upgrade and revamp your site on ongoing basis</p>
            </div>
        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `


background-color: black;
.heading-set{
    margin: 0 0 -7rem 0rem;
}
.heading{
    padding: 6rem 0rem 0rem 0rem;
    font-weight: bold;
    font-size: 3rem;
}
.col-1{
   margin: 10rem 0 0 10rem;   
}

.col-2
{
    margin: 10rem 0 0 -6rem;
}
.col-3{
    margin: 10rem 0 0 -16rem;
}
.col-4{
    margin: 10rem 0 0 -14rem ;
}
p{
    color: #fff;
    text-align: center;
    font-size: 2rem;
}

.description-col-1{
    font-size: 1rem;
    margin: 2rem 0 0 0;
}

.description-col-2{
    font-size: 1rem;
    margin: 2rem 0rem 0 0;
}

.description-col-3{
    font-size: 1rem;
    margin: 2rem 0rem 0 0;
}

.description-col-4{
    font-size: 1rem;
    margin: 2rem 0rem 0 0;
}

.details-col-2{
    width: 15rem;
}

.details-col-3{
    width: 15rem;
}

.details-col-4{
    width: 15rem;
}
.card1{
    box-shadow: 0em 1em 2em 0em rgb(111 252 0);
  transition: 0.1s;
  border-radius: 1rem;
  width: 16rem;
}

.card2{
    box-shadow: 0 1em 2em 0 rgb(111 252 0);
  transition: 0.1s;
  border-radius: 1rem;
  width: 16rem;

}

.card3{
    box-shadow: 0 1em 2em 0 rgb(111 252 0);
  transition: 0.1s;
  border-radius: 1rem;
  width: 16rem;
}

.card4{
    box-shadow: 0 1em 2em 0 rgb(111 252 0);
  transition: 0.1s;
  border-radius: 1rem;
  width: 16rem;
}

.icon{
    width: 15rem;
    height: 8rem;
    color:#fff;
}

.card:hover {
  box-shadow: 0 1rem 3rem 0 #7ED957;
  background-color: #7ED957;
  color: #fff;
}


`

export default OurServices