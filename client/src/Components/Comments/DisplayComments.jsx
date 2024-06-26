import React, { useState } from 'react'
import './Comments.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';

function DisplayComments({cId, commentBody, userCommented, userId, commentOn}) {

  const [ cmtBdy, setCmtBdy] = useState("");
  const [ edit, setEdit] = useState(false);
  const [ cmtId, setCmtId ] = useState("");
  const dispatch = useDispatch();
  const CurrentUser = useSelector(state=>state?.currentUserReducer)

  const handleEdit = (ctId, ctBody) => {
    setEdit(true);
    setCmtId(ctId)
    setCmtBdy(ctBody);
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    if(!cmtBdy){
      alert('Type your Comments')
    }else{
      dispatch(editComment({
        id: cmtId,
        commentBody: cmtBdy,
      }))
      setCmtBdy('')
    }
    setEdit(false);
  }

  const handleDel = (id) => {
    dispatch(deleteComment(id))
    // console.log(id)
    // console.log(cId)
  }

  return (
    <div>
      {
        edit ? (
          <>
            <form className='comments_sub_form_Comments' onSubmit={handleOnSubmit} >
              <input type="text" placeholder='Edit Comment...' className='comment_ibox' onChange={e=>setCmtBdy(e.target.value)} value={cmtBdy} />
              <input type="submit" value="Change" className='comments_add_btn_Comments'/>
            </form>
          </>
          ) : (
                <p className="comment_body">{commentBody}</p>
              )
      }
      <p className="usercommented"> - {userCommented} commented {moment(commentOn).fromNow()}</p>
      {
        CurrentUser?.result._id === userId && (
          <p className="EditDel_DisplayComments">
            <i onClick={()=> handleEdit(cId, commentBody)}>Edit</i>
            <i onClick={()=> handleDel(cId)}>Delete</i>
          </p>
        )
      }
    </div>
  )
}

export default DisplayComments
