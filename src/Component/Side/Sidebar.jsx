import React from 'react'
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

// import VideoLibraryIcon from 

export default function Sidebar() {
  return (
    <div>
        <SidebarContent Icon={HomeIcon} content='Home'/>
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
