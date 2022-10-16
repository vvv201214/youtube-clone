import React from 'react'
import ReactPlayer from "react-player";

export default function Check() {
  return (
    <>
        <div>Check</div>
        <ReactPlayer url={"https://www.youtube.com/watch?v=zTitoHKsyJg"} controls={true} />
    </>
  )
}
