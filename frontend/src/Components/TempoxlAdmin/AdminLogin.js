import React , { useState } from 'react';
import '../CSS/AdminLogin.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function AdminLogin() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  
  const handleSubmit = async e => {

    e.preventDefault();
    let axiosConfig = {
        headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "http://localhost:3000",
        }
      };
    try {
        
        await axios.post('http://localhost:8000/tempoxladmin/login', 
        
        {
     
            email: email,
            password: password

        },
        axiosConfig,
        ).then((result) => {
            console.log(result);
        localStorage.setItem('Admintoken', JSON.stringify(result.data.accessToken))
    //     const decoded = jwt_decode(result.data.accessToken);
       
    //    const  token =  decoded.firstname  
    //     setToken(token)
    //     console.log(setToken);
          if(result !== ""){
            history("/admindashboard");
          }
        });

    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }

  }


  return(
    <div className="wrapper_flexT">
        <div className="h2parentT">
            <h2 className="login_header">TempoXL-Login</h2>
        </div>
        <form  method="post" onSubmit={handleSubmit} >

            <div className="form-group-parent1">
                <div className="form-group"><p className="has-text-centered">{msg}</p></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)} 
                name="accountname" className="form-control" 
                />
                <label htmlFor='email' className="labText">Email</label>
                </div>
                <div className="help_parent"> <span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="password" 
                id='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)} 
                autoComplete="none" 
                name="password" 
                className="form-control"
                />
                <label htmlFor='password' className="labText">Password</label>
                </div>
                <div className="help_parent"> <span className="help-block"></span></div>
            </div>

            <div className="form-group-submit-parentT">
                <input type="submit" className="btn_submitT"  value="Login" />
            </div>



        </form>
    </div>
  
  )
}

