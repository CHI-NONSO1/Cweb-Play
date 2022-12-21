import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../CSS/ViewSong.scss';
import { Link } from 'react-router-dom';


export default function ViewSong() {

  const [songs, setSongs] = useState([]);
const [lyrics, setLyrics] = useState([]);
const [token, setToken] = useState(" ");
const [songid, setSongid] = useState('');


useEffect(() =>{
  console.log(songid);
  const edit = localStorage.getItem('Admintoken');
  setToken(edit);



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

  const Lyrics = async () => {
    try {
       
        const rics = await axios.get(`http://localhost:8000/lyrics/playone/${songid}`);
        
        setLyrics(rics.data);
      console.log(rics.data);
       
    } catch (error) {
        if (error.res) {
            
            
        }
    }
  }
 
  
  
  Lyrics()

},[songid])



const deleteSong = async (songid) => {
  await axios.delete(`http://localhost:8000/song/${songid}`);

  const getSongs = async () => {
    try {
          await axios.get(`http://localhost:8000/song/songs`)   
    .then(res => setSongs(res.data))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getSongs()
}


useEffect(()=>{
  
  const timer = setTimeout(() =>{

var u = []
lyrics.map((lic) => (
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



var sound = document.querySelectorAll(".audio__songs")
var sound0 = sound[0];
var sound1 = sound[1];
var sound2 = sound[2];
var sound3 = sound[3];
var sound4 = sound[4];
var sound5 = sound[5];


var showLyrics = [...document.querySelectorAll(".show_lyrics")];
var showLyrics0 = showLyrics[0];
var showLyrics1 = showLyrics[1];
var showLyrics2 = showLyrics[2];
var showLyrics3 = showLyrics[3];
var showLyrics4 = showLyrics[4];
var showLyrics5 = showLyrics[5];
//------audio0-----------//
sound0.addEventListener('playing',showText0)
function showText0(){
var timer = null;
var index = 0
console.log(u);
function cont0(){
  console.log(u);
    showLyrics0.innerHTML =  u[index];
  if(index === u.length - 1){
    clearInterval(timer);
  }else{
    index++;
  }
  if(sound0.paused){
    showLyrics0.innerHTML =  " ";
  }
}
timer = setInterval(cont0,9800)
} 
//------audio1-----------//
sound1.addEventListener('playing',showText1)
function showText1(){
var timer = null;
var index = 0
function cont1(){
  console.log(u);
    showLyrics1.innerHTML =  u[index];
  if(index === u.length - 1){
    clearInterval(timer);
  }else{
    index++;
  }
  if(sound1.paused){
    showLyrics1.innerHTML =  " ";
  }
}
timer = setInterval(cont1,9800)
}
//-------audio2-------------///
sound2.addEventListener('playing',showText2)
function showText2(){
var timer = null;
var index = 0
function cont2(){
  console.log(u);
    showLyrics2.innerHTML =  u[index];
  if(index === u.length - 1){
    clearInterval(timer);
  }else{
    index++;
  }
  if(sound2.paused){
    showLyrics2.innerHTML =  " ";
  }
}
timer = setInterval(cont2,9800)
}
//-------audio3-------------///
sound3.addEventListener('playing',showText3)
function showText3(){
var timer = null;
var index = 0
function cont3(){
  console.log(u);
    showLyrics3.innerHTML =  u[index];
  if(index === u.length - 1){
    clearInterval(timer);
  }else{
    index++;
  }
  if(sound3.paused){ 
    showLyrics3.innerHTML =  " ";
  }
}
timer = setInterval(cont3,9800)
}

//-------audio4-------------///
sound4.addEventListener('playing',showText4)
function showText4(){
var timer = null;
var index = 0
function cont4(){
  console.log(u);
    showLyrics4.innerHTML =  u[index];
  if(index === u.length - 1){
    clearInterval(timer);
  }else{
    index++;
  }
  if(sound4.paused){
    showLyrics4.innerHTML =  " ";
  }
}
timer = setInterval(cont4,9800)
}
//-------audio4-------------///
sound5.addEventListener('playing',showText5)
function showText5(){
var timer = null;
var index = 0
function cont5(){
  console.log(u);
    showLyrics5.innerHTML =  u[index];
  if(index === u.length - 1){
    clearInterval(timer);
  }else{
    index++;
  }
  if(sound5.paused){
    showLyrics5.innerHTML =  " ";
  }
}
timer = setInterval(cont5,9800)
}
//-----------------------------------//
},500)
return () =>{
 clearTimeout(timer)
}

},[lyrics])

useEffect(()=>{
const tima = setTimeout(() =>{
var songsmain = [...document.getElementsByTagName('audio')];

var audio0 = songsmain[0];
var audio1 = songsmain[1];
var audio2 = songsmain[2];
var audio3 = songsmain[3];
var audio4 = songsmain[4];
var audio5 = songsmain[5];

audio0.onplay = function(e){ 
  setSongid(e.target.id)
    audio0.play()
    audio1.pause()
    audio2.pause()
    audio3.pause()
    audio4.pause()
    audio5.pause()
}

audio1.onplay = function(e){
  setSongid(e.target.id)
    audio1.play()
    audio0.pause()
    audio2.pause()
    audio3.pause()
    audio4.pause()
    audio5.pause()
}
audio2.onplay = function(e){
  setSongid(e.target.id)
  audio2.play()
  audio0.pause()
  audio1.pause()
  audio3.pause()
  audio4.pause()
  audio5.pause()
}
audio3.onplay = function(e){
  setSongid(e.target.id)
  audio3.play()
  audio0.pause()
  audio1.pause()
  audio2.pause()
  audio4.pause()
  audio5.pause()
}
audio4.onplay = function(e){
  setSongid(e.target.id)
  audio4.play()
  audio0.pause()
  audio1.pause()
  audio2.pause()
  audio3.pause()
  audio5.pause()
}
audio5.onplay = function(e){
  setSongid(e.target.id)
  audio5.play()
  audio0.pause()
  audio1.pause()
  audio2.pause()
  audio3.pause()
  audio4.pause()
 
}

},500)
return () =>{
  clearTimeout(tima)
}

},[])
  return (
    <div className='song__container__view--flex'>
      
         {!songs ?
         <div className='song__main-box'>
         { 'Loading . . .'}
         </div>
         : songs.map((song) =>(
           <React.Fragment key={song.songid}>
      <div className='song__main-box'>
      
        <div id="song__cover-main">
          <img src={`/audio/${song.coverart}`} className='song__image-cover-main' alt='ImageCover'/>
        </div>
        <div className='song__title-main'>
        <span className='title-main'>{song.songtitle}</span>
        </div>
        <div className='song__artist-main'>
         <span className='artist__Name'>{song.artistname}</span>|
         <span className='artist__feature'>{song.feature}</span>
        </div>
        <div id="lyrics-main">
          <span className = "show_lyrics">
          
          </span>
        </div>

        <div className='song_item-main' key={song.songid}>
          <audio controls className='audio__songs'  controlsList='nodownload' id= {`${song.songid}`}>
          <source src={`/audio/${song.song}`} type="audio/mpeg"/>
          </audio> 
          </div>
          <div className='purchase'>
          <span><span className='price'>N</span>{song.price}</span>
          </div>
          <div className='edit__delete'>
     
          {token?(
            <>
          <span>
          <Link
          to={`/admindashboard/song/${song.songid}`} 
          className="btn_edit">Edit Song</Link>
          </span>
          <span>
          <button onClick={ () => deleteSong(song.songid) } 
          className="btn_del">Del Song</button>
          </span>
          </>

          ):( null)
        
        }
          
      
      

      
     
       
      

          </div>
          

      </div>
           </React.Fragment>
          
         ))}
         
      </div>
  
  )
}
