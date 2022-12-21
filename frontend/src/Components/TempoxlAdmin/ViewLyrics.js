import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ViewLyrics() {
  const [lyrics, setLyrics] = useState([]);
  const [token, setToken] = useState(" ");


useEffect(() =>{

  const edit = localStorage.getItem('Admintoken');
  setToken(edit);


  const Lyrics = async () => {
    try {
       
        const rics = await axios.get('http://localhost:8000/lyrics/lyric');
        
        setLyrics(rics.data);
      
       
    } catch (error) {
        if (error.res) {
            
            
        }
    }
  }
 
  
  
  Lyrics()

},[])

const deleteLyrics = async (lyricsid) => {
  await axios.delete(`http://localhost:8000/song/${lyricsid}`);

  const getLyrics = async () => {
    try {
          await axios.get(`http://localhost:8000/lyrics/lyric`)   
    .then(res => setLyrics(res.data))

  } catch (error) {
    if (error.data) {   
    }
  }
  
  }
getLyrics()
}
  return (
    <div>
        <p>
          {token?(
            
              lyrics.map((ric, index) => (
          <React.Fragment  key={ric.lyricsid}>
          <span>
          <Link
          to={`/admindashboard/lyrics/${ric.lyricsid}`} 
          className="btn_edit">Edit Lyrics</Link>
          </span>
          <span>
          <button onClick={ () => deleteLyrics(ric.lyricsid) } 
          className="btn_del">Del Lyrics</button>
          </span>
          </React.Fragment>
          
        ))

          ):( null)
        
        }
          
        </p>
    </div>
  )
}
