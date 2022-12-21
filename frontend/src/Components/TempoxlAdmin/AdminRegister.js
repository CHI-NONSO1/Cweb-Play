import React from "react";
import "../CSS/TempoxlRegister.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";





function AdminRegister() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [picture, setPicture] = useState('');
  const [imageprev, setImageprev] = useState();
  const history = useNavigate();
  const [msg, setMsg] = useState('');


  
  function handleChange(e) { 
  setImageprev(URL.createObjectURL(e.target.files[0]));
  const img = e.target.files[0]
  setPicture(img);
  }


  var image = picture.name

  const handleSubmit = async (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    try{
      
      await axios.post('http://localhost:8000/tempoxladmin', 

      {     
        firstname: firstname,
        lastname: lastname,
        password: password,
        confirmpassword: confirmpassword,
        email: email,
        image: image, 
        phoneno: phoneno,     
        
    },
    {headers: {
      'content-type': 'application/json',
      "Access-Control-Allow-Origin": "http://localhost:3000",
    }
  }).then((result) => {

    })
    
    }catch (error)  {
      if (error.response) {
        setMsg(error.response.data.msg);
    }
    }
    
    var formData = new FormData()
      formData.append('file', picture);
    const config = {
      method: "post",
    url: "http://localhost:8000/profile",
    
 
    data:formData,
    headers: {
      'Content-Type': 'x-www-form-urlencoded',
      "Access-Control-Allow-Origin": "http://localhost:3000",
  },
    };
    axios(config)
    .then((result) => {
      if(result){
        
        history("/AdminLogin");
      }
    })
    .catch((error) => {
      error = new Error();
    });

  }
  
  return (

    <div className="reg_pageTPR">
    <div className="wrapper_flexTPR">
      <div className="h2parent">
        <h2 className="login_header">TempoXL Admin-Sign Up</h2>
      </div>
     
      <form encType="multipart/form-data"  method="post">
        <div className="form-group-parent2">
        <div className="form-group">
          <p className="has-text-centered">{msg}</p></div>
          <div className="input_parent">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)} 
              />
            <label htmlFor="firstname" className="labText">First Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              className="form-control"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              />
            <label htmlFor="lastname" className="labText">Last Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="none"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               />
            <label htmlFor="password" className="labText">Password</label>
          </div>
          <div className="help_parent"> <span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="password"
              name="confirm_password"
              autoComplete="none"
              id="confirmpassword"
              placeholder="Confirm Password"
              className="form-control"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              />
            <label htmlFor="confirmpassword" className="labText">Confirm Password</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <label htmlFor="email" className="labText">Email</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="number"
              name="phoneno"
              id="phoneno"
              placeholder="Phone Number"
              className="form-control"
              value={phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
              />
            <label htmlFor="phoneno" className="labText">Phone Number</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>


  <div className="form-group-parent-fileT">
  <div className="fileBtn_parentT">
    <input  type="file" name='file' onChange={handleChange} /> 
 
    </div>

    <div className="img_parentT">
    <img
    className="img_contentT"
    alt='avatarimg' 
    src={imageprev}
    id="profileDisplay" />
    
    </div>
  </div>

        <div className="form-group__submit--parent">
          
            <input type="submit" className="btn_submit" onClick={(e) => handleSubmit(e)} value="Register" />

            <input type="reset" className="btn-reset" value="Reset" />
          
        </div>
      </form>
    </div>

       </div>
  );
}

export default AdminRegister