import React, { useEffect } from 'react'
import SideVideoCard from "./SideVideoCard";

export default function SideVideo({sideVideoObj, running}) {
  //runSideVideos, setRunSideVideos
    useEffect(()=>{
      let update = (sideVideoObj.runSideVideos).filter((elem)=>{
          return elem.etag !== running.etag;
      })
      sideVideoObj.setRunSideVideos(update)
    },[running])
  return (
    <>
      {(sideVideoObj.runSideVideos).map((elem)=>{
        return(
          <SideVideoCard elem={elem} image={elem.snippet.thumbnails.high.url} channel={elem.snippet.channelTitle} title={elem.snippet.title}/>
        )
      })}
      
    </>
  )
}
