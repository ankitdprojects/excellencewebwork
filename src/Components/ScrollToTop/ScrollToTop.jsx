import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {TbArrowBigTop} from 'react-icons/tb'

const ScrollToTop = () => {
    const [showButton,setShowButton] = useState(false);

    useEffect(()=>{
        const checkScrollHeight = () => {
            if(!showButton && window.pageYOffset > 400){
                setShowButton(true);
            } else if (showButton && window.pageYOffset <=400){
                setShowButton(false);
            }
        };
        window.addEventListener('scroll',checkScrollHeight);
        return () => {
            window.removeEventListener('scroll',checkScrollHeight);
        };
    },[showButton])
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <Wrapper isScrollButtonVisible={showButton} onClick={scrollToTop}>
      <div><TbArrowBigTop className='top'/></div>
    </Wrapper>
  )
}

const Wrapper = styled.section `
 position: fixed;
  bottom: 32px;
  right: 40px;
  align-items: center;
  height: 5vh;
  width: 3vw;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.7;
  background: #58FB00;
  border-radius: 4px;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? 'flex' : 'none'};

  &:hover {
    opacity: 1;
  }
    .top{
        width: 100vw;
        height: 5vh;
    }
`;

export default ScrollToTop