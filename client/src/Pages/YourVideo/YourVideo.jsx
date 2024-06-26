import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import './YourVideo.css'
import { useSelector } from 'react-redux'

function YourVideo() {

  const CurrentUser = useSelector(state=>state?.currentUserReducer)

  const vids = useSelector(state => state.videoReducer)?.data?.filter(q=>q?.videoChannel === CurrentUser?.result._id).reverse();



  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Chanel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     Uploader: "abc",
  //     description: "description of video 1"
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Chanel: "cdd",
  //     title: "video 2",
  //     Uploader: "abc",
  //     description: "description of video 2"
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploader: "abc",
  //     description: "description of video 3"
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 4",
  //     Uploader: "abc",
  //     description: "description of video 3"
  //   },
  //   {
  //     _id: 5,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 5",
  //     Uploader: "abc",
  //     description: "description of video 3"
  //   },
  //   {
  //     _id: 6,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 6",
  //     Uploader: "abc",
  //     description: "description of video 3"
  //   }
  // ];

  return (
    <div className='Container_Pages_App'>
      <LeftSideBar />
      <div className="Container2_Pages_App">
        <div className="container_Yourvideo">
            <h1>Your Videos</h1>
            {
              CurrentUser ? (<>
                <ShowVideoGrid vids={vids} />
              </>) : (<>
                <h3>Please Login to see Your Uploaded Videos</h3>
              </>)
            }
          </div>
      </div>
    </div>
  )
}

export default YourVideo
