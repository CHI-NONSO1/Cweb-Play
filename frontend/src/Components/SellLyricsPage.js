
import './CSS/SellLyricsPage.scss';
import React, { useEffect, useState } from 'react';
import './CSS/Payment.scss';
import styled from 'styled-components';
import axios from 'axios';



export default function SellLyricsPage() {

  const [userRegister,setUserRegister] = useState(false);


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [selllyrics, setSellLyrics] = useState([]);
  const [purchase, setPurchase] = useState('');
  const [buylyricsid, setBuylyricsid] = useState('');
  const [lyricsname, setLyricsname] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [transaction_ref, setTransaction_ref] = useState('');


  useEffect(() =>{

    const BuyLyrics = async () => {
      try {
         
          const hist = await axios.get('http://localhost:8000/buylyrics/buylyricall');
          
          setSellLyrics(hist.data);
          
         
      } catch (error) {
          if (error.res) {
              
              
          }
      }
    }
  
    
    
    BuyLyrics()


    setTransaction_ref(Math.floor((Math.random() * 1000000000) + 1))
  
  },[])


  const handlepayment = async (e) => {
    e.preventDefault();
 let buylyricsid = e.target.id
 
    
    const getBuyLyricsByID = async () => {
      try {
         
          const lyrics = await axios.get(`http://localhost:8000/buylyrics/one/${buylyricsid}`);
    console.log(lyrics.data);
          setLyricsname(lyrics.data.lyricsname);
          setBuylyricsid(lyrics.data.buylyricsid);
          setPurchase(Number(lyrics.data.purchase));
          
         
      } catch (error) {
          if (error.res) {
              console.log(error.res);
              
          }
      }
    }
    
    getBuyLyricsByID()

  
}

///ProcessTransfer
function procsessTransfer(e){
  const Transfer = async () => {
    try{
      
    await axios.post('http://localhost:8000/purchase', 
   
      { 
        firstname:firstname,
        lastname:lastname,
        phoneno:phoneno,
        buylyricsid: buylyricsid, 
        lyricsname: lyricsname,    
        email: email, 
        transaction_ref:transaction_ref,
        purchase:purchase 
       
    },
    {headers: {
      'content-type': 'application/json',
      "Access-Control-Allow-Origin": "http://localhost:3000",
    }
  }).then((result) => {
   if(result){
     //history('/userslogin')
   }
    })
    
    }catch (error)  {
    if(error){
      console.log(error);
    }
    }
  }
  Transfer()
}

///////





  
  return (
    <>
    <div className='sell__lyrics'>
    {selllyrics ?
    <div className='lyrics__main--box'>
     {"Loading . . ."}
     </div>
     : selllyrics.map((sell,index) =>(
      <div className='lyrics__main--box'>
  <h2>{sell.lyricsname}</h2>
  <div className='lyrics__wrap'>
<p>{sell.line1}</p>
<p>{sell.line2}</p>
<p>{sell.line3}</p>
<p>{sell.line4}</p>
<p>{sell.line5}</p>
</div>
<div className='actnow'>
<div className='pricetag'>
  <span className='pric'>N</span><span>{sell.purchase}</span> 
  </div>
<button
 onClick={(e) =>{
  setUserRegister(true);
  
  handlepayment(e)
}}
className='buybtn'
id = {sell.buylyricsid}
>Buy</button>
</div>
</div>

    ))}
    
</div>

<RegisterUser  show = {userRegister}>
  <button className='btn__buy'>Pay</button>

  <button
      className='btn__close'
      onClick={() =>{
        setUserRegister(false);
      }}
     >Close</button>

<div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Enter Your Details To Pay</h2>
        </div>
        <form  method="post" encType="multipart/form-data">
        <div className="form-group "><span>Amount to Pay:    </span>{purchase}</div>
            <div className="form-group "><span>Lyrics Name:  </span>{lyricsname}</div>
            

        <div className="form-group-parent1">

<div className="form-group "></div>

<div className="input_parent">
<input
type="text"
id='firstname'
name="firstname" 
placeholder='First Name'
className="form-control" 
value={firstname}
onChange={(e) => setFirstname(e.target.value)}
/>
<label htmlFor='firstname' className="labText">First Name</label>
</div>
<div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
<div className="form-group "></div>

<div className="input_parent">
<input
type="text"
id='lastname'
name="lastname" 
placeholder='Last Name'
className="form-control" 
value={lastname}
onChange={(e) => setLastname(e.target.value)}
/>
<label htmlFor='lastname' className="labText">Last Name</label>
</div>
<div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
<div className="form-group "></div>

<div className="input_parent">
<input
type="email"
id='email'
name="email" 
placeholder='Email'
className="form-control" 
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<label htmlFor='email' className="labText">Email</label>
</div>
<div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
<div className="form-group "></div>

<div className="input_parent">
<input
type="number"
id='phoneno'
name="phoneno" 
placeholder='Phone Number'
className="form-control" 
value={phoneno}
onChange={(e) => setPhoneno(e.target.value)}
/>
<label htmlFor='phoneno' className="labText">Phonen Number</label>
</div>
<div className="help_parent"><span className="help-block"></span></div>
</div>


<div className="form-group-submit-parent">
    
  <button className="btn_submit" 
        
        onClick={(e) =>{
          procsessTransfer(e)
        }}
        
        >Pay</button>
       
    
  </div>
            
            </form>
            </div>
  </RegisterUser>
  </>
    

  )
}

const RegisterUser = styled.div` 

width:40%;
height:80%;
background:navy;
position:absolute;
top:6%;
left:30%;
z-index:20;
transition: all .3s linear;
//transform: ${props => props.show ? 'translateX(100%)': 'translateX(0)'};
 transform: ${props => props.show ? 'translateX(0)': 'translateX(250%)'};
@media screen and (max-width:820px){
  position:absolute;
  top:5%;
  left:3%;
  width:94%; 
  background:navy;
}
`

