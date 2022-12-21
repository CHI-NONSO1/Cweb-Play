import React, { useEffect, useState } from 'react'
import "./CSS/MusicPlay.scss"
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import jwt_decode from "jwt-decode";


export default function MusicPlay() {

  const [songs, setSongs] = useState([]);
  const [lyrics, setLyrics] = useState([]);
  const [song, setSong] = useState('');
  const [songtitle, setSongtitle] = useState('');
  const [feature, setFeature] = useState('');
  const [coverart, setCoverart] = useState('');
  const [artistname, setArtistname] = useState('');
  const [songid, setSongid] = useState('');
  const [usertoken, setUsertoken] = useState('');
  const [expire, setExpire] = useState('');
  const [tempoxluserid, setTempoxluserid] = useState('');


  const history = useNavigate();



  useEffect(() =>{


    const userToken = async () => {
      try {
          
        const res = await axios.get('http://localhost:8000/user/usertoken');
          setUsertoken(res.data.accToken);
          const userDecoded = jwt_decode(res.data.accToken);
          setTempoxluserid(userDecoded.tempoxluserId);
         
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
           setTempoxluserid(decoded.tempoxluserId);
            setExpire(decoded.exp);
        }
        return configu;
    }, (error) => {
        return Promise.reject(error);
    });
    
    
    userToken()




 


    const SongsByUserID = async () => {
      try {
         
          const hist = await axios.get(`http://localhost:8000/playlist/tempoxluser/${tempoxluserid}`);
          
          setSongs(hist.data);
        
         
      } catch (error) {
          if (error.res) {
              
              
          }
      }
    }
   
    
    
    SongsByUserID()

  },[expire,usertoken,history,tempoxluserid])



