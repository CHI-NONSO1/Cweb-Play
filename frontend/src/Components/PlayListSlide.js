import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';


function PlayListSlide() {
  const [songs, setSongs] = useState([]);

  useEffect(() =>{

    const Songs = async () => {
      try {
         
          const hist = await axios.get('http://localhost:8000/song/songs');
          
          setSongs(hist.data);
          
         
      } catch (error) {
          if (error.res) {
              
              
          }
      }
    }
  
    
    
    Songs()

  
  },[])
  let settings = {
    dot:true,
    Infinity:true,
    speed:500,
    slideToShow:1,
    slideToScroll:1,
    autoplay:true
  }
  return (
    <Carousel {...settings}>
      {!songs ? 
      <Wrap>
        {"Loading . . ."}
      </Wrap>:
      
      songs.map(item =>(
        <React.Fragment key={item.songid}>
      <Wrap>
        <img src={`/audio/${item.sliderimage}`} alt={`${item.songtitle}`}/>
      </Wrap>
       </React.Fragment>
      ))
      
      }

      </Carousel>
  )
}

export default PlayListSlide

const Carousel = styled(Slider)`
margin-top:0;

ul li button {
  &:before {
    font-size: 10px;
    color: rgb(150,158,171);
  }
}

li.slick-active  button:before {
  color: white;
}

.slick-list{
  overflow: visible;
}

button{
  z-index: 1;
}

`

const Wrap = styled.div`
cursor:pointer;

img{
  
  border:4px solid transparent;
  border-radius:4px;
  width:100%;
  height:100%;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition-duration:300ms;
  &:hover{
    border:4px solid rgba(249, 249,249, 0.8);
  }
}

`