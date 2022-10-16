import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import {context} from "../Main";

export default function SearchVideoCard({image, channel, title, description, elem}) {

    let view = Math.ceil(Math.random()*999);
    let time = Math.ceil(Math.random()*500);
    let runningVideo = useContext(context);

    function run(e){
        runningVideo.setShow(true);
        runningVideo.setRunning(e);
    }

  return (
    <>
        <div onClick={(e)=>{run(elem)}} className='search_video_card'>
            <img className='search_thumbnail' src={image} />
            <div className='search_video_info'>
                <h4>{title}</h4>
                <p className='view_time'>
                    {view < 100 ? `${view}M` : `${view}K`} • {(time > 30 && time < 360) ? `${Math.floor(time/30)} months ago` : (time >= 360) ? `${Math.floor(time/(12*30))} year ago` : `${time} days ago`}
                </p>                        
                <div className='search_video_text'>
                    <Avatar />
                    <p>{channel}</p>
                </div>
                <p className='description'>{description}</p>
            </div>
        </div>
    </>
  )
}
