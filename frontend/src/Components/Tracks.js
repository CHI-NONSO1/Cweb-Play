import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Tracks() {
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

  const musicTracks = [
    {

    }
  ]
  
  songs.forEach((song,index) => {
    musicTracks.push(song.song)
    
  })
 
}
