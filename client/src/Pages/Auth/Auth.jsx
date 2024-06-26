import React from 'react'
import './Auth.css'
import { GoogleLogout } from 'react-google-login'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';
import { Link } from 'react-router-dom';

function Auth({User, setAuthBtn, setEditCreateChannelBtn}) {

    const dispatch = useDispatch();

    const onLogoutSuccess = () => {
        dispatch(setCurrentUser(null))
        alert("Log Out SuccessFully")
    }

  return (
    <div className='Auth_Container' onClick={()=>setAuthBtn(false)}>
        <div className='Auth_Container2'>
            <p className='User_Details'>
                <div className='Channel_Logo_App'>
                    <p className='fstChar_Logo_App'>
                        {
                            User?.result.name ? (
                            <>
                            {
                                User?.result.name.charAt(0).toUpperCase()
                            }
                            </> ) :(
                            <>
                            {
                                User?.result.email.charAt(0).toUpperCase()
                            }
                            </>
                            )
                        }
                    </p>
                </div>
                <div className='email_Auth'>
                    {
                        User?.result.email
                    }
                </div>
            </p>
            <div className="btns_Auth">
                {
                    User?.result.name ? <>
                        {
                            <Link to={`/channel/${User?.result._id}`} className='btn_Auth' >
                                 Your Channel
                            </Link>
                        }
                    </> : <>
                        <input type="submit" className='btn_Auth' value="Create Your Channel" onClick={()=>setEditCreateChannelBtn(true)}/>
                    </>
                }
            <div>
                <GoogleLogout
                clientId='554790547440-2gr8j5h74fpf299d4e6rp91l8eku1o6n.apps.googleusercontent.com'
                onLogoutSuccess={onLogoutSuccess}
                render={(renderProps)=>(
                    <div onClick={renderProps.onClick} className='btn_Auth'> 
                        <BiLogOut />
                        Log Out
                    </div>
                )}
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Auth
