import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Avatar from '@mui/material/Avatar';
import "../Style.css";
import { context } from '../Main';

export default function Header() {

  let userContext = useContext(context);

  function inputEnter(e){
    userContext.inputValue = e.target.value;
  }

  function hitSearch(){
    userContext.setInputValue(userContext.inputValue);
    if(userContext.inputValue !== ""){
      userContext.setShow(false);
    }
  }

  return (
    <>
      <div className='header'>
        <div className="header_left">
          <MenuIcon />
          <a href='https://youtube-clone-vijay.netlify.app/'>
            <img className='header_logo' src={require('./youtubeLogo.png')} />
          </a>
        </div>
        <div className="header_centre">
          <input onChange={inputEnter} type={"text"} className='search_input'/>
          <SearchIcon onClick={hitSearch} className='search_button'/>
        </div>

        <div className="header_right">
          <AppsIcon />
          <VideoCallIcon />
          <NotificationsActiveIcon />
          <Avatar src={require("./me.jpg")}/>
        </div>
      </div>
    </>
  )
}
