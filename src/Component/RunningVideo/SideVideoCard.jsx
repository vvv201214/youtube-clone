import React,{useContext, useRef} from 'react'
import {context} from "../Main";

export default function SideVideoCard({image, elem, channel, title}) {

    let view = useRef(Math.ceil(Math.random()*999));
    let time = useRef(Math.ceil(Math.random()*500));
    let runningVideo = useContext(context);

    function run(e){
        runningVideo.setShow(true);
        runningVideo.setRunning(e);
    }

  return (
    <>
        <div onClick={(e)=>{run(elem)}} className='side_run_video_card'>
            <img className='side_run_thumbnail' src={image} />
            <div className='side_run_video_info'>
                <h4>{title}</h4>
                <div className='side_run_channel'>
                    <p>{channel}</p>
                </div>
                <p className='side_run_view_time'>
                    {view.current < 100 ? `${view.current}M` : `${view.current}K`} • {(time.current > 30 && time.current < 360) ? `${Math.floor(time.current/30)} months ago` : (time.current >= 360) ? `${Math.floor(time.current/(12*30))} year ago` : `${time.current} days ago`}
                </p>                        
            </div>
        </div>
    </>
  )
}
