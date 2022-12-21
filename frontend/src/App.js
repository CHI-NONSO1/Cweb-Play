import React from 'react';
//import { Counter } from './features/counter/Counter';
import {  Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import PlayList from './Components/PlayList';
import RequestForm from './Components/RequestForm';
import SellLyricsPage from './Components/SellLyricsPage';
import AdminLogin from './Components/TempoxlAdmin/AdminLogin';
import AdminRegister from './Components/TempoxlAdmin/AdminRegister';
import TempoxlDashboard from './Components/TempoxlAdmin/TempoxlDashboard';
import UserLogin from './Components/TempoxlUsers/UserLogin';
import UserRegister from './Components/TempoxlUsers/UserRegister';
import Entry from './TestComponents/Entry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home/ >} />
        <Route path="/playlist"  element={<PlayList/ >} />
        <Route path = "/playlist/:songid"  element={<PlayList/ >} />
        <Route path="/tempoxl"  element={<AdminRegister/ >} />
        <Route path="/user"  element={<UserRegister/ >} />
        <Route path="/admindashboard"  element={<TempoxlDashboard/ >} />
        <Route path="/admindashboard/song/:songid"  element={<TempoxlDashboard/ >} />
        <Route path="/admindashboard/lyrics/:lyricsid"  element={<TempoxlDashboard/ >} />
        <Route path="/adminlogin"  element={<AdminLogin/ >} />
        <Route path="/buylyrics"  element={<SellLyricsPage/ >} />
        <Route path="/contactus"  element={<RequestForm/ >} />
        <Route path="/userslogin"  element={<UserLogin/ >} />
        <Route path="/player"  element={<Entry/ >} />
      </Routes>
    </div>
  );
}

export default App;
