import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import VideoCard from "./VideoCard";
import { context } from '../Main';

export default function Maincontent() {

  const key = "AIzaSyCjTtte52MAZ-H-YXxyXvSu2Sx1LX5rcUk";
  const inputValue = "recommended video"
  const [data, setData] = useState([]);
  let searchValue = useContext(context);
  
  useEffect(()=>{
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=vi
                deo&part=snippet&maxResults=${30}&q=${inputValue}`)
    .then((res)=>{
      console.log(res.data);
        setData(res.data.items)
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <>
      <h3>Recommended Video</h3>
      <div className='recommended_video'>
          {data.map((elem)=>{
            return(
              <VideoCard key={elem.id.videoId} elem={elem} image={elem.snippet.thumbnails.high.url} channel={elem.snippet.channelTitle} title={elem.snippet.title}/>
            )
          })}
      </div>
    </>
  )
}
