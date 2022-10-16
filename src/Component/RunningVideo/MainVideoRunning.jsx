import React from 'react'
import ReactPlayer from 'react-player'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
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
    const view = Math.ceil(Math.random()*10000000000);
    let time = Math.ceil(Math.random()*500);
  return (
    <>
        <div className='run_card'>
            <div >
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls={true} />
            </div>
            <div>
                <h4>{title}</h4>
                <div className='run_text'>
                    <p>{`${view} views`}  • {(time > 30 && time < 360) ? `${Math.floor(time/30)} months ago` : (time >= 360) ? `${Math.floor(time/(12*30))} year ago` : `${time} days ago`}
                    </p>

                    <div className='run_icon'>
                        <ThumbUpOutlinedIcon />Like
                        <ThumbDownOffAltOutlinedIcon />Dislike
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
                <button className='btn'>SUBSCRIBE</button>
            </div>
            <div className='run_description'>{description}</div>
            <div className='showmore'>SHOW MORE</div>
            <hr className='hr_line' />
            <h2>Comment section</h2>
        </div>
    </>
  )
}
