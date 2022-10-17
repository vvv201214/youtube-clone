import React, { useContext, useState } from 'react'
import SidebarContent from './SidebarContent'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { context } from '../Main';

export default function Sidebar() {
  let searchValue = useContext(context);

  return (
    <div className={searchValue.activeHome ? 'sidebar_active' : 'sidebar'}>
        <a href='https://youtube-clone-vijay.netlify.app/'>
          <SidebarContent className={"check"} Icon={HomeIcon} content='Home'/>
        </a>
        <SidebarContent Icon={SubscriptionsIcon} content='Subscription'/>
        <SidebarContent Icon={ExploreIcon} content='Explore'/>
        <hr className='hr_line'/>
        <SidebarContent Icon={VideoLibraryIcon} content="Library" />
        <SidebarContent Icon={HistoryIcon} content="History" />
        <SidebarContent Icon={OndemandVideoIcon} content="Your videos" />
        <SidebarContent Icon={WatchLaterIcon} content="Watch Later" />
        <SidebarContent Icon={ThumbUpOutlinedIcon} content="Liked videos" />
        <SidebarContent Icon={ExpandMoreOutlinedIcon} content="Show more" />
        <hr className='hr_line'/>
    </div>
  )
}
