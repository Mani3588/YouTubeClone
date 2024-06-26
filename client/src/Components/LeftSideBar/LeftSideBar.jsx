import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineExplore} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import shorts from './shorts.png'
import './LeftSidebar.css'

function LeftSideBar() {
  return (
    <div className='Container_LeftSideBar'>
      <NavLink to={'/'} className="icon_Sidebar_div">
        <AiOutlineHome size={22} className='icon_sidebar' />
        <div className="text_sidebar_icon">
            Home
        </div>
      </NavLink>
      <div className="icon_Sidebar_div">
        <MdOutlineExplore size={22} className='icon_sidebar' />
        <div className="text_sidebar_icon">
            Explore
        </div>
      </div>
      <div className="icon_Sidebar_div">
        <img src={shorts} width={22} className='icon_sidebar' />
        <div className="text_sidebar_icon">
            Shorts
        </div>
      </div>
      <div className="icon_Sidebar_div">
        <MdOutlineSubscriptions size={22} className='icon_sidebar' />
        <div className="text_sidebar_icon" style={{fontSize: "11px"}}>
            Subscriptions
        </div>
      </div>
      <NavLink to={'/library'} className="icon_Sidebar_div">
        <MdOutlineVideoLibrary size={22} className='icon_sidebar' />
        <div className="text_sidebar_icon">
            Library
        </div>
      </NavLink>
    </div>
  )
}

export default LeftSideBar
