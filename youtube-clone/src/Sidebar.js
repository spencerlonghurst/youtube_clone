import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={HomeIcon} title='Home'/>
      <SidebarRow Icon={ExploreIcon} title='Explore'/>
      <SidebarRow Icon={ShortTextIcon} title='Shorts'/>
      <SidebarRow Icon={SubscriptionsIcon} title='Subscriptions'/>
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title='Library'/>
      <SidebarRow Icon={HistoryIcon} title='History'/>
      <SidebarRow Icon={PlayArrowIcon} title='Your videos'/>
      <SidebarRow Icon={AccessTimeIcon} title='Watch later'/>
      <SidebarRow Icon={ThumbUpIcon} title='Liked videos'/>
      <hr />
    </div>
  )
}

export default Sidebar