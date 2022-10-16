import React from 'react'
import MainVideoRunning from './MainVideoRunning'
import SideVideo from './SideVideo'
import "../Style.css";

export default function RunningVideo({running, sideVideo}) {
  return (
    <>
      <div className='running_video'>
        <div className='main_video_run'>
          <MainVideoRunning running={running}/>
        </div>
        <div className='side_video'>
          <SideVideo running={running} sideVideoObj={sideVideo}/>
        </div>
      </div>
    </>
  )
}
