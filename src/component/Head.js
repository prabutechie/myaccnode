import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Head() {
    const login = useSelector(state => state.login)
    return (
        <div className="w3-container w3-teal" id="head">
            <div id="headtitle">
                <p className="w3-left">MyAcc</p>
            </div>

            <div id="headprofile">
                <p className="pt-3 pr-2">{login.username}</p>
                <Link to="/profile">
                    <Avatar />
                </Link>
            </div>




        </div>
    )
}

export default Head
