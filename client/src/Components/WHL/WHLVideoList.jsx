import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideoList({page, videoList, CurrentUser}) {
  // console.log(videoList)
  return (
    <>
      { CurrentUser? (<> 
        {
          videoList?.data?.filter(q=>q?.Viewer===CurrentUser).reverse().map(m=>{
            return(
                <>
                    <ShowVideoList videoId={m?.videoId} key={m?._id} />
                </>
            )
        })
        }
      </>) : (<> 
        <h2 style={{color:"white"}}> Please Login to Watch Your {page} </h2>
      </>)
      }
    </>
  )
}

export default WHLVideoList
