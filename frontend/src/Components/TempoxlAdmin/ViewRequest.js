import React, { useEffect, useState } from 'react'
import axios from 'axios';



export default function ViewRequest() {


 
const [requests, setRequests] = useState([]);
const [token, setToken] = useState(" ");

  useEffect(() =>{

    const edit = localStorage.getItem('Admintoken');
    setToken(edit);
  

  
    const Request = async () => {
      try {
         
          const req = await axios.get('http://localhost:8000/request/requests');
          
          setRequests(req.data);
        
         
      } catch (error) {
          if (error.res) {
              
              
          }
      }
    }
   
    
    
    Request()
  
  },[])
  
  
  
  const deleteRequest = async (requestid) => {
    await axios.delete(`http://localhost:8000/song/${requestid}`);
  
    const getRequests = async () => {
      try {
            await axios.get(`http://localhost:8000/request/requests`)   
      .then(res => setRequests(res.data))
  
    } catch (error) {
      if (error.data) {   
      }
    }
    
    }
  getRequests()
  }
  

  return (
  <div className='request__wrap'>
      {requests.map(req =>(
        <React.Fragment key={req.requestid}>
      <div className='fullname'>
        <span>{req.fullname}</span>
      </div>
      <div className='phoneno_req'>
        <span>{req.phoneno}</span>
      </div>
      <div className='email_req'>
        <span>{req.email}</span>
      </div>
      <div className='date'>
        <span>{req.createdAt}</span>
      </div>
      <div className='request__wrap'>
        <span>{req.message}</span>
      </div>
      <div className='action'>
        <span>
        <button onClick={ () => deleteRequest(req.requestid) } 
          className="btn_action">Del Request</button>
        </span>
      </div>
        </React.Fragment>

      ))}
 
    </div>
  )
}
