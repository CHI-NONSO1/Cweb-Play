import React, {useState } from 'react'
import './CSS/RequestForm.scss'
import axios from 'axios';





export default function RequestForm() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState( '');
  const [failure, setFailure] = useState( '');

  
  const submitMessage = (e) => {
    // prevent the form from refreshing the whole page
    
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:8000/request",
      data: {
        fullname,
        email,
        phoneno,
        message
      },
    };
    setFullname('')
      setEmail('')
      setMessage('')
      setPhoneno('')
    axios(configuration)
    .then((result) => {
      if(result){
        setSuccess("Your Request have been Received!")
      }
     
    })
    .catch((error) => {
      if(error){
        
        setFailure("Something went wrong!")
      
    }
      error = new Error();
    });
  }
  return (
    <div className='request__container'>
       <div className="err__parent">
            <span className="phoneno__err">{success}</span>
          </div>
          <div className="err__parent">
            <span className="phoneno__err">{failure}</span>
          </div>
       <div className="msg__heading">
      <span className="msg">Leave A Message</span>
    </div>
    <div className="slide">
      <form  method="POST" id="contact" encType="multipart/form-data">

        <div className="form__control">
          <div className="err__parent">
            <span className="name__err"></span>
          </div>
          <div className="name__parent">
            <input
             type="text"
              name="name" 
              className="name"
               id="name__label"
                required placeholder="Your Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)} />
            <label htmlFor="name__label" className="form__label">Your Full Name</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="email__err"></span>
          </div>
          <div className="email__parent">
            <input
             type="email"
              className="email"
               name="email"
                id="email__label"
                 placeholder="Your Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required />
            <label htmlFor="email__label" className="form__label">Your Email</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="phoneno__err"></span>
          </div>
          <div className="phoneno__parent">
            <input
             type="phoneno"
              className="phoneno"
               name="phoneno"
                id="phoneno__label"
                 placeholder="Your Phone Number"
                 value={phoneno}
                 onChange={(e) => setPhoneno(e.target.value)}
                 required />
            <label htmlFor="phoneno__label" className="form__label">Your Phone Number</label>
          </div>
        </div>

        <div className="form__control">
          <div className="err__parent">
            <span className="message__err"></span>
          </div>
          <div className="message__parent">
            <textarea
             name="message"
              form="contact" 
              id="message__label"
               required placeholder="Write Your Message Here"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               ></textarea>
            <label htmlFor="message__label" className="form__label">Your Message Here</label>
          </div>
        </div>
        <div className="confirm"></div>
        
        <button
         id="submit"
        type="submit"
        onClick={(e) => submitMessage(e)}
        >Submit</button>
        
      
      </form>
    </div>
    </div>
  )
}
