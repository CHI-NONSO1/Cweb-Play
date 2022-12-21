import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Header.css';




export default function Header() {
  return (
    <div className='header__container'>
     
        <div className='header__flex'>
        {/* <div className='header__buy-song'>
        Buy Songs
        </div> */}
        <div className='header__buy-lyrics'>
        <Link className='user_link' to={'/buylyrics'} >Buy Lyrics</Link> 
        
        </div>
        <div className='header__request'>
        <Link className='user_link' to={'/contactus'} >Request</Link> 
        
        </div>
        <div className='header__users'>
        <div className='header__user-signup'>
        
        <Link className='user_link' to={'/user'} >Signup</Link> 
        </div>|
        <div className='header__user-login'>
        <Link className='user_link' to={'/userslogin'} >Login</Link>   
        </div>
        </div>
       </div>
     
     
  

    </div>
  )
}
