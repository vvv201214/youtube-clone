import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import "../Style.css";
import { context } from '../Main';

export default function VideoCard({image, channel, title, elem}) {

    let view = Math.ceil(Math.random()*999);
    let time = Math.ceil(Math.random()*500);
    
    let runningVideo = useContext(context);

    function run(e){
        runningVideo.setShow(true);
        runningVideo.setRunning(e);
    }

  return (
    <>
      <div onClick={(e)=>{run(elem)}} className='video_card'>
          <img className='thumbnail' src={image} />
          <div className='video_info'>
              <Avatar />
              <div className='video_text'>
                 <h4>{title}</h4>
                 <p>{channel}</p>
                 <p>
                 {view < 100 ? `${view}M` : `${view}K`} • {(time > 30 && time < 360) ? `${Math.floor(time/30)} months ago` : (time >= 360) ? `${Math.floor(time/(12*30))} year ago` : `${time} days ago`}
                 </p>
              </div>
          </div>
      </div>
    </>
  )
}
