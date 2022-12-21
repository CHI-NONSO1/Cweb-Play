import React, { useEffect, useState } from 'react'
//import { useNavigate } from 'react-router-dom';

import './CSS/Payment.scss';
import styled from 'styled-components';
import axios from 'axios';

export default function Payments({songi}) {
  const [userRegister,setUserRegister] = useState(false);
  const [songtitle, setSongtitle] = useState('');
  const [song, setSong] = useState('');
  const [artistname, setArtistname] = useState('');
  const [album, setAlbum] = useState('');
  const [releasedAt, setReleasedAt] = useState('');
  const [feature, setFeature] = useState('');
  const [coverart, setCoverart] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [purchase, setPurchase] = useState( );
  const [confirmpassword, setConfirmpassword] = useState('');
  const [transaction_ref, setTransaction_ref] = useState('');
  const [songid, setSongid] = useState('');
  const [userid, setUserid] = useState('' );
  const [transaction, setTransaction] = useState('Transaction')


  useEffect(() =>{
    setTransaction_ref(Math.floor((Math.random() * 1000000000) + 1))
  
  },[])

  const changeTransaction = (newTransaction) => {
    setTransaction(newTransaction)
  }

   /////
   useEffect(() => {
    const timer = setTimeout(() =>{
  if(phoneno){
    
    var phoneNum = document.querySelector('#foneno');
    phoneNum.addEventListener('keypress',getUserDetails)

  }

  function getUserDetails(e){

const GetUserInfo = async () => {
 
  const resp = await axios.get(`http://localhost:8000/user/account/${phoneno}`);
   console.log(resp.data);
    setFirstname(resp.data.firstname)
    setLastname(resp.data.lastname)
     setUserid(resp.data.tempoxluserid);
     setEmail(resp.data.email)
    if(resp.data.tempoxluserid === null){
      //setPhonenoError("Account Not Found")
    }

  }
 
  GetUserInfo()

}

 },100)
 return () =>{
  clearTimeout(timer)
 }

},[transaction,phoneno])


///ProcessTransfer
function procsessTransfer(e){

  e.preventDefault();


  const Transfer = async () => {
    try{
      
    await axios.post('http://localhost:8000/purchase', 
   
      { 
        firstname:firstname,
        lastname:lastname,
        phoneno:phoneno,
        songid: songid, 
        userid: userid, 
        email: email,    
        songtitle: songtitle, 
        transaction_ref:transaction_ref,
        purchase:purchase,
        tempoxluserid:userid, 
        artistname:artistname, 
        feature:feature, 
        album:album,
        song:song,
        coverart:coverart,
        releasedAt:releasedAt,
       
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

const handlepayment = async (e) => {
    e.preventDefault();
 let songid = e.target.id
 
    
    const getSongByID = async () => {
      try {
         
          const song = await axios.get(`http://localhost:8000/song/playlist/${songid}`);
    console.log(song.data);
          setSongtitle(song.data.songtitle);
          setArtistname(song.data.artistname);
          setSong(song.data.song);
          setAlbum(song.data.album);
          setFeature(song.data.feature);
          setReleasedAt(song.data.releasedAt);
          setCoverart(song.data.coverart);
          setPurchase(Number(song.data.price));
          setSongid(song.data.songid);
         
      } catch (error) {
          if (error.res) {
              console.log(error.res);
              
          }
      }
    }
    
    getSongByID()

  
}
/////////--NEW USER--procsessPayment//////////
function procsessPayment(e){
    const registerUser = async () => {
    try{
      
    await axios.post('http://localhost:8000/user', 
   
      { 
        firstname:firstname,
        lastname:lastname,
        phoneno:phoneno,
        email:email,
        password:password,
        confirmpassword:confirmpassword, 
        songid: songid,    
        songtitle: songtitle, 
        transaction_ref:transaction_ref,
        purchase:purchase,
        tempoxluserid:userid,  
        artistname:artistname, 
        feature:feature, 
        album:album,
        song:song,
        coverart:coverart,
        releasedAt:releasedAt
       
    },
    {headers: {
      'content-type': 'application/json',
      "Access-Control-Allow-Origin": "http://localhost:3000"
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
  registerUser()

}
  ///////


  return (
    <RegisterUser  show = {userRegister}>
 
    <div className="wrapper_flexB">
       <div className="h2parent">
           <h2 className="login_header">Choose An Option</h2>
           <button
     className='btn__close'
     onClick={() =>{
       setUserRegister(false);
     }}
    >Close</button>
       </div>
       <form  method="post" encType="application/json">

             <div className="form-group-parent1">
               <div className="form-group "></div>
               
               <div className="input_parent">

               <select 
                 onChange={(event) => changeTransaction(event.target.value)}
                 value={transaction}
                 >
                 <option value="">Select An Option</option>
                 <option value="User">User</option>
                 <option value="NewUser">New User</option>
                 
                 </select>
               </div>
               <div className="help_parent"><span className="help-block"></span></div>
           </div>
           {transaction === 'NewUser' ?(
           <React.Fragment>
           <div className="form-group-parent1">
             <div className="form-group ">
               <span>Price:</span>{purchase}</div>
             
           </div>
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
           <div className="form-group-parent1">
               <div className="form-group "></div>
               
               <div className="input_parent">
               <input
               type="password"
               id='password'
               name="password" 
               placeholder='Password'
               className="form-control"
               autoComplete='none' 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               />
               <label htmlFor='password' className="labText">Password</label>
               </div>
               <div className="help_parent"><span className="help-block"></span></div>
           </div>
           <div className="form-group-parent1">
               <div className="form-group "></div>
               
               <div className="input_parent">
               <input
               type="password"
               id='confirmpassword'
               name="confirmpassword" 
               placeholder='Confirm Password'
               className="form-control"
               autoComplete='none' 
               value={confirmpassword}
               onChange={(e) => setConfirmpassword(e.target.value)}
               />
               <label htmlFor='confirmpassword' className="labText">Confirm Password</label>
               </div>
               <div className="help_parent"><span className="help-block"></span></div>
           </div>
         
</React.Fragment>
 
):(null)}

{transaction === 'User' ? (
 <React.Fragment>

<div className="form-group-parent1">
               <div className="form-group "></div>
               
               <div className="input_parent">
               <input
               type="number"
               id='foneno'
               name="userPhoneno" 
               placeholder='Phonen Number Format->23480'
               className="form-control"
               
               value={phoneno}
               onChange={(e) => setPhoneno(e.target.value)}
               />
               <label htmlFor='userPhoneno' className="labText">Phonen Number</label>
               </div>
               <div className="help_parent"><span className="help-block"></span></div>
           </div>
{phoneno ? (
 <React.Fragment>
   <div className="form-group "><span>Amount to Pay:    </span>{purchase}</div>
           <div className="form-group "><span>Your First Name:  </span>{firstname}</div>
           <div className="form-group "><span>Your Last Name:   </span>{lastname}</div>
 </React.Fragment>
):(null)}
           






       
 </React.Fragment>
):(null)}

   
 <div className="form-group-submit-parent">
   {transaction === 'NewUser' ? (
   <button
   onClick={(e) =>{
     procsessPayment(e)
   }}
    type="submit"
     className="btn_submit"  
        >Process</button>
   ):(
    
       <button className="btn_submit" 
       
       onClick={(e) =>{
         procsessTransfer(e)
       }}
       
       >Pay</button>
      
   )}
 </div>
           
           </form>
           </div>
 </RegisterUser>
  )
}

const RegisterUser = styled.div` 

width:40%;
height:80%;
background:navy;
position:absolute;
top:16%;
left:30%;
transition: all .3s linear;
z-index:100;
//transform: ${props => props.show ? 'translateX(250%)': 'translateX(0)'};
 transform: ${props => props.show ? 'translateX(0)': 'translateX(250%)'};
@media screen and (max-width:820px){
  position:absolute;
  top:18%;
  left:3%;
  width:94%; 
  background:navy;
}
`