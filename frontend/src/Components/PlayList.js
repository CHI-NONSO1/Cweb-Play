import React, { useEffect, useState } from 'react'
import "./CSS/PlayList.css"
import styled from 'styled-components';
import PlayListSlide from './PlayListSlide'
import MusicPlay from './MusicPlay';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {useNavigate } from 'react-router-dom';

export default function PlayList() {

  const [name, setName] = useState('');
  const [purchase, setPurchase] = useState( );
  const [image, setImage] = useState('');
  const [usertoken, setUsertoken] = useState('');
  const [expire, setExpire] = useState('');


  const history = useNavigate();

 

  useEffect(() => {


    const userToken = async () => {
      try {
          
        const res = await axios.get('http://localhost:8000/user/usertoken');
          setUsertoken(res.data.accToken);
          const userDecoded = jwt_decode(res.data.accToken);
          setName(userDecoded.name);
          setImage(userDecoded.image);
          setPurchase(userDecoded.purchase);
          setExpire(userDecoded.exp);
        
      } catch (error) {
          if (error) {
            console.log(error);
            history("/");
              
          }
      }
    }
    
    
    const axiosJWTT = axios.create();
    
    axiosJWTT.interceptors.request.use(async (configu) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
          
        const res = await axios.get('http://localhost:8000/user/usertoken');
            configu.headers.Authorization = `Bearer ${res.data.userToken}`;
            setUsertoken(res.data.userToken);
           const decoded = jwt_decode(res.data.userToken);
            setName(decoded.name);
            setImage(decoded.image);
            setPurchase(decoded.purchase);
            setExpire(decoded.exp);
        }
        return configu;
    }, (error) => {
        return Promise.reject(error);
    });
    
    //getCustomers()
    userToken()
      //}
    },[history,expire,image,purchase,usertoken])
    
     
      const Logout = async () => {
          try {
            
            await axios.delete('http://localhost:8000/user/logout');
              localStorage.removeItem('usertoken')
              history("/");
             
          } catch (error) {
              console.log(error);
          }
      }
  return (
    <PlayContainer>
      <PlayListWrapper>
        <PlayListSlide/>
      </PlayListWrapper>
      <LogoutWrap>
      <LogoutBtnSmall type="submit" variant="danger" onClick={Logout}>Logout</LogoutBtnSmall>
      </LogoutWrap>
      <MusicPlayWrapper>
        <MusicPlay/>
       
      </MusicPlayWrapper>
      </PlayContainer>
  )
}
const PlayContainer = styled.div`
width: 100%;
height: 100%;
background: navy;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0; 
color: #fff;
overflow-x: hidden;
`
const PlayListWrapper = styled.div`
width: 90%;
height: 20%;
margin: 0 auto;
position: sticky;
top: 0;
z-index:10;
`

const MusicPlayWrapper = styled.div`
width: 100%;
height: 50%;
z-index:1;
`

const LogoutBtnSmall = styled.button`
width:60%;
hight:50%;
box-shadow: 0 10px 50px #000;
padding:.9%;
color:#fff;
outline:none;
cursor:pointer;
border:none;
background:blue;
margin-left:1%;
border-radius:15px;
transition: all .3s linear;


&:hover{
  opacity:.5;
  transform:scale(1.05);
}
background:orangered;

`

const LogoutWrap = styled.div` 
width:10%;
hight:30%;
position:absolute;
top:48%;
left:4%;
@media (max-width:820px) {
  background:#fff;
  width:30%;
  hight:15%;
  position:absolute;
  top:16%;
  left:60%; 
}

`