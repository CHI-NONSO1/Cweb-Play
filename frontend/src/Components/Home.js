import React from 'react'
import './CSS/Home.css';
import ImageSlider from './ImageSlider'
import Header from './Header';
import styled from 'styled-components';
import SongDisplay from './SongDisplay';


export default function Home() {
  return (
    <Container>
      <HeaderWrapper>
      <Header/>
      </HeaderWrapper>
      <SliderWrapper>
      <ImageSlider/> 
      </SliderWrapper> 
      <SongMainWrapper>
      <SongDisplay/>
      </SongMainWrapper> 
      
    </Container>
  )
}

const Container = styled.main`
width: 100%;
height: 100%;
background: navy;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0; 
color: #fff;


@media (max-width:820px) {
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: linear-gradient(
    to right top,
    rgb(6, 7, 40),
    rgb(01, 23, 90)
    );
  
}
`
const HeaderWrapper = styled.div`
width: 100%;
height: 10%;
position: sticky;
top: 0;
z-index:5;

`
const SliderWrapper = styled.div`
width: 90%;
height: 20%;
margin: 0 auto;
z-index:3;
`
const SongMainWrapper = styled.div`
width: 90%;
height: 45%;

margin: 0 auto;
box-shadow: 0 10px 50px #000;
background-image: linear-gradient(
  to right top,
  rgb(7, 24, 40),
  rgb(01, 23, 90)
  );
  overflow-y: scroll;
  overflow-x: hidden;
  z-index:1;
  @media (max-width:820px) {
    height: 66%;
    background-image: linear-gradient(
      to right top,
      rgb(76, 70, 10),
      rgb(101, 23, 90)
      );
    
  }
 
`