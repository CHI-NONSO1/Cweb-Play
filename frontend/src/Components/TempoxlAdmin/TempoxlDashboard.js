import React from 'react';
import { useState, useEffect  } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../Icon';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AddSong from './AddSong';
import AddLyrics from './AddLyrics';
import ViewSong from './ViewSong';
import UpdateSong from './UpdateSong';
import UpdateLyrics from './UpdateLyrics';
import AddSellLyric from './AddSellLyric';
import ViewSellLyrics from './ViewSellLyrics';
//import UpdateSellLyrics from './UpdateSellLyrics';
import ViewRequest from './ViewRequest';
import ViewUsers from './ViewUsers';
import ViewPurchases from './ViewPurchases';



function TempoxlDashboard() {

  
 
  const [name, setName] = useState('');
  const [purchase, setPurchase] = useState( );
  const [image, setImage] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
 
  const history = useNavigate();
 
 

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {


    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, [history,token]);



 
 

  const [addSongStatus,setAddSongStatus] = useState(false);
  const [updateSongStatus,setUpdateSongStatus] = useState(false);
  const [addLyricsStatus,setAddLyricsStatus] = useState(false);
  const [viewSongStatus,setViewSongStatus] = useState(false);
  const [updateLyricsStatus,setUpdateLyricsStatus] = useState(false);
  const [addSellLyricsStatus,setAddSellLyricsStatus] = useState(false);
  const [viewSellLyricsStatus,setViewSellLyricsStatus] = useState(false);
  //const [updateSellLyricsStatus,setUpdateSellLyricsStatus] = useState(false);
  const [viewRequestStatus,setViewRequestStatus] = useState(false);
  const [viewUsersStatus,setViewUsersStatus] = useState(false);
  const [viewPurchasesStatus,setViewPurchasesStatus] = useState(false);



  const [addSongStatusSmall,setAddSongStatusSmall] = useState(false);
  const [menuStatusSmall,setMenuStatusSmall] = useState(false);
const [addLyricsStatusSmall,setAddLyricsStatusSmall] = useState(false);
const [viewSongStatusSmall,setViewSongStatusSmall] = useState(false);
const [updateSongStatusSmall,setUpdateSongStatusSmall] = useState(false);
const [updateLyricsStatusSmall,setUpdateLyricsStatusSmall] = useState(false);
const [addSellLyricsStatusSmall,setAddSellLyricsStatusSmall] = useState(false);
const [viewSellLyricsStatusSmall,setViewSellLyricsStatusSmall] = useState(false);
//const [updateSellLyricsStatusSmall,setUpdateSellLyricsStatusSmall] = useState(false);
const [viewRequestStatusSmall,setViewRequestStatusSmall] = useState(false);
const [viewUsersStatusSmall,setViewUsersStatusSmall] = useState(false);
const [viewPurchasesStatusSmall,setViewPurchasesStatusSmall] = useState(false);


useEffect(() => {
  const readLocation = window.location.pathname
  if(readLocation.match(/song.*/)){
    setUpdateSongStatus(true);
    setUpdateSongStatusSmall(true);
  }
    
    if(readLocation.match(/lyrics.*/)){
      setUpdateLyricsStatus(true);
      setUpdateLyricsStatusSmall(true);
   
  }

 
},[])
  


useEffect(() => {


const adminToken = async () => {
  try {
      
    const res = await axios.get('http://localhost:8000/tempoxladmin/token');
      setToken(res.data.accessToken);
      const decoded = jwt_decode(res.data.accessToken);
      setName(decoded.name);
      setImage(decoded.image);
      setPurchase(decoded.purchase);
      setExpire(decoded.exp);
  } catch (error) {
      if (error) {
          history("/adminlogin");
          
      }
  }
}


const axiosJWTT = axios.create();

axiosJWTT.interceptors.request.use(async (configu) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      
    const res = await axios.get('http://localhost:8000/tempoxladmin/token');
        configu.headers.Authorization = `Bearer ${res.data.accessToken}`;
        setToken(res.data.accessToken);
       const decoded = jwt_decode(res.data.accessToken);
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
adminToken()
  //}
},[history,expire,image,purchase,token])

 
  const Logout = async () => {
      try {
        
        await axios.delete('http://localhost:8000/tempoxladmin/logout');
          localStorage.removeItem('Admintoken')
          history("/adminlogin");
         
      } catch (error) {
          console.log(error);
      }
  }



  return (
    <Container>
       {matches && (
       
       
        <>
        
        <Header>
        

          <AddSongBTN 
            onClick={() =>{
              setAddSongStatus(true);
              setAddLyricsStatus(false);
              setViewSongStatus(false);
              setUpdateSongStatus(false);
              setUpdateLyricsStatus(false);
              setAddSellLyricsStatus(false);
              setViewSellLyricsStatus(false);
              setViewRequestStatus(false);
              setViewUsersStatus(false);
              setViewPurchasesStatus(false);
            }}
          
          >
            Add Song
          </AddSongBTN>

          <AddLyricsBTN
            onClick={() =>{
              setAddLyricsStatus(true);
              setAddSongStatus(false);
              setViewSongStatus(false);
              setUpdateSongStatus(false);
              setUpdateLyricsStatus(false);
              setAddSellLyricsStatus(false);
              setViewSellLyricsStatus(false);
              setViewRequestStatus(false);
              setViewUsersStatus(false);
              setViewPurchasesStatus(false);
            }}
          
          >
            Add Lyrics
          </AddLyricsBTN>

          <ViewSongsBTN
            onClick={() =>{
              setViewSongStatus(true);
              setAddLyricsStatus(false);
              setAddSongStatus(false);
              setUpdateSongStatus(false);
              setUpdateLyricsStatus(false);
              setAddSellLyricsStatus(false);
              setViewSellLyricsStatus(false);
              setViewRequestStatus(false);
              setViewUsersStatus(false);
              setViewPurchasesStatus(false);
            }}
          
          >
            View Songs
          </ViewSongsBTN>

          <AddSellLyricsBTN
            onClick={() =>{
              setAddSellLyricsStatus(true);
              setViewSongStatus(false);
              setAddLyricsStatus(false);
              setAddSongStatus(false);
              setUpdateSongStatus(false);
              setUpdateLyricsStatus(false);
              setViewSellLyricsStatus(false);
              setViewRequestStatus(false);
              setViewUsersStatus(false);
              setViewPurchasesStatus(false);
            }}
          
          >
            Add Sell Lyrics
          </AddSellLyricsBTN>
          <ViewSellLyricsBTN
            onClick={() =>{
              setViewSellLyricsStatus(true);
              setViewSongStatus(false);
              setAddLyricsStatus(false);
              setAddSongStatus(false);
              setUpdateSongStatus(false);
              setUpdateLyricsStatus(false);
              setAddSellLyricsStatus(false);
              setViewRequestStatus(false);
              setViewUsersStatus(false);
              setViewPurchasesStatus(false);
            }}
          
          >
            View Sell Lyrics
          </ViewSellLyricsBTN>

          <ViewRequestBTN
            onClick={() =>{
              setViewRequestStatus(true);
              setViewSellLyricsStatus(false);
              setViewSongStatus(false);
              setAddLyricsStatus(false);
              setAddSongStatus(false);
              setUpdateSongStatus(false);
              setUpdateLyricsStatus(false);
              setAddSellLyricsStatus(false);
              setViewUsersStatus(false);
              setViewPurchasesStatus(false);
            }}
          
          >
            View Request
          </ViewRequestBTN>

          <ViewUsersBTN
            onClick={() =>{
              setViewUsersStatus(true);
              setViewRequestStatus(false);
              setViewSellLyricsStatus(false);
              setViewSongStatus(false);
              setAddLyricsStatus(false);
              setAddSongStatus(false);
              setUpdateSongStatus(false);
              setUpdateLyricsStatus(false);
              setAddSellLyricsStatus(false);
              setViewPurchasesStatus(false);
            }}
          
          >
            View User
          </ViewUsersBTN>

          <ViewPurchasesBTN
            onClick={() =>{
              setViewPurchasesStatus(true);
              setViewUsersStatus(false);
              setViewRequestStatus(false);
              setViewSellLyricsStatus(false);
              setViewSongStatus(false);
              setAddLyricsStatus(false);
              setAddSongStatus(false);
              setUpdateSongStatus(false);
              setUpdateLyricsStatus(false);
              setAddSellLyricsStatus(false);
            }}
          
          >
            View Purchases
          </ViewPurchasesBTN>

          
        <LogoutBtn type="submit" variant="danger" onClick={Logout}>
        Logout
      </LogoutBtn>
        </Header>
<Greeting>

  <ImgWrap>
  <img src = {`../../images/${image}`} alt={`${name}`} />
  </ImgWrap>
  <h1>
  Welcome Back: {name}
  </h1>
  <h2>Your Bal: <span>N</span>  {purchase}</h2>
</Greeting>

        <ContentMain>
     
      <AddSongWrap show = {addSongStatus}  > 
      <AddSong/> 
      </AddSongWrap>

      <AddLyricsWrap show = {addLyricsStatus}  > 
       <AddLyrics/> 
      </AddLyricsWrap>

      <ViewSongsWrap show = {viewSongStatus}  > 
       <ViewSong/> 
      </ViewSongsWrap>

      <UpdateSongsWrap show = {updateSongStatus}  > 
       <UpdateSong/> 
      </UpdateSongsWrap>

      <UpdateLyricsWrap show = {updateLyricsStatus}  > 
       <UpdateLyrics/> 
      </UpdateLyricsWrap>

      <UpdateLyricsWrap show = {addSellLyricsStatus}  > 
       <AddSellLyric/> 
      </UpdateLyricsWrap>

      <UpdateLyricsWrap show = {viewSellLyricsStatus}  > 
       <ViewSellLyrics/> 
      </UpdateLyricsWrap>

      {/* <UpdateSellLyricsWrap show = {updateSellLyricsStatus}  > 
       <UpdateSellLyrics/> 
      </UpdateSellLyricsWrap> */}

      <ViewRequestWrap show = {viewRequestStatus}  > 
       <ViewRequest/> 
      </ViewRequestWrap>

      <ViewUsersWrap show = {viewUsersStatus}  > 
       <ViewUsers/> 
      </ViewUsersWrap>

      <ViewPurchasesWrap show = {viewPurchasesStatus}  > 
       <ViewPurchases/> 
      </ViewPurchasesWrap>

      </ContentMain>

        </>
        
        )}

{!matches && (
          <>
          <HeaderSmall show = {menuStatusSmall}>

            <IconCloseWrap
            
            onClick={() =>{
              setMenuStatusSmall(false);
            
            }}
            >
          <Icon icon="cross" size={20} color="white" />
          </IconCloseWrap>
      

<AddSongBTNSmall
            onClick={() =>{
              setAddSongStatusSmall(true)
              setAddLyricsStatusSmall(false);
              setViewSongStatusSmall(false);
              setMenuStatusSmall(false);
              setUpdateSongStatusSmall(false);
              setUpdateLyricsStatusSmall(false);
              setViewUsersStatusSmall(false);
              setViewSellLyricsStatusSmall(false);
              setViewRequestStatusSmall(false);
              setAddSellLyricsStatusSmall(false);
              setViewPurchasesStatusSmall(false);
            }}
          
          >
            Add Song
          </AddSongBTNSmall>


          <AddLyricsDTNSmall 
            onClick={() =>{
           
              setAddLyricsStatusSmall(true);
              setAddSongStatusSmall(false)
              setViewSongStatusSmall(false);
              setMenuStatusSmall(false);
              setUpdateSongStatusSmall(false);
              setUpdateLyricsStatusSmall(false);
              setViewUsersStatusSmall(false);
              setViewSellLyricsStatusSmall(false);
              setViewRequestStatusSmall(false);
              setAddSellLyricsStatusSmall(false);
              setViewPurchasesStatusSmall(false);
            }}
          
          >
            Add lyrics
          </AddLyricsDTNSmall>

          <ViewSongsBTNSmall 
            onClick={() =>{
              setViewSongStatusSmall(true);
              setAddLyricsStatusSmall(false);
              setAddSongStatusSmall(false)
              setMenuStatusSmall(false);
              setUpdateSongStatusSmall(false);
              setUpdateLyricsStatusSmall(false);
              setViewUsersStatusSmall(false);
              setViewSellLyricsStatusSmall(false);
              setViewRequestStatusSmall(false);
              setAddSellLyricsStatusSmall(false);
              setViewPurchasesStatusSmall(false);
            }}
          
          >
            View Songs
          </ViewSongsBTNSmall>

          <AddSellLyricsBTNSmall
            onClick={() =>{
              setAddSellLyricsStatusSmall(true);
              setViewSongStatusSmall(false);
              setAddLyricsStatusSmall(false);
              setAddSongStatusSmall(false);
              setUpdateSongStatusSmall(false);
              setUpdateLyricsStatusSmall(false);
              setViewSellLyricsStatusSmall(false);
              setViewRequestStatusSmall(false);
              setViewUsersStatusSmall(false);
              setMenuStatusSmall(false);
              setViewPurchasesStatusSmall(false);
            }}
          
          >
            Add Sell Lyrics
          </AddSellLyricsBTNSmall>

          <ViewSellLyricsBTNSmall
            onClick={() =>{
              setViewSellLyricsStatusSmall(true);
              setViewSongStatusSmall(false);
              setAddLyricsStatusSmall(false);
              setAddSongStatusSmall(false);
              setUpdateSongStatusSmall(false);
              setUpdateLyricsStatusSmall(false);
              setAddSellLyricsStatusSmall(false);
              setViewRequestStatusSmall(false);
              setViewUsersStatusSmall(false);
              setMenuStatusSmall(false);
              setViewPurchasesStatusSmall(false);
            }}
          
          >
            View Sell Lyrics
          </ViewSellLyricsBTNSmall>

          <ViewRequestBTNSmall
            onClick={() =>{
              setViewRequestStatusSmall(true);
              setViewSellLyricsStatusSmall(false);
              setViewSongStatusSmall(false);
              setAddLyricsStatusSmall(false);
              setAddSongStatusSmall(false);
              setUpdateSongStatusSmall(false);
              setUpdateLyricsStatusSmall(false);
              setAddSellLyricsStatusSmall(false);
              setViewUsersStatusSmall(false);
              setMenuStatusSmall(false);
              setViewPurchasesStatusSmall(false);
            }}
          
          >
            View Request
          </ViewRequestBTNSmall>

          <ViewUsersBTNSmall
            onClick={() =>{
              setViewUsersStatusSmall(true);
              setViewRequestStatusSmall(false);
              setViewSellLyricsStatusSmall(false);
              setViewSongStatusSmall(false);
              setAddLyricsStatusSmall(false);
              setAddSongStatusSmall(false);
              setUpdateSongStatusSmall(false);
              setUpdateLyricsStatusSmall(false);
              setAddSellLyricsStatusSmall(false);
              setMenuStatusSmall(false);
              setViewPurchasesStatusSmall(false);
            }}
          
          >
            View Users
          </ViewUsersBTNSmall>

          <ViewPurchasesBTNSmall
            onClick={() =>{
              setViewPurchasesStatusSmall(true);
              setViewUsersStatusSmall(false);
              setViewRequestStatusSmall(false);
              setViewSellLyricsStatusSmall(false);
              setViewSongStatusSmall(false);
              setAddLyricsStatusSmall(false);
              setAddSongStatusSmall(false);
              setUpdateSongStatusSmall(false);
              setUpdateLyricsStatusSmall(false);
              setAddSellLyricsStatusSmall(false);
              setMenuStatusSmall(false);
            }}
          
          >
            View Purchases
          </ViewPurchasesBTNSmall>


          <LogoutBtnSmall type="submit" variant="danger" onClick={Logout}>Logout</LogoutBtnSmall>
          </HeaderSmall>

          <GreetingSmall>
          <ImgWrapSmall>
          <img src = {`../../images/${image}`} alt={`${name}`} />
  
                </ImgWrapSmall>
              <h1>Welcome: {name}</h1>
              <>
              <h2>Bal: <span>N</span> {purchase}</h2>
              </>
              <IconOpenWrap
            
            onClick={() =>{
              setMenuStatusSmall(true) ;
            
            }}
            >
          <Icon icon="cross" size={20} color="white" />
          </IconOpenWrap>

</GreetingSmall>

<ContentMainSmall>
      <AddSongWrapSmall show = {addSongStatusSmall} > 
      <AddSong/> 
      </AddSongWrapSmall>

      <AddLyricsWrapSmall show = {addLyricsStatusSmall}  > 
       <AddLyrics/> 
      </AddLyricsWrapSmall>

      <ViewSongsWrapSmall show = {viewSongStatusSmall}  > 
       <ViewSong/> 
      </ViewSongsWrapSmall>


      <UpdateSongsWrapSmall show = {updateSongStatusSmall}  > 
       <UpdateSong/> 
      </UpdateSongsWrapSmall>

      <UpdateLyricsWrapSmall show = {updateLyricsStatusSmall}  > 
       <UpdateLyrics/> 
      </UpdateLyricsWrapSmall>

      <UpdateLyricsWrapSmall show = {addSellLyricsStatusSmall}  > 
       <AddSellLyric/> 
      </UpdateLyricsWrapSmall>

      <UpdateLyricsWrapSmall show = {viewSellLyricsStatusSmall}  > 
       <ViewSellLyrics/> 
      </UpdateLyricsWrapSmall>

      {/* <UpdateSellLyricsWrapSmall show = {updateSellLyricsStatusSmall}  > 
       <UpdateSellLyrics/> 
      </UpdateSellLyricsWrapSmall> */}

      <ViewRequestWrapSmall show = {viewRequestStatusSmall}  > 
       <ViewRequest/> 
      </ViewRequestWrapSmall>


      <ViewUsersWrapSmall show = {viewUsersStatusSmall}  > 
       <ViewUsers/> 
      </ViewUsersWrapSmall>

      <ViewPurchasesWrapSmall show = {viewPurchasesStatusSmall}  > 
       <ViewPurchases/> 
      </ViewPurchasesWrapSmall>


      </ContentMainSmall>
          </>
          )}
      
    </Container>
  );
}


export default TempoxlDashboard;

const Container = styled.div`
width:100%;
height:100%;
overflow-y:hidden;
overflow-x:hidden ;
z-index:1;

background-image: linear-gradient(
  to right top,
  rgb(6, 0, 130),
  rgb(10, 0, 80)
);
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
@media (max-width:820px) {
  width:100%;
  height:100%;
 
}


`
const Header = styled.div`
background:rgb(76, 0, 130);
box-shadow: 0 10px 50px #000;
position:sticky;
top:0;
 z-index:100;
width:90%;
height:12%;
margin-left: 5%;
margin-bottom: 10%;
border-radius: 1%;
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width:820px) {
  width:90%;
  height:10%;

}

`

const Greeting = styled(Header)`

position:absolute;
top:12%;
z-index:2;
margin-left:5%;
width:90%;
color:#fff;
background:rgb(7, 0, 130);
display:flex;
align-items:center;
justify-content:space-around;
text-transform:uppercase;
@media (max-width:820px) {
  width:50%;
  height:10%;

}

span{
  text-decoration: line-through double
}

`
const ImgWrap = styled.div`

width: 6% ;
height: 90%;
margin-left:-8%;
border-radius: 50%;
margin-top: 0%;
img{
  width: 100%;
  height: 100%;
  border-radius: 100%;

}

`

const ContentMain = styled.div`
position:absolute;
top: 24%;
width:90%;
height:540px;
margin-left: 5%;
box-shadow: 0 10px 50px #000;
background:gray;
overflow-y: scroll;
overflow-x: hidden;
z-index:1;
margin-bottom:10%;

`


const AddNameBtn = styled.button`
width:8%
hight:3.5%
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
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};

&:hover{
  opacity:.5;
  transform:scale(1.05);
}
`


const AddSongBTN = styled(AddNameBtn)`


`

const ViewSongsBTN = styled(AddNameBtn)`


`



const LogoutBtn = styled(AddNameBtn)`
margin-right:2%;
background:orangered;
border-radius:15px;
`
const LogoutBtnSmall = styled(AddNameBtn)`
background:orangered;

`



const AddLyricsBTN = styled(AddNameBtn)`


`

const ViewSellLyricsBTN = styled(AddNameBtn)`

border-radius:15px;
`

const ViewRequestBTN = styled(AddNameBtn)`
 
`

const ViewUsersBTN = styled(AddNameBtn)`
 
`

const AddSellLyricsBTN = styled(AddNameBtn)`
 
`

const ViewPurchasesBTN = styled(AddNameBtn)`
 
`


const AdminWrap = styled.div`
width:90%;
transition: all .3s linear;
z-index:30;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`
const AddSongWrap = styled(AdminWrap)`

`

const UpdateSongsWrap = styled(AdminWrap)`

`

const UpdateLyricsWrap = styled(AdminWrap)`

`


const AddLyricsWrap = styled(AdminWrap)`

`
const ViewSongsWrap = styled(AdminWrap)`


`

const ViewRequestWrap = styled(AdminWrap)`

`

const ViewUsersWrap = styled(AdminWrap)`

`

const ViewPurchasesWrap = styled(AdminWrap)`

`






const HeaderSmall = styled.div`
background:rgb(76, 0, 130);
box-shadow: 0 10px 50px #000;
position:absolute;
top:2%;
right:0;
bottom:0;
z-index:100;
width:45%;
height:50%;
border-radius: 1%;
display:flex;
flex-direction:column;
align-items:start;
justify-content:space-around;
transition: all .3s linear;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
`
const IconOpenWrap = styled(MenuIcon)`
position:absolute;
top:20%;
right:4%;
corsor:pointer;
`
const IconCloseWrap = styled(CloseIcon)`
position:absolute;
top:0%;
right:8%;
corsor:pointer;
color:white;
`

const GreetingSmall = styled.div`
position:sticky;
top:0%;
z-index:6;
width:100%;
height:10%;
color:#fff;
background:rgb(7, 0, 130);
display:flex;
align-items:center;
justify-content:space-around;
text-transform:uppercase;

h1{
  margin-left:15%;
  font-size: .8rem; 
}
h2{
  margin-right:8%;
  font-size: .8rem; 
}
span{
  text-decoration: line-through double
}
`
const ImgWrapSmall = styled.div`
position:absolute;
top:4%;
left:2%;
width: 15% ;
height: 90%;
border-radius: 50%;
margin-top: 0%;
img{
  width: 100%;
  height: 100%;
  border-radius: 100%;

}

`

const ContentMainSmall = styled.div`
position:absolute;
top:10%;
left:0;
bottom:5%;
right:5%;
width:96%;
height:550px;
overflow: scroll;
overflow-x: hidden;
margin-left: 2%;
box-shadow: 0 10px 50px #000;
background:gray;
z-index:2;

`

const AddNameBtnSmall = styled.button`
width:8%
hight:3.5%
border-radius:15px;
box-shadow: 0 10px 50px #000;
padding:.9%;
color:#fff;
outline:none;
cursor:pointer;
border:none;
background:blue;
margin-left:1%;
transition: all .3s linear;
transform: ${props => props.show ? 'translateX(120%)': 'translateX(0)'};

&:hover{
  opacity:.5;
  transform:scale(1.05);
}
`


const AddSongBTNSmall = styled(AddNameBtnSmall)`
border-radius:15px;

`
const AddLyricsDTNSmall = styled(AddNameBtnSmall)`

border-radius:15px;
`

const ViewSongsBTNSmall = styled(AddNameBtnSmall)`

border-radius:15px;
`

const ViewSellLyricsBTNSmall = styled(AddNameBtnSmall)`

border-radius:15px;
`

const ViewRequestBTNSmall = styled(AddNameBtnSmall)`

border-radius:15px;
`
const AddSellLyricsBTNSmall = styled(AddNameBtnSmall)`
border-radius:15px;
`

const ViewUsersBTNSmall = styled(AddNameBtnSmall)`
border-radius:15px;
`
const ViewPurchasesBTNSmall = styled(AddNameBtnSmall)`
border-radius:15px;
`




const AdminWrapSmall = styled.div`
width:90%;
transition: all .3s linear;
z-index:30;
position:absolute;
top:10%;
transform: ${props => props.show ? 'translateX(0)': 'translateX(120%)'};
`
const AddSongWrapSmall = styled(AdminWrapSmall)`

`

const AddLyricsWrapSmall = styled(AdminWrapSmall)`
 
`

const UpdateSongsWrapSmall = styled(AdminWrapSmall)`
 
`
const UpdateLyricsWrapSmall = styled(AdminWrapSmall)`
 
`



const ViewSongsWrapSmall = styled(AdminWrapSmall)`
 
`
const ViewRequestWrapSmall = styled(AdminWrapSmall)`

`
const ViewUsersWrapSmall = styled(AdminWrapSmall)`

`

const ViewPurchasesWrapSmall = styled(AdminWrapSmall)`

`



