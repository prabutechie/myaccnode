
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Edit, Delete } from '@material-ui/icons'
import { http } from '../../axios'
import './index.css'
import ReasonForm from './ReasonForm'

function ViewReason({ reload, Reload }) {

    const title = useSelector(state => state.title)
    
    const [edit, setEdit] = useState("")
    const [data, setData] = useState([])
    const [editData, setEditData] = useState()

    useEffect(() => {
        http.get("reason",{params:{title:title}})
        .then(res=>{
            setData(res.data)            
        })
        .catch(err=>{
            console.log("Error",err)
        })
    }, [reload])

    const EditButton =(id,data)=>{
        const {reason,amount,action} = data
        setEdit(id)
        setEditData({reason,amount,id,action})
        console.log(id,data)
    }

    const CancelEdit =()=>{
        setEdit("")
    }

    const DeleteReason = (id) => {
        console.log(id)
    }


    
    return (
        <div className="w3-container">
            <p className="w3-center w3-text-pink"><b>{title}</b></p>
            {
                data.map((data, index) => {
                    return (
                        <div key={index}>
                            {
                                edit === data._id ? (

                                    <div className="card mb-3" id="troot"  >
                                      {editData &&  <ReasonForm editData={editData} CancelEdit={CancelEdit}/>}
                                    </div>
                                )
                                    :
                                    (
                                        <div className="card mb-3" id="troot"  >
                                            <div id="ttop">
                                                <p className="pl-1 pt-1 pr-1 w3-right small w3-text-gray m-0">07:00 am</p>
                                                <p className="pr-1 pt-1 pr-1 w3-right small w3-text-gray m-0">29-mon-2020</p>
                                            </div>
                                            <div id="vrmiddle">
                                                <div id="vrmiddle_left">
                                                    <p className="pl-3 w3-left m-0">{data.reason}</p>
                                                </div>
                                                <div id="vrmiddle_right" >
                                                    <button onClick={() => EditButton(data._id,data)}><Edit className="w3-text-blue" /></button>
                                                    <button onClick={DeleteReason}><Delete className="w3-text-red" /></button>
                                                </div>
                                            </div>


                                            <div id="tdown" className="w3-light-gray">
                                                <div>
                                                    {
                                                        data.credit > 0 ?
                                                            (
                                                                <p className="w3-text-green">+{data.credit}</p>
                                                            )
                                                            :
                                                            (
                                                                <p className="w3-text-red">-{data.debit}</p>
                                                            )
                                                    }
                                                </div>

                                                <div>
                                                    <p className="w3-text-blue">{data.available}</p>
                                                </div>
                                            </div>
                                        </div>

                                    )
                            }
                        </div>





                    )
                })
            }
        </div>


    )

}


export default ViewReason






