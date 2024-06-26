import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import DrawerSideBar from './Components/LeftSideBar/DrawerSideBar';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import CreateEditChannel from './Pages/Channel/CreateEditChannel';
import { useDispatch } from 'react-redux';
import { fetchAllChannel } from './actions/channeluser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/history';

function App() {

  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(fetchAllChannel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch])

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer =()=>{
    if(toggleDrawerSidebar.display === "none"){
      setToggleDrawerSidebar({
        display: "flex"
      })
    }
    else{
      setToggleDrawerSidebar({
        display: "none"
      })
    }
  }

  const [videoUploadPage, setVideoUploadPage] = useState(false);

  const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(false)
  return (
    <Router>

      {
        videoUploadPage && <VideoUpload setVideoUploadPage={setVideoUploadPage} />
      }

      {
        EditCreateChannelBtn && <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />
      }
      <Navbar 
      setEditCreateChannelBtn = {setEditCreateChannelBtn}
      toggleDrawer = {toggleDrawer}
      />
      {
        <DrawerSideBar 
        toggleDrawer = {toggleDrawer}
        toggleDrawerSidebar = {toggleDrawerSidebar}
        />
      }
      <AllRoutes setEditCreateChannelBtn={setEditCreateChannelBtn} setVideoUploadPage={setVideoUploadPage} />
    </Router>
  );
}

export default App;
