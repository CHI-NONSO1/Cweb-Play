import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../CSS/ViewUsers.scss';


export default function ViewUsers() {

  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(" ");
  
  
  useEffect(() =>{
  
    const edit = localStorage.getItem('Admintoken');
    setToken(edit);
  
  
  
    const Users = async () => {
      try {
         
          const hist = await axios.get('http://localhost:8000/user/tempoxlusers');
          
          setUsers(hist.data);
        
         
      } catch (error) {
          if (error.res) {
              
              
          }
      }
    }
   
    
    
    Users()

  },[])

  const deleteUser = async (tempoxluserid) => {
    await axios.delete(`http://localhost:8000/user/userone/${tempoxluserid}`);
  
    const getUsers = async () => {
      try {
            await axios.get(`http://localhost:8000/user/tempoxlusers`)   
      .then(res => setUsers(res.data))
  
    } catch (error) {
      if (error.data) {   
      }
    }
    
    }
  getUsers()
  }



  return (
   !users ? "Loading . . ." :   users.map((user, index) => (
      <React.Fragment  key={user.tempoxluserid}>
    <div>{user.firstname}</div>
    <div>{user.lastname}</div>
    <div>{user.phoneno}</div>
    <div>{user.email}</div>
    <p>
    {token?(
    <span>
    <button onClick={ () => deleteUser(user.tempoxluserid) } 
    className="btn_del">Del User</button>
    </span>
    ):( null)
  
  }

   </p>
    </React.Fragment>
    
    ))
  )
}
