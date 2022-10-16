import React from 'react'

export default function SidebarContent({Icon, content}) {
  return (
    <div className='sidebar_content'>
        <Icon className='sidebarContent_icon'/>
        <div className='sidebarContent_title'>{content}</div>
    </div>
  )
}
