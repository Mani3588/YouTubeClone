import React from 'react'
import WHL from '../../Components/WHL/WHL'
import { useSelector } from 'react-redux';

function LikedVideo() {

  const likedVideoList = useSelector(state=>state.likedVideoReducer)

  // const likedvideo = [
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
    <WHL page={"Liked Videos"} videoList={likedVideoList}/>
  )
}

export default LikedVideo