function getSongAndLyrics(e){

  e.preventDefault();
var songID = e.target.id

const SongsByID = async () => {
  try {
     
      const hist = await axios.get(`http://localhost:8000/song/playlist/${songID}`);
      
      setSongs([hist.data]);
      setSong(hist.data.song);
      setSongtitle(hist.data.songtitle);
      setFeature(hist.data.feature);
      setCoverart(hist.data.coverart);
      setArtistname(hist.data.artistname);
      setSongid(hist.data.songid);
    
     
  } catch (error) {
      if (error.res) {
          
          
      }
  }
}
SongsByID()






const Lyrics = async () => {
  try {
     
      const rics = await axios.get(`http://localhost:8000/lyrics/playone/${songID}`);

      setLyrics(rics.data);
     
  } catch (error) {
      if (error.res) {
          console.log(error.res);
          
      }
  }
}



Lyrics()
}


	useEffect(() =>{
    const timer = setTimeout(() =>{

    var showLyrics = document.getElementById("show_lyrics");

  var u = []
  
  lyrics.map((lic) =>(
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
//-----------------------------//
var increment;
var tima;
var percent = 0;


var sour  =  [`/audio/${song}`];
var audio = new Audio(sour)


audio.addEventListener('playing',showText)

function showText(){
var timer = null;
var index = 0
function cont(){
  u[index] === undefined ? showLyrics.innerHTML = "Lyrics Loading . . ." :  showLyrics.innerHTML =  u[index];
    
  if(index === u.length - 1){
    clearInterval(timer);
  }else{
    index++;
  }
  if(audio.paused){
    //clearInterval(timer);
    showLyrics.innerHTML =  " ";
  }
}
timer = setInterval(cont,4180)
}


audio.addEventListener("playing", function(_event) {
  var duration = _event.target.duration;
  advance(duration, audio);
  
});
audio.addEventListener("pause", function(_event) {
  clearTimeout(tima);
});
var advance = function(duration, element) {
  var progress = document.getElementById("progress");
  increment = 10/duration
  percent = Math.min(increment * element.currentTime * 10, 100);
  progress.style.width = percent+'%'
  startTimer(duration, element);
}
var startTimer = function(duration, element){ 
  if(percent < 100) {
    tima = setTimeout(function (){advance(duration, element)}, 100);
  }
}
var playZ = document.getElementById("playbtn");
playZ.addEventListener("click", playSongZ)

function playSongZ (e) {
  
  e = e || window.event;
  var btn = e.target;
  if (audio.paused) {
    btn.classList.add('active');
    audio.play();
    console.log(btn.classList);
   
  } else {
    audio.pause();
  
    btn.classList.remove('active');
   console.log(btn.classList);
    
  }
}
audio.addEventListener('ended',function(e){
  var bt = e.target;
  bt.classList.remove('active');
})
audio.onended = function(e){
  var bt = e.target;
  bt.classList.remove('active');
}


audio.addEventListener('loadeddata', function (){
  
  var audmins = Math.floor(audio.duration / 60);
  var audsec = Math.floor(audio.duration - audmins * 60)
  var fulllength = document.getElementById('fulllength');
  fulllength.innerHTML =  audmins+":"+audsec
})



  audio.ontimeupdate = function(){
    updateTime()
  }

  function updateTime(){
    var audminsp = Math.floor(audio.currentTime / 60);
    var audsecp = Math.floor(audio.currentTime - audminsp * 60)
    var progLength = document.getElementById('prolength');
    progLength.innerHTML = audminsp+":"+audsecp;
    
    
  }

const vol = document.getElementById('volume__control')
vol.addEventListener( "change", drag)
  function drag(e){
    var audio = document.getElementById("audio-1");
    audio.vol = e.currentTarget.value / 100;
    
  }


},200)
return () =>{
  clearTimeout(timer)
}

  },[lyrics,song])


  return (
    
    <React.Fragment>
     {!song ?
      <div className='song_item-playlist'>
        <div className='empty'>
        { "Loading ..."}
        { "Or"}
        <p>Select From Your Play List or Buy A Song </p>
        </div>
    </div>


     :
     <div className='song_item-playlist' key={songid}>
     <div id="song__cover" >
         <img src={`/audio/${coverart}`} className='song__image-cover' alt='ImageCover'/>
       </div>
       <div className='song__title'  >
       <span className='title'>{songtitle}</span>
       </div>

       <div className='song__artist' >
        <span className='artist__Name'>{artistname}</span>:
        <span className='artist__feature'>{feature}</span>
       </div>


       <div className='song__container'  >
         <audio  src= {`/audio/${song.song}`} controlsList='nodownload' type="audio/mpeg"   id="audio-1" poster = {`/audio/${coverart}`}/>
       
       </div>
       <div className='playerbtn'>
       <button   className="togglePlay" id='playbtn'>Play/Pause</button>
       </div>
       
       <div id="lyrics">
         <span id = "show_lyrics">
         
         </span>
       </div>

       <div className='vol_timer__mp'>
           <div className='volume'>
           <input type= "range"
           className='volume__control'
             id ='volume__control'
             min= {0}  max={100}/>
           </div>
           <div className='duration'><span id ='prolength'></span>/<span id ='fulllength'></span></div>
           </div>
       
       <div className="progress" id="progress"></div>

     </div>
     
     }
       

        

      
     
       <div className = 'playlist__menu-cont'>
    <div className = 'playlist__menu--wrap'>
      {!songs ? 
      <div className='menu__itemss'>
      {
        <>
      {"Your Playlist is empty!" }
      <Link className='buylink' to={"/"}>Buy songs here</Link>
      </>
      }
      </div>
    :
   
     songs.map((item,index) =>(
      
      <React.Fragment key={item.songid}>
      
      <div className='menu__itemss' id={item.songid}>
      <img className='imgmenu' src= {`/audio/${item.coverart}`} alt ={ `${item.songtitle}`}/>
   
  
    <div className='song__menu--artist' >
    <div className='song__menu--title'  >
    <span className='title'>{item.songtitle}</span>
    </div>
    <div className='song__menu--artist-item' >
      {item.feature ? 
      <React.Fragment>
       <span className='artist__menu--Name'>{item.artistname}</span> <span>:</span>
       <span className='artist__menu--feature'>{item.feature}</span>
       </React.Fragment>
       :
       <span className='artist__menu--Name'>{item.artistname}</span>
      }
    
     </div>

     <div className='playbtn' id={item.songid} >
      <button className='btnPlay' id={item.songid} 
      onClick={(e) =>{
        getSongAndLyrics(e)
      }}
      
      >Play</button>
    </div>
    </div>
  
  
    <div className='song__menu--container'  >
      <audio  src= {`/audio/${item.song}`} controlsList='nodownload'   id="audio-1" poster = {`/audio/${item.coverart}`}/>
    
    </div>
   
    </div>
   
    </React.Fragment>
    ))
   
    
    }
 </div>
    </div>
        
      
    </React.Fragment>

  )
  
}
