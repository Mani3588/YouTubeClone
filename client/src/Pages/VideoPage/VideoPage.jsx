import React, { useEffect } from 'react'
import './VideoPage.css'
// import vid from '../../Components/Video/vid.mp4'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../Components/Comments/Comments'
import { Link, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
import { addToHistory } from '../../actions/history'
import { viewVideo } from '../../actions/video'

function VideoPage() {

    const {vid} = useParams();
    // console.log(vid)

    // const channels = useSelector(state=>state?.channelReducers)

    // const currentChannel = channels.filter(c=>c._id === vid)[0];

    const vids = useSelector(state => state.videoReducer);
    // console.log(vids)
    const vv = vids?.data?.filter(q => q._id === vid)[0];

    const CurrentUser = useSelector(state=>state?.currentUserReducer)
    const dispatch = useDispatch();

    const handleHistory = () => {
        dispatch(
            addToHistory(
                {
                    videoId: vid,
                    Viewer: CurrentUser?.result._id,
                }
            )
        )
    }

    const handleViews = () => {
        dispatch( viewVideo({
            id: vid
        }))
    }

    useEffect(()=>{
        if(CurrentUser){
            handleHistory();
        }
        handleViews()
    }, [])

  return (
    <>
      <div className="Container_VideoPage">
        <div className="Container2_VideoPage">
            <div className="video_display_screen_videoPage">
                <video src={`http://localhost:5500/${vv?.filePath}`} className={"video_ShowVideo_VideoPage"} controls autoPlay>

                </video>
                <div className="video_details_VideoPage">
                    <div className="video_btns_title_VideoPage_cont">
                        <p className="video_title_VideoPage">{vv?.videoTitle}</p>
                        <div className="views_date_btns_VideoPage">
                            <div className="views_VideoPage">
                            {vv?.Views} views <div className="dot"></div> uploaded {moment(vv?.createdAt).fromNow()}
                            </div>
                            <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                        </div>
                    </div>
                    <Link to={`/channel/${vv?.videoChannel}`} className='channel_details_VideoPage'>
                        <b className='channel_logo_VideoPage'>
                            <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                        </b>
                        <p className="channel_name_VideoPage">{vv?.Uploader}</p>
                    </Link>
                    <div className="comments_VideoPage">
                        <h2>
                            <u>Comments</u>
                        </h2>
                        <Comments videoId={vv?._id}/>
                    </div>
                </div>
            </div>
            <div className='morevideobar_videoPage'>
                More Videos
            </div>
        </div>
      </div>
    </>
  )
}

export default VideoPage
