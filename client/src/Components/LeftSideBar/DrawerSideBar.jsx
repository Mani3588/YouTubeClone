import React from 'react'
import './LeftSidebar.css'
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md'
import shorts from './shorts.png'
import { FaHistory } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function DrawerSideBar({toggleDrawer, toggleDrawerSidebar}) {
  return (
    <div className='Container_Drawer_LeftSidebar' style={toggleDrawerSidebar}>
        <div className='Container2_Drawer_LeftSidebar'>
            <div className="Drawer_LeftSidebar">
                <NavLink to={'/'} className="icon_Sidebar_div">
                    <p>
                        <AiOutlineHome 
                            size={22} className='icon_sidebar' style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">
                            Home
                        </div>
                    </p>
                </NavLink>
                <div className='icon_Sidebar_div'>
                    <p>
                        <MdOutlineExplore 
                            size={22} className='icon_sidebar' style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">
                            Explore
                        </div>
                    </p>
                </div>
                <div className='icon_Sidebar_div'>
                    <p>
                        <img
                            src= {shorts} width={22} className='icon_sidebar' style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">
                            Shorts
                        </div>
                    </p>
                </div>
                <div className='icon_Sidebar_div'>
                    <p>
                        <MdOutlineSubscriptions
                            size={22} className='icon_sidebar' style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">
                            Subscriptions
                        </div>
                    </p>
                </div>
            </div>
            <div className="libraryBtn_DrawerLeftSidebar">
                <NavLink to={'/library'} className='icon_Sidebar_div'>
                    <p>
                        <MdOutlineVideoLibrary 
                            size={22} className='icon_sidebar' style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">
                            Library
                        </div>
                    </p>
                </NavLink>
                <NavLink to={'/history'} className='icon_Sidebar_div'>
                    <p>
                        <FaHistory 
                            size={22} className='icon_sidebar' style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">
                            History
                        </div>
                    </p>
                </NavLink>
                <NavLink to={'/yourvideos'} className='icon_Sidebar_div'>
                    <p>
                        <AiFillPlaySquare 
                            size={22} className='icon_sidebar' style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">
                            Your Videos
                        </div>
                    </p>
                </NavLink>
                <NavLink to={'/watchlater'} className='icon_Sidebar_div'>
                    <p>
                        <MdOutlineWatchLater 
                            size={22} className='icon_sidebar' style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">
                            Watch Later
                        </div>
                    </p>
                </NavLink>
                <NavLink to={'/likedvideos'} className='icon_Sidebar_div'>
                    <p>
                        <AiFillLike
                            size={22} className='icon_sidebar' style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">
                            Liked Videos
                        </div>
                    </p>
                </NavLink>
            </div>
            <div className="Subscription_LeftSidebar">
                <h3>Your Subscriptions</h3>
                <div className="Channel_LeftSidebar">
                    <p>C</p>
                    <div>Channel</div>
                </div>
                <div className="Channel_LeftSidebar">
                    <p>C</p>
                    <div>Channel</div>
                </div>
                <div className="Channel_LeftSidebar">
                    <p>C</p>
                    <div>Channel</div>
                </div>
                <div className="Channel_LeftSidebar">
                    <p>C</p>
                    <div>Channel</div>
                </div>
            </div>
        </div>
        <div className="Container3_Drawer_LeftSidebar" onClick={()=>toggleDrawer()}>

        </div>
    </div>
  )
}

export default DrawerSideBar
