import React, { useState } from 'react'
import './Comments.css'
import DisplayComments from './DisplayComments';
import { useDispatch, useSelector } from 'react-redux'
import { postComment } from '../../actions/comments';

function Comments({videoId}) {

  const [ commenttext, setCommentText] = useState("");
  const CurrentUser = useSelector(state=>state?.currentUserReducer)
  const commentsList = useSelector(s=>s.commentReducer)
  const dispatch = useDispatch();

  // const commentsList = [
  //   {
  //   _id : "1",
  //   commentBody : "hello",
  //   userCommented : "abc"
  //   },
  //   {
  //   _id : "2",
  //   commentBody : "hii",
  //   userCommented : "xyz"
  //   },
  // ]

  const handleOnSubmit =(e)=>{
    e.preventDefault();
    if(CurrentUser){
      if(!commenttext){
        alert('Please Type your comments !')
      }else{
        dispatch(postComment({
          videoId: videoId,
          userId: CurrentUser?.result._id,
          commentBody: commenttext,
          userCommented: CurrentUser?.result.name,
        }))
      setCommentText('');
      }
    }else{
      alert('Please Login to post your comment !')
    }
  }

  return (
    <>
        <form className='comments_sub_form_Comments' onSubmit={handleOnSubmit}>
            <input type="text" value={commenttext} placeholder='Add Comment...' className='comment_ibox' onChange={e=>setCommentText(e.target.value)} />
            <input type="submit" value="add" className='comments_add_btn_Comments'/>
        </form>
        <div className="display_comment_container">
          {
            commentsList?.data?.filter(q=>videoId === q?.videoId).reverse().map(m=>{
              return(
                <DisplayComments 
                  cId = {m._id}
                  userId = {m.userId}
                  commentBody = {m.commentBody}
                  commentOn = {m.commentOn}
                  userCommented = {m.userCommented}
                />
              )
            })
          }
        </div>
    </>
  )
}

export default Comments
