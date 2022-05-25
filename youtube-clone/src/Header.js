import React, { useState } from 'react'
import './Header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
// import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState('')

  return (
    <div className='header'>
      <div className='header_left'>
        <MenuSharpIcon />
        <Link to='/'>
          <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='Youtube logo' />
        </Link>
      </div>

      <div className='header_input'>
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text'/>
        <Link to={`/search/${inputSearch}`}>
        <SearchSharpIcon className='header_inputButton'/>
        </Link>
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