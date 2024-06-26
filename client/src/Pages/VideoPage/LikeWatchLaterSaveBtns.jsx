import React, { useEffect, useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri'
import './LikeWatchLaterSaveBtns.css'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addTolikedVideo, deletelikedVideo } from '../../actions/likedVideo'
import { addTowatchLater, deleteWatchLater } from '../../actions/watchLater'

function LikeWatchLaterSaveBtns({vv, vid}) {

    const CurrentUser = useSelector(state=>state?.currentUserReducer)
    const dispatch = useDispatch();
    const [savevideo, setSaveVideo] = useState(false);
    const [dislikebtn, setDisLikeBtn] = useState(false);
    const [likebtn, setLikeBtn] = useState(false);
    const likedVideoList = useSelector(state=>state.likedVideoReducer)
    const watchLaterList = useSelector(state=>state.watchLaterReducer)

    useEffect(()=>{
        likedVideoList?.data?.filter(q => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m=> setLikeBtn(true));
        watchLaterList?.data?.filter(q => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m=> setSaveVideo(true));
    },[])

    const toggleSavedVideo =()=> {
        if(CurrentUser){
            if(savevideo){
                setSaveVideo(false);
                dispatch(deleteWatchLater({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id,
                }))
            }
            else{
                setSaveVideo(true);
                dispatch(addTowatchLater({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id,
                }))
            }
        }
        else{
            alert('Please Login Save the Video !')
        }
    }
    const toggleLikeBtn =(e, lk)=> {
        if(CurrentUser){
            if(likebtn){
                setLikeBtn(false);
                dispatch(
                    likeVideo({
                        id: vid,
                        Like: lk - 1,
                    })
                )
                dispatch(deletelikedVideo({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id,
                }))
            }
            else{
                setLikeBtn(true);
                setDisLikeBtn(false);
                dispatch(
                    likeVideo({
                        id: vid,
                        Like: lk + 1,
                    })
                )
                dispatch(addTolikedVideo({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id,
                }))
            }
        }
        else{
            alert('Please Login to give Like')
        }
    }
    const toggleDisLikeBtn =(e, lk)=> {
        if(CurrentUser){
            if(dislikebtn){
                setDisLikeBtn(false);
            }
            else{
                setDisLikeBtn(true);
                setLikeBtn(false);
                if(likebtn){
                    dispatch(
                        likeVideo({
                            id: vid,
                            Like: lk - 1,
                        })
                    )
                    dispatch(deletelikedVideo({
                        videoId: vid,
                        Viewer: CurrentUser?.result._id,
                    }))
                }
             }
        }
        else{
            alert('Please Login to give Like')
        }
    }
  return (
    <div className='btns_const_VideoPage'>
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>
      <div className="btn_VideoPage">
        <div className='like_VideoPage' onClick={(e)=>toggleLikeBtn(e, vv.Like)}>
            {
                likebtn ? (
                <> 
                    <AiFillLike size={22} className='btns_VideoPage'/>
                </>
                ) : ( 
                <>
                    <AiOutlineLike size={22} className='btns_VideoPage'/>
                </>
                )
            }
            <b>{vv?.Like}</b>
        </div>
        <div className='like_VideoPage' onClick={(e)=>toggleDisLikeBtn(e, vv.Like)}>
            {
                dislikebtn ? (
                <> 
                    <AiFillDislike size={22} className='btns_VideoPage'/>
                </>
                ) : ( 
                <>
                    <AiOutlineDislike size={22} className='btns_VideoPage'/>
                </>
                )
            }
            <b>DISLIKE</b>
        </div>
        <div className='like_VideoPage' onClick={()=>toggleSavedVideo()}>
            {
                savevideo ? (
                <> 
                    <MdPlaylistAddCheck size={22} className='btns_VideoPage'/>
                    <b>Saved</b>
                </>
                ) : ( 
                <>
                    <RiPlayListAddFill size={22} className='btns_VideoPage'/>
                    <b>Save</b>
                </>
                )
            }
        </div>
        <div className='like_VideoPage'>
            <> 
                <RiHeartAddFill size={22} className='btns_VideoPage'/>
                <b>Thanks</b>
            </>
        </div>
        <div className='like_VideoPage'>
            <> 
                <RiShareForwardLine size={22} className='btns_VideoPage'/>
                <b>Share</b>
            </>
        </div>
      </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns
