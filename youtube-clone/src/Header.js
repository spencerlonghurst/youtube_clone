import React from 'react'
import './Header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <MenuSharpIcon />
        <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='Youtube logo' />
      </div>

      <div className='header_input'>
        <input placeholder='Search' type='text'/>
        <SearchSharpIcon className='header_inputButton'/>
        {/* <KeyboardVoiceSharpIcon /> */}
      </div>

      <div className='header_icons'>
        <VideoCallOutlinedIcon className='header_icon'/>
        <AppsOutlinedIcon className='header_icon'/>
        <NotificationsNoneSharpIcon className='header_icon'/>
        <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/94577635?v=4" />
      </div>
    </div>
  )
}

export default Header