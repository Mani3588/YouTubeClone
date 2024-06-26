import React from 'react'
import Home from '../Pages/Home/Home'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import YourVideo from '../Pages/YourVideo/YourVideo'
import WatchLater from '../Pages/WatchLater/WatchLater'
import VideoPage from '../Pages/VideoPage/VideoPage';
import Channel from '../Pages/Channel/Channel';
import Search from '../Pages/Search/Search';

function AllRoutes({setEditCreateChannelBtn, setVideoUploadPage}) {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/library' element={<Library />} />
      <Route path='/likedvideos' element={<LikedVideo />} />
      <Route path='/history' element={<WatchHistory />} />
      <Route path='/yourvideos' element={<YourVideo />} />
      <Route path='/watchlater' element={<WatchLater />} />
      <Route path='/videopage/:vid' element={<VideoPage />} />
      <Route path='/search/:searchQuery' element={<Search />} />
      <Route path='/channel/:Cid' element={<Channel setEditCreateChannelBtn={setEditCreateChannelBtn} setVideoUploadPage={setVideoUploadPage} />} />
    </Routes>
  )
}

export default AllRoutes
