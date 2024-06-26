import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import './DescribeChannel.css'
import { useSelector } from 'react-redux'

function DescribeChannel({setEditCreateChannelBtn,setVideoUploadPage, Cid}) {

    const channels = useSelector(state=>state?.channelReducers)

    const currentChannel = channels.filter(c=>c._id === Cid)[0];

    const CurrentUser = useSelector(state=>state?.currentUserReducer)

  return (
    <div className='Container3_Channel'>
      <div className="Channel_logo_Channel">
        <b>
            {currentChannel?.name.charAt(0).toUpperCase()}
        </b>
      </div>
      <div className="Description_Channel">
        <b> {currentChannel?.name} </b>
        <p> {currentChannel?.desc} </p>
      </div>
      {
        CurrentUser?.result._id === currentChannel?._id && <>
          <p className="editbtn_Channel" onClick={()=>{setEditCreateChannelBtn(true)}}>
            <FaEdit />
            <b> Edit Channel </b>
          </p>
          <p className="uploadbtn_Channel" onClick={()=>setVideoUploadPage(true)}>
            <FaUpload />
            <b> Upload Video </b>
          </p>
        </>
      }
    </div>
  )
}

export default DescribeChannel
