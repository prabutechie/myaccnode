import React from 'react'
import { auth } from '../firebase'
import { Logout } from '../redux/Action'
import {useDispatch} from 'react-redux'
import { Avatar } from '@material-ui/core'
import { ExitToApp, VerifiedUser,DeleteForever } from '@material-ui/icons'


function Profile() {
    const user = auth.currentUser

    const dispatch = useDispatch()
    const LogOut = ()=>{
        auth.signOut()
        dispatch(Logout())
    }

    const Verify = ()=>{
        user.sendEmailVerification().then(()=>alert("Successfully send Link")).catch(err=>alert(err))
    }

    const Delete = ()=>{
        user.delete().then(()=>alert("Deleted Successfully")).catch(err=>alert(err))
    }

    return (
        <div className="w3-container " id="profile">
            <div className="card mt-3">
                <div className="w3-container w3-center mt-3" id="profileinfo">
                    <Avatar className="w3-center" id="avatar" />
                    <p>{user.displayName}</p>                    
                </div>
                <hr/>
                <div id="profiledown">

                    <div>
                        <VerifiedUser className="w3-text-green" /> 
                        {
                            user.emailVerified ? (
                                <p className="pt-3 pl-3 w3-text-yellow" onClick={Verify}>Verify</p>
                            ):(
                                <p className="pt-3 pl-3 w3-text-green" onClick={Verify}>Email Verified Successfully</p>
                            )
                        }
                        
                    </div>
                    <div>
                        <ExitToApp className="w3-text-pink" />
                        <p className="pt-3 pl-3 w3-text-pink" onClick={LogOut}>Logout</p>
                    </div>
                    <div>                        
                        <DeleteForever className="w3-text-red" />
                        <p className="pt-3 pl-3 w3-text-red" onClick={Delete}>Delete Account</p>
                    </div>
                    
                    
                </div>
            </div>  
        </div>
    )
}

export default Profile
