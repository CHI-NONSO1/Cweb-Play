import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/SongMain.css';
import './CSS/Payment.scss';
import styled from 'styled-components';
import axios from 'axios';
//import Payments from './Payments';






export default function SongDisplay() {

  const [userRegister,setUserRegister] = useState(false);


  const [songs, setSongs] = useState([]);
  const [lyrics, setLyrics] = useState([]);

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
  





const history = useNavigate()
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
    e.preventDefault()
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
      
    await axios.post('http://localhost:8000/purchase/', 
   
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
    console.log(result);
   if(result){
     history('/userslogin')
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
  e.preventDefault()
    const registerUser = async () => {
    try{
      
   await axios.post('http://localhost:8000/user/', 
   
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
  }).then((res) => {
    console.log(res);
   if(res){
    history('/userslogin')
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

  
useEffect(() => {


  const tymar = setTimeout(() =>{

var prev = document.querySelectorAll(".action__btn--prev");

for(var vp = 0; vp < prev.length; vp++){
var oop = prev[vp];
oop.addEventListener('click',getLyric)
}

function getLyric(e){
var songid = e.target.id

const Lyrics = async () => {
try {
   
    const rics = await axios.get(`http://localhost:8000/lyrics/playone/${songid}`);

    setLyrics(rics.data);
  console.log(rics.data);
   
} catch (error) {
    if (error.res) {
        console.log(error.res);
        
    }
}
}

Lyrics()
}


var u = []

lyrics.map(lic => (
u.push(
  lic.line1,
  lic.line2,
  lic.line3,
  lic.line4,
  lic.line5,
  lic.line6,
  lic.line7,
  lic.line8,
  lic.line9,
  lic.line10,
  lic.line11,
  lic.line12,
  lic.line13,
  lic.line14,
  lic.line15,
  lic.line16,
  lic.line17,
  lic.line18,
  lic.line19,
  lic.line20,
  lic.line21,
  lic.line22,
  lic.line23,
  lic.line24,
  lic.line25,
  lic.line26,
  lic.line27,
  lic.line28,
  lic.line29,
  lic.line30,
  lic.line31,
  lic.line32,
  lic.line33,
  lic.line34,
  lic.line35,
  lic.line36,
  lic.line37,
  lic.line38,
  lic.line39,
  lic.line40,
  lic.line41,
  lic.line42,
  lic.line43,
  lic.line44,
  lic.line45,
  lic.line46,
  lic.line47,
  lic.line48,
  lic.line49,
  lic.line50,
  lic.line51,
  lic.line52,
  lic.line53,
  lic.line54,
  lic.line55,
  lic.line56,
  lic.line57,
  lic.line58,
  lic.line59,
  lic.line60,
  lic.line61,
  lic.line62,
  lic.line63,
  lic.line64,
  lic.line65,
  lic.line66,
  lic.line67,
  lic.line68,
  lic.line69,
  lic.line70,
  )

)

)

console.log(u);

///////////////////////////////////


    // },200)
    // return () =>{
    //   clearTimeout(tymar)
    // }
    
    // },[lyrics,songs])
  

  
  
//  useEffect(()=>{

  var bn = []
  songs.forEach((song,index) => {
    bn.push(song.song)
    
  })
  var source0 = [`/audio/${bn[0]}`]
  let audio0 = new Audio(source0)
  var source1 = [`/audio/${bn[1]}`]
  let audio1 = new Audio(source1)
  var source2 = [`/audio/${bn[2]}`]
  let audio2 = new Audio(source2)
  var source3 = [`/audio/${bn[3]}`]
  let audio3 = new Audio(source3)
  var source4 = [`/audio/${bn[4]}`]
  let audio4 = new Audio(source4)
  var source5 = [`/audio/${bn[5]}`]
  let audio5 = new Audio(source5)
  // var source6 = [`/audio/${bn[6]}`]
  // let audio6 = new Audio(source6)
 

    // const tima = setTimeout(() =>{
var playpu = [...document.querySelectorAll('.action__btn--prev')] 
//var audio = [...document.querySelectorAll('.song__main--audio')]

// document.addEventListener('play', function(e){
//   var audio = [...document.querySelectorAll('.song__main--audio')]
//   for(var m = 0, len = audio.length; m < len; m++) {
// if(audio[m] !== e.target){
//   audio[m].pause()
// }
//   }
// },true)

/////////////////////////////////////////////////////////////////////
// playpu.forEach((item,index)=>(
//   item.addEventListener('click',playMusic)
 
// ))


// function playMusic(e){
//   console.log(e.target.id);
// bn.forEach(aud=>{
//   var source = [`/audio/${aud}`]
//   let audio = new Audio(source)
//   audio.addEventListener('play', function(e){
//     if(audio !== e.target){
//       audio.pause()
//     }else{
//       audio.play();
//     }
//     console.log('ko');
//   },true)
  
  

// })


// }
  
//   document.addEventListener('play', function(e){
//     var audio = [...document.getElementsByTagName('audio')]
//     audio.forEach((audio)=> audio !== e.target && audio.pause());
 
    
//   },true)



    

//////////////////////////////////////////////////////////////////////


var btn0 = playpu[0];
  
btn0.addEventListener('click',play0)

var btn1 = playpu[1];
  
btn1.addEventListener('click',play1)

var btn2 = playpu[2];
  
btn2.addEventListener('click',play2)

var btn3 = playpu[3];
  
btn3.addEventListener('click',play3)

var btn4 = playpu[4];
  
btn4.addEventListener('click',play4)

var btn5 = playpu[5];
  
btn5.addEventListener('click',play5)



function play0(e){
  if (audio0.paused) {
        audio0.play()

        audio1.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
// //----------Lyrics---------------------------------------//
var show__Lyrics = [...document.querySelectorAll(".show__lyrics")];
var showLyrics = show__Lyrics[0];
console.log(showLyrics);
audio0.addEventListener('playing',showText0);
console.log(u);
function showText0(e){

var timer = null;
var index = 0;
function cont(){
  u[index] === undefined ? showLyrics.innerHTML = "Lyrics Loading . . ." :  showLyrics.innerHTML =  u[index];
 

if(index === u.length - 1){
  clearInterval(timer);
}else{
  index++;
}
if(audio0.paused){
  showLyrics.innerHTML =  " ";
}
}
timer = setInterval(cont,4180)
}
// //-----------------------------------------------------//
        audio0.currentTime= 0;
            setInterval(function(){
              if(audio0.currentTime > 41){
                audio0.pause();
                
                  } 
                },200)
              
                 
      }else{
       
        audio0.pause()
      }
}

function play1(e){
  if (audio1.paused) {
        audio1.play()
        audio0.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        
        audio1.currentTime= 0;
            setInterval(function(){
              if(audio1.currentTime > 41){
                audio1.pause();
                  } 
                },200)
              
                 
      }else{
        
        audio1.pause()
      }
}

function play2(e){
  if (audio2.paused) {
        audio2.play()
        audio0.pause()
        audio1.pause()
        audio3.pause()
        audio4.pause()
        audio5.pause()
        
        audio2.currentTime= 0;
            setInterval(function(){
              if(audio2.currentTime > 41){
                audio2.pause();
                  } 
                },200)
              
                 
      }else{
        
        audio2.pause()
      }
}

function play3(e){
  if (audio3.paused) {
        audio3.play()
        audio0.pause()
        audio2.pause()
        audio1.pause()
        audio4.pause()
        audio5.pause()
        audio3.currentTime= 0;
            setInterval(function(){
              if(audio3.currentTime > 41){
                audio3.pause();
                  } 
                },200)
              
                 
      }else{
        
        audio3.pause()
      }
}

function play4(e){
  if (audio4.paused) {
        audio4.play()
        audio0.pause()
        audio2.pause()
        audio3.pause()
        audio1.pause()
        audio5.pause()
        
        audio4.currentTime= 0;
            setInterval(function(){
              if(audio4.currentTime > 41){
                audio4.pause();
                  } 
                },200)
              
                 
      }else{
        
        audio4.pause()
      }
}

function play5(e){
  if (audio5.paused) {
        audio5.play()
        audio0.pause()
        audio2.pause()
        audio3.pause()
        audio4.pause()
        audio1.pause()
        
        audio5.currentTime= 0;
            setInterval(function(){
              if(audio5.currentTime > 41){
                audio5.pause();
                  } 
                },200)
              
                 
      }else{
        
        audio5.pause()
      }
}

/////////////////////////////////////
audio0.addEventListener('loadeddata', function (){
  
  var audmins = Math.floor(audio0.duration / 60);
  var audsec = Math.floor(audio0.duration - audmins * 60)
  var full__length = [...document.querySelectorAll('.full__length')];
  var full_length = full__length[0]
  full_length.innerHTML =  audmins+":"+audsec
})

audio0.ontimeupdate = function(){
  updateTime()
}

function updateTime(){
  var audminsp = Math.floor(audio0.currentTime / 60);
  var audsecp = Math.floor(audio0.currentTime - audminsp * 60)
  var prog__Length = [...document.querySelectorAll('.pro__length')];
  var progLength = prog__Length[0]
  progLength.innerHTML = audminsp+":"+audsecp;

}

audio1.addEventListener('loadeddata', function (){
  
  var audmins = Math.floor(audio1.duration / 60);
  var audsec = Math.floor(audio1.duration - audmins * 60)
  var full__length = [...document.querySelectorAll('.full__length')];
  var full_length = full__length[1]
  full_length.innerHTML =  audmins+":"+audsec
})

audio1.ontimeupdate = function(){
  updateTime1()
}

function updateTime1(){
  var audminsp = Math.floor(audio1.currentTime / 60);
  var audsecp = Math.floor(audio1.currentTime - audminsp * 60)
  var prog__Length = [...document.querySelectorAll('.pro__length')];
  var progLength = prog__Length[1]
  progLength.innerHTML = audminsp+":"+audsecp;

}

audio2.addEventListener('loadeddata', function (){
  
  var audmins = Math.floor(audio2.duration / 60);
  var audsec = Math.floor(audio2.duration - audmins * 60)
  var full__length = [...document.querySelectorAll('.full__length')];
  var full_length = full__length[2]
  full_length.innerHTML =  audmins+":"+audsec
})

audio2.ontimeupdate = function(){
  updateTime2()
}

function updateTime2(){
  var audminsp = Math.floor(audio2.currentTime / 60);
  var audsecp = Math.floor(audio2.currentTime - audminsp * 60)
  var prog__Length = [...document.querySelectorAll('.pro__length')];
  var progLength = prog__Length[2]
  progLength.innerHTML = audminsp+":"+audsecp;

}

audio3.addEventListener('loadeddata', function (){
  
  var audmins = Math.floor(audio3.duration / 60);
  var audsec = Math.floor(audio3.duration - audmins * 60)
  var full__length = [...document.querySelectorAll('.full__length')];
  var full_length = full__length[3]
  full_length.innerHTML =  audmins+":"+audsec
})

audio3.ontimeupdate = function(){
  updateTime3()
}

function updateTime3(){
  var audminsp = Math.floor(audio3.currentTime / 60);
  var audsecp = Math.floor(audio3.currentTime - audminsp * 60)
  var prog__Length = [...document.querySelectorAll('.pro__length')];
  var progLength = prog__Length[3]
  progLength.innerHTML = audminsp+":"+audsecp;

}

audio4.addEventListener('loadeddata', function (){
  
  var audmins = Math.floor(audio4.duration / 60);
  var audsec = Math.floor(audio4.duration - audmins * 60)
  var full__length = [...document.querySelectorAll('.full__length')];
  var full_length = full__length[4]
  full_length.innerHTML =  audmins+":"+audsec
})

audio4.ontimeupdate = function(){
  updateTime4()
}

function updateTime4(){
  var audminsp = Math.floor(audio4.currentTime / 60);
  var audsecp = Math.floor(audio4.currentTime - audminsp * 60)
  var prog__Length = [...document.querySelectorAll('.pro__length')];
  var progLength = prog__Length[4]
  progLength.innerHTML = audminsp+":"+audsecp;

}

audio5.addEventListener('loadeddata', function (){
  
  var audmins = Math.floor(audio5.duration / 60);
  var audsec = Math.floor(audio5.duration - audmins * 60)
  var full__length = [...document.querySelectorAll('.full__length')];
  var full_length = full__length[5]
  full_length.innerHTML =  audmins+":"+audsec
})

audio5.ontimeupdate = function(){
  updateTime5()
}

function updateTime5(){
  var audminsp = Math.floor(audio5.currentTime / 60);
  var audsecp = Math.floor(audio5.currentTime - audminsp * 60)
  var prog__Length = [...document.querySelectorAll('.pro__length')];
  var progLength = prog__Length[5]
  progLength.innerHTML = audminsp+":"+audsecp;

}



var increment;
var timer;
var percent = 0;


audio0.addEventListener("playing", function(_event) {
var duration = _event.target.duration;
advance(duration, audio0);

});
audio0.addEventListener("pause", function(_event) {
clearTimeout(timer);
});

var advance = function(duration, element) {
var prog = [...document.querySelectorAll(".progress")];
var progress = prog[0];
increment = 10/duration
percent = Math.min(increment * element.currentTime * 10, 100);
progress.style.width = percent+'%'
startTimer(duration, element);
}

var startTimer = function(duration, element){ 
  if(percent < 100) {
  timer = setTimeout(function (){advance(duration, element)}, 100);
  }
  }
//------------------Audio1//---------------------------
audio1.addEventListener("playing", function(_event) {
  var duration1 = _event.target.duration;
  advance1(duration1, audio1);
  
  });
  audio1.addEventListener("pause", function(_event) {
  clearTimeout(timer);
  });
  
  var advance1 = function(duration1, element1) {
  var prog = [...document.querySelectorAll(".progress")];
  var progress1 = prog[1];
  increment = 10/duration1
  percent = Math.min(increment * element1.currentTime * 10, 100);
  progress1.style.width = percent+'%'
  startTimer1(duration1, element1);
  }


var startTimer1 = function(duration1, element1){ 
if(percent < 100) {
timer = setTimeout(function (){advance1(duration1, element1)}, 100);
}
}

//------------------Audio2//---------------------------
audio2.addEventListener("playing", function(_event) {
  var duration2 = _event.target.duration;
  advance2(duration2, audio2);
  
  });
  audio2.addEventListener("pause", function(_event) {
  clearTimeout(timer);
  });
  
  var advance2 = function(duration2, element2) {
  var prog = [...document.querySelectorAll(".progress")];
  var progress2 = prog[2];
  increment = 10/duration2
  percent = Math.min(increment * element2.currentTime * 10, 100);
  progress2.style.width = percent+'%'
  startTimer2(duration2, element2);
  }


var startTimer2 = function(duration2, element2){ 
if(percent < 100) {
timer = setTimeout(function (){advance2(duration2, element2)}, 100);
}
}

//------------------Audio3//---------------------------

audio3.addEventListener("playing", function(_event) {
  var duration3 = _event.target.duration;
  advance3(duration3, audio3);
  
  });
  audio3.addEventListener("pause", function(_event) {
  clearTimeout(timer);
  });
  
  var advance3 = function(duration3, element3) {
  var prog = [...document.querySelectorAll(".progress")];
  var progress3 = prog[3];
  increment = 10/duration3
  percent = Math.min(increment * element3.currentTime * 10, 100);
  progress3.style.width = percent+'%'
  startTimer3(duration3, element3);
  }


var startTimer3 = function(duration3, element3){ 
if(percent < 100) {
timer = setTimeout(function (){advance3(duration3, element3)}, 100);
}
}

//------------------Audio4//---------------------------

audio4.addEventListener("playing", function(_event) {
  var duration4 = _event.target.duration;
  advance4(duration4, audio4);
  
  });
  audio4.addEventListener("pause", function(_event) {
  clearTimeout(timer);
  });
  
  var advance4 = function(duration4, element4) {
  var prog = [...document.querySelectorAll(".progress")];
  var progress4 = prog[4];
  increment = 10/duration4
  percent = Math.min(increment * element4.currentTime * 10, 100);
  progress4.style.width = percent+'%'
  startTimer4(duration4, element4);
  }


var startTimer4 = function(duration4, element4){ 
if(percent < 100) {
timer = setTimeout(function (){advance4(duration4, element4)}, 100);
}
}

//------------------Audio5//---------------------------
audio5.addEventListener("playing", function(_event) {
  var duration5 = _event.target.duration;
  advance5(duration5, audio5);
  
  });
  audio5.addEventListener("pause", function(_event) {
  clearTimeout(timer);
  });
  
  var advance5 = function(duration5, element5) {
  var prog = [...document.querySelectorAll(".progress")];
  var progress5 = prog[5];
  increment = 10/duration5
  percent = Math.min(increment * element5.currentTime * 10, 100);
  progress5.style.width = percent+'%'
  startTimer5(duration5, element5);
  }


var startTimer5 = function(duration5, element5){ 
if(percent < 100) {
timer = setTimeout(function (){advance5(duration5, element5)}, 100);
}
}

//------------------Audio6//---------------------------

var lume = [...document.querySelectorAll('.volume__control')]

var vol0  = lume[0];
vol0.addEventListener("change", drag0)

function drag0(e){
audio0.vol0 = e.currentTarget.value / 100;

}
},200)
return () =>{
  clearTimeout(tymar)
}

},[songs])



  

  return (
    <React.Fragment>
      {/*  */}
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
      onClick={(e) =>{procsessPayment(e)}} type="submit" className="btn_submit">
      Process
      </button>
   ):(
    
      <button type="submit" className="btn_submit" 
        onClick={(e) =>{procsessTransfer(e)}}>
          Pay
        </button>
      
   )}
 </div>
           
           </form>
           </div> 
           
 </RegisterUser>
      {/*  */}
    <div className='song__container--main-flex' >
    {!songs ? 
    <div className='song__main--box'>{"Load . . ."}</div>
    :songs.map((song,index) =>(
      <React.Fragment key={song.songid}>
 <div className='song__main--box'>
 <div className='add_to-playlist'>
 <span className='amonut'><span className='price'>N</span>{song.price}</span>
   
   </div>
   <div className='songDom' id="song__cover-main">
     <img src={`/audio/${song.coverart}`} className='song__image-cover-main' alt='ImageCover'/>
   </div>
   <div className='song__title-main'>
   <span className='title-main'>{song.songtitle}</span>
   </div>
   <div className='song__artist-main'>
   {song.feature ? 
      <React.Fragment>
       <span className='artist__menu--Name'>{song.artistname}</span> <span>:</span>
       <span className='artist__menu--feature'>{song.feature}</span>
       </React.Fragment>
       :
       <span className='artist__menu--Name'>{song.artistname}</span>
      }
   </div>
   <div id="lyrics-main-dis">
     <span className='show__lyrics' id = {song.songid}>
     
     </span>
   </div>

   <div className='song_item-main'>
     <audio    controlsList='nodownload' preload='metadata' className='song__main--audio' id = {song.songid}>
     <source className='song__main--source' src={`/audio/${song.song}`} type="audio/mpeg"/>
     </audio> 
     </div>

     <div className='vol_timer'>
       <div className='volum'>
       <input type= "range"
       className='volume__control'
         id ='volume__control'
         min= {0}  max={100}/>
       </div>
       <div className='time__duration'>
         <span className='pro__length' id ='prolength'></span>/
         <span className='full__length'></span>
         </div>
       </div>

     <div className="progress" id="progress"></div>
     <div className='song_prev_song_buy-main'>
     <button className='action__btn--prev'  id = {song.songid}>Preview</button>
     {/* <button className='action__btn--prev' onClick={(e) => playAudio(e,index)} itemID = {song.songid}   id = {index}>Prev</button> */}
     <button
     id = {song.songid}
      className='action__btn--buy'
      onClick={(e) =>{
        setUserRegister(true);
        
        handlepayment(e)
      }}
     >Buy</button>
    
    </div>

 </div>

      </React.Fragment>
     
    ))}
 </div>
 

 

  </React.Fragment>
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

