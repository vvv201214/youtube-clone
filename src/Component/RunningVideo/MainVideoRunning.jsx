import React,{useState, useRef, useEffect} from 'react'
import ReactPlayer from 'react-player'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Avatar from '@mui/material/Avatar';


export default function MainVideoRunning({running}) {
    const id = running.id.videoId;
    const title = running.snippet.title;
    const channel = running.snippet.channelTitle;
    const description = running.snippet.description;
    let view = useRef(Math.ceil(Math.random()*10000000000));
    let time = useRef(Math.ceil(Math.random()*500));
    let [isSubscribe, setIsSubscribe] = useState(false);
    const [count, setCount] = useState(0);
    let [dislike, setDislike] = useState(false);
    const SUBSCRIBED = "SUBSCRIBED";
    const SUBSCRIBE = "SUBSCRIBE";

    useEffect(()=>{
        setDislike(false);
        setCount(0);
        setIsSubscribe(false);
    },[running])

    function subscribe(){
        if(isSubscribe){
            setIsSubscribe(false);
        }
        else{
            setIsSubscribe(true);
        }  
    }
    function pressLike(){
        if(dislike === true){
            setDislike(false);
        }
        if(count === 1){
            setCount(0);
        }else{
            setCount(1);
        }  
    }
    function pressDislike(){
        if(count === 1){
            setCount(0);
        }
        if(dislike === false){
            setDislike(true);
        }
        else{
            setDislike(false);
        }
    }

  return (
    <>
        <div className='run_card'>
            <div >
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls={true} />
            </div>
            <div>
                <h4>{title}</h4>
                <div className='run_text'>
                    <p>{`${view.current} views`}  • {(time.current > 30 && time.current < 360) ? `${Math.floor(time.current/30)} months ago` : (time.current >= 360) ? `${Math.floor(time.current/(12*30))} year ago` : `${time.current} days ago`}
                    </p>

                    <div className='run_icon'>
                        <div className='run_like' onClick={pressLike}>
                            {count === 0 ? <><ThumbUpOutlinedIcon />Like</> : <><ThumbUpIcon />{count}</>}
                        </div>
                        <div className='run_dislike' onClick={pressDislike}>
                            {dislike ? <><ThumbDownAltIcon />Dislike</> : <><ThumbDownOffAltOutlinedIcon />Dislike</>}
                        </div>
                        
                        <ShareOutlinedIcon />Share
                        <ContentCutOutlinedIcon />Clip
                        <BookmarksOutlinedIcon />Save
                        <MoreHorizOutlinedIcon />
                    </div>
                </div>
            </div>
            <hr className='hr_line' />
            <div className='channel_subs'>
                <div className='avatar'>
                    <Avatar />
                    <h4>{channel}</h4>
                </div>
                <button onClick={subscribe} className={`btn${isSubscribe ? '_subs' : ''}`}>{isSubscribe ? SUBSCRIBED : SUBSCRIBE}</button>
            </div>
            <div className='run_description'>{description}</div>
            <div className='showmore'>SHOW MORE</div>
            <hr className='hr_line' />
            <h2>Comment section</h2>
        </div>
    </>
  )
}
