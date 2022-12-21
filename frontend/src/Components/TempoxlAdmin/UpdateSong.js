import React, { useEffect } from "react";
import "../CSS/UpdateSong.scss"

import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";





function UpdateSong() {

  const [songtitle, setSongtitle] = useState("");
  const [artistname, setArtistname] = useState("");
  const [songItem, setSongItem] = useState("");
  const [song, setSong] = useState("");
  const [feature, setFeature] = useState("");
  const [album, setAlbum] = useState("");
   const [price, setPrice] = useState( );
  const [releasedAt, setReleasedAt] = useState("");
  const [coverartimg, setCoverartimg] = useState('');
  const [sliderimageT, setSliderimageT] = useState('');
  const [sliderimage, setSliderimage] = useState('');
  const [coverartprev, setCoverartprev] = useState();
  const [sliderimageprev, setSliderimageprev] = useState();
  const [coverart, setCoverart] = useState();
  const history = useNavigate();
  const [msg, setMsg] = useState('');
  
 const {songid} = useParams();
  
  function handleChange1(e) { 
    
  setCoverartprev(URL.createObjectURL(e.target.files[0]));
  var coverimg = e.target.files[0]
  setCoverartimg(coverimg);
  setCoverart(e.target.files[0].name);
  }
  
  
  function handleChange2(e) { 
     
    setSliderimageprev(URL.createObjectURL(e.target.files[0]));
    var sliderimg = e.target.files[0]
    setSliderimageT(sliderimg);
    setSliderimage(e.target.files[0].name);
    }

    


    function handleChange3(e) { 
    
      var songItem = e.target.files[0]
      setSongItem(songItem);
      setSong(e.target.files[0].name);
      }
      


      useEffect(() =>{

        
      
      
      
        const Songs = async () => {
          try {
             
              const song = await axios.get(`http://localhost:8000/song/playlist/${songid}`);
              setSongtitle(song.data.songtitle)
              setArtistname(song.data.artistname)
              setSongItem(song.data.songitem)
              setFeature(song.data.feature)
              setAlbum(song.data.album)
              setReleasedAt(song.data.releasedAt)
              setCoverartprev(song.data.coverart)
              setPrice(song.data.price)
          } catch (error) {
              if (error.res) {
                  
                  
              }
          }
        }
       
        
        
        Songs()
      },[songid])      

      

  const handleSubmit = async (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    try{
      
    await axios.patch(`http://localhost:8000/song/${songid}`, 

      {     
        songtitle: songtitle,
        artistname: artistname,
        song: song,
        feature: feature,
        album: album,
        releasedAt: releasedAt, 
        coverart:coverart,  
       sliderimage:sliderimage,    
        songid:songid,
        price:price
    },
    {headers: {
      'content-type': 'application/json',
      "Access-Control-Allow-Origin": "http://localhost:8000",
    }
  }).then((result) => {
    if(result){

      history("/admindashboard");
    }
    })
    
    }catch (error)  {
      if (error.response) {
        setMsg(error.response.data.msg);
    }
    }
    
    var formData1 = new FormData()
      formData1.append('file', coverartimg);
    const config1 = {
      method: "post",
    url: "http://localhost:8000/coverimg",
    
 
    data:formData1,
    headers: {
      'Content-Type': 'x-www-form-urlencoded',
      "Access-Control-Allow-Origin": "http://localhost:8000",
  },
    };
    axios(config1)
    .then((result) => {
      // if(result){
        
      //  // history("/UsersLogin");
      // }
    })
    .catch((error) => {
      error = new Error();
    });

    var formData2 = new FormData()
    formData2.append('file', sliderimageT);
  const config2 = {
    method: "post",
  url: "http://localhost:8000/sliderimg",
  

  data:formData2,
  headers: {
    'Content-Type': 'x-www-form-urlencoded',
    "Access-Control-Allow-Origin": "http://localhost:8000",
},
  };
  axios(config2)
  .then((result) => {
    // if(result){
    //   setAddLyricsStatus(true)
    //   //history("/UsersLogin");
    // }
  })
  .catch((error) => {
    error = new Error();
  });


  var formData3 = new FormData()
  formData3.append('file', songItem);
const config3 = {
  method: "post",
url: "http://localhost:8000/audio",


data:formData3,
headers: {
  'Content-Type': 'x-www-form-urlencoded',
  "Access-Control-Allow-Origin": "http://localhost:8000",
},
};
axios(config3)
.then((result) => {
  
})
.catch((error) => {
  error = new Error();
});

  }
  
  return (

    
    <div className="wrapper_flexUP">
      <div className="h2parent">
        <h2 className="login_header">Update Song</h2>
      </div>
     
      <form encType="multipart/form-data"  method="post">
        <div className="form-group-parent2">
        <div className="form-group">
          <p className="has-text-centered">{msg}</p></div>
          <div className="input_parent">
            <input
              type="text"
              id="songtitle"
              name="songtitle"
              placeholder="Song Title"
              className="form-control"
              value={songtitle}
              onChange={(e) => setSongtitle(e.target.value)} 
              />
            <label htmlFor="songtitle" className="labText">Song Title</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="text"
              id="artistname"
              name="artistname"
              placeholder="Artist Name"
              className="form-control"
              value={artistname}
              onChange={(e) => setArtistname(e.target.value)}
              />
            <label htmlFor="artistname" className="labText">Artist Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="text"
              id="feature"
              name="feature"
              
              placeholder="Feature"
              className="form-control"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
               />
            <label htmlFor="feature" className="labText">Feature</label>
          </div>
          <div className="help_parent"> <span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="text"
              name="album"
              
              id="album"
              placeholder="Album"
              className="form-control"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              />
            <label htmlFor="album" className="labText">Album</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              />
            <label htmlFor="price" className="labText">Price</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="date"
              name="releasedAt"
              id="releasedAt"
              placeholder="Released Date"
              className="form-control"
              value={releasedAt}
                onChange={(e) => setReleasedAt(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
              />
            
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

          
        <div className="form-group-parent-file">
          <p>Cover Image</p>
        <div className="fileBtn_parent">
          <input  type="file" name='file' onChange={handleChange1} /> 
      
          </div>

         
      
          <div className="img_parent">
          <img
          className="img_content"
          alt='avatarimg' 
         src={coverartprev}
          id="profileDisplay" />
          
          </div>
        </div>
        
        <div className="form-group-parent-file">
        <p>Slider Image</p>
        <div className="fileBtn_parent">
          <input  type="file" name='file' onChange={handleChange2} /> 
      
          </div>

          <div className="img_parent">
          <img
          className="img_content"
          alt='avatarimg' 
          src={sliderimageprev}
          id="profileDisplay" />
          
          </div>
        </div>

        <div className="form-group-parent-fileS">
        <p>Audio Song</p>
        <div className="fileBtn_parentS">
          <input  type="file" name='file' onChange={handleChange3} /> 
      
          </div>
        </div>

        <div className="form-group__submit--parentS">
        <button type="button" className="btn_submitS" onClick={(e) => handleSubmit(e)}>Update</button>

        </div>
     </form>
    </div>

      
  );
}

export default UpdateSong



