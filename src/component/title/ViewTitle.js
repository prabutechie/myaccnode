import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import {useDispatch} from 'react-redux'
import {setTitle} from '../../redux/Action'

function ViewTitle() {

    const data = [
        {
            title: "Tourist Packages i am legend of tommorow so you shutup",
            credit: "5986",
            debit: "8784",
            available: "58745"
        },
        {
            title: "Tourist Karnataka",
            credit: "5986",
            debit: "8784",
            available: "58745"
        }
    ]
    const dispatch = useDispatch()
    return (
        <div className="w3-container">
            
            {
                data.map((data,index) => {
                    return (
                        <Link key={index} to="/reason" id="link" onClick={()=>dispatch(setTitle(data.title))} >
                            <div className="card mb-3" id="troot" >                           
                                
                                <div id="ttop">
                                    <p className="pl-1 pt-1 pr-1 w3-right small w3-text-gray m-0">07:00 am</p>
                                    <p className="pr-1 pt-1 pr-1 w3-right small w3-text-gray m-0">29-mon-2020</p>
                                </div>
                                <div id="middle">
                                   <p className="pl-3 w3-left m-0">{data.title}</p>
                                </div>
                                <div id="tdown" className="w3-light-gray">
                                    <div>
                                        <p>Credit : {data.credit}</p>
                                    </div>
                                    <div>
                                        <p>Debit : {data.debit}</p>
                                    </div>
                                    <div>
                                        <p>Available : {data.available}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default ViewTitle
