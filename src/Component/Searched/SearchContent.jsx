import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";

import { context } from '../Main';
import SearchVideoCard from "./SearchVideoCard";

export default function SearchContent() {
    const key = "AIzaSyCjTtte52MAZ-H-YXxyXvSu2Sx1LX5rcUk";
    const [data, setData] = useState([]);
    let searchValue = useContext(context);


    useEffect(()=>{
      axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=vi
                  deo&part=snippet&maxResults=${30}&q=${searchValue.inputValue}`)
      .then((res)=>{
          setData(res.data.items)
          searchValue.setRunSideVideos(res.data.items);
      })
    },[searchValue.inputValue])
  
    return (
      <>
        <div className='searched_video'>
            {data.map((elem)=>{
              return(
                <>
                  <div key={elem.id.videoId}>
                    <SearchVideoCard elem={elem} image={elem.snippet.thumbnails.high.url} channel={elem.snippet.channelTitle} title={elem.snippet.title} description={elem.snippet.description}/>
                  </div>
                </>
              )
            })}
        </div>
      </>
    )
  }
