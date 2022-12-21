import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './CSS/SongMain.css';
//import './CSS/Player.scss';
import axios from 'axios';

export default function SongMain() {

const [songs, setSongs] = useState([]);
const [lyrics, setLyrics] = useState([]);



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





songs.forEach((song,index) => {
  var source = [`/audio/${song.song}`]
var audio = new Audio(source,index)
  




  // var playPauseBtn = [...document.querySelectorAll(".action__btn--prev")];
  // playPauseBtn.forEach((play, index) =>{
  // var  btnPlayPause = play
  
  //   //btnPlayPause.addEventListener('click',playAudio)
  
  // })






  function playAudio(e){
console.log(e.target.index);
  if(audio.paused && index === 0 ){
    audio.play()
    audio.currentTime= 0;
       
        setInterval(function(){
          if(audio.currentTime > 41){
            audio.pause();
              }
            },200);   
        
  }else{
    audio.pause()
    }
    if(audio.paused && index === 5 ){
      audio.play()
      audio.currentTime= 0;
         
          setInterval(function(){
            if(audio.currentTime > 41){
              audio.pause();
                }
              },200);   
          
    }else{
      audio.pause()
      }
  }
})




useEffect(()=>{

//const timer = setTimeout(() =>{
  //var sound1 = new Audio()
  
  
//   let sound1 = ""
//   let x = []
//   let music = [...document.querySelectorAll(".song__main--audio")];

//   music.forEach(g =>{
//     sound1 = g
//     x.push(parseFloat(sound1.duration / 60).toFixed(2))
    
//   })
 
//   console.log(x);




//   let fulllength
//   let full__length = [...document.querySelectorAll('.full__length')]
  
//   full__length.forEach((fl,index )=>{
//      fulllength = fl
  
//   })
 
 
//   let ful = ''
//   x.forEach(ju =>{
//     ful = ju
//     fulllength.innerHTML = ju
//     console.log(fulllength.innerHTML = ful);
   
//   })

 
  
// //   var full__length = document.querySelectorAll('.full__length')
  
// //   var fulllength = ""
// //   for(var f = 0; f < full__length.length; f++){
    
// //      fulllength = full__length[f] 
// //      console.log(fulllength);
// //   }
// //   var fulllengz  = parseFloat(sound1.duration / 60).toFixed(2);
// //      fulllength.innerHTML = fulllengz
// // console.log(fulllength.innerHTML);
 
 
    
// var soundplay1 = document.querySelectorAll(".action__btn--prev");
    
// for(var i = 0; i < soundplay1.length; i++){
//   var btnp = soundplay1[i];
//   btnp.addEventListener('click',play1)
// }



//     function play1(e){
// console.log(e.target);
//     if(sound1.paused){
//       sound1.play()
//       sound1.currentTime= 0;
         
//           setInterval(function(){
//             if(sound1.currentTime > 41){
//               sound1.pause();
//                 }
//               },200);   
          
//     }else{
//       sound1.pause()
//       }
//     }

 
 
  

//     sound1.ontimeupdate = function(){
//       updateTime()
//     }

//     function updateTime(){
//       var prog__Length = document.querySelectorAll('.pro__length')
//       for(var p = 0; p < prog__Length.length; p++){
//         var progLength = prog__Length[p];
//         progLength.innerHTML = parseFloat(sound1.currentTime / 60).toFixed(2);
//       }
       
     
//     }

// var increment;
// var timer;
// var percent = 0;


// var aud = document.querySelectorAll(".song__main--audio");
// for(var a = 0; a < aud.length; a++){
//   var audio = aud[a]
 
// }


// audio.addEventListener("playing", function(_event) {
//   var duration = _event.target.duration;
//   advance(duration, audio);
  
// });
// audio.addEventListener("pause", function(_event) {
//   clearTimeout(timer);
// });
// var advance = function(duration, element) {
//   var prog = document.querySelectorAll(".progress");
// for(var pr = 0; pr < prog.length; pr++){
//   var progress = prog[pr];
//   increment = 10/duration
//   percent = Math.min(increment * element.currentTime * 10, 100);
//   progress.style.width = percent+'%'
  
// }

 
// startTimer(duration, element);
// }
// var startTimer = function(duration, element){ 
//   if(percent < 100) {
//     timer = setTimeout(function (){advance(duration, element)}, 100);
//   }
// }
// var lume = document.querySelectorAll('.volume__control')
// for(var v = 0; v < lume.length; v++){
//   var vol  = lume[v];
//   vol.addEventListener("change", drag)
// }

//   function drag(e){
//     sound1.vol = e.currentTarget.value / 100;
    
//   }
 

  
  var prev = document.querySelectorAll(".action__btn--prev");
    
  for(var vp = 0; vp < prev.length; vp++){
    var oop = prev[vp];
    oop.addEventListener('click',getLyric)
  }


function getLyric(e){
var songid = e.target.id
console.log(songid);

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








  var show__Lyrics = document.querySelectorAll(".show__lyrics");
for(var l = 0; l < show__Lyrics.length; l++ ){
  var showLyrics = show__Lyrics[l];
}

  
var u = []
lyrics.map((lic) =>{
  var t = [
    lic.line1
]
    
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
return  t
}

)
  

// sound1.addEventListener('playing',showText)
// function showText(e){
// var timer = null;
// var index = 0;
// function cont(){
//     showLyrics.innerHTML =  u[index];
//   if(index === u.length - 1){
//     clearInterval(timer);
//   }else{
//     index++;
//   }
//   if(sound1.paused){
//     showLyrics.innerHTML =  " ";
//   }
// }
// timer = setInterval(cont,9800)
// } 
  

// },500)
// return () =>{
//   clearTimeout(timer)
// }

  },[lyrics,songs])
 
  

  return (
    
       <div className='song__container--main-flex' >
         {songs.map((song) =>(
           <React.Fragment key={song.songid}>
      <div className='song__main--box'>
      <div className='add_to-playlist'>
        <Link className='playlist' to={`/playlist/${song.songid}`}>Add To Playlist</Link>
        </div>
        <div className='songDom' id="song__cover-main">
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
          <span className='show__lyrics' id = "show_lyrics">
          
          </span>
        </div>

        <div className='song_item-main'>
          <audio    controlsList='nodownload' preload='metadata' className='song__main--audio' id="audio-1">
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
          {/* <div className='song_prev_song_buy-main'> */}
          <button className='action__btn--prev'    id = {song.songid}>Prev</button>
          {/* <button className='action__btn--buy'>Buy</button>
          <span><span className='price'>N</span>{song.price}</span> */}
        
          {/* </div> */}

      </div>
           </React.Fragment>
          
         ))}
      </div>
  )

}
