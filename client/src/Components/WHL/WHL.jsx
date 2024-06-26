import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import './WHL.css'
import WHLVideoList from './WHLVideoList'
import { useDispatch, useSelector } from 'react-redux'
import { clearHistory } from '../../actions/history'

function WHL({page, videoList}) {

    const CurrentUser = useSelector(state=>state?.currentUserReducer)
    const dispatch = useDispatch();
    

    const handelClearHistory = () => {
        if(CurrentUser){
            dispatch(clearHistory({
                userId: CurrentUser?.result._id
            }))
        }
    }

  return (
    <div className='Container_Pages_App'>
        <LeftSideBar />
        <div className="Container2_Pages_App">
            <p className="container_whl">
                <div className="box_WHL leftside_whl">
                    <b> Your {page} Shown Here </b>
                    {
                        page === "History" &&
                        <div className="clr_history_btn" onClick={()=>handelClearHistory()}>
                            Clear History
                        </div>
                    }
                </div>
                <div className='rightside_whl'>
                    <h1>{page}</h1>
                    <div className='whl_list'>
                        <WHLVideoList 
                        CurrentUser = {CurrentUser?.result._id}
                        page={page}
                        videoList={videoList}
                        />
                    </div>
                </div>
            </p>
        </div>
    </div>
  )
}

export default WHL
