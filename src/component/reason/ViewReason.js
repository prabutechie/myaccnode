
import React, { useState } from 'react'

import { Edit, Delete } from '@material-ui/icons'
import { http } from '../../axios'
import './index.css'
import ReasonForm from './ReasonForm'
import { MyDate, MyTime } from '../../Custom/MyDate'

function ViewReason({ Reload,data,title }) {

    
    

    const [edit, setEdit] = useState("")
    
    const [editData, setEditData] = useState()
    const [update, setUpdate] = useState(false)


    const EditButton = (id, data) => {
        const { reason, amount, action } = data
        setEdit(id)
        setEditData({ reason, amount, id, action })
        setUpdate(true)
       
    }

    const CancelEdit = (data) => {
        setEdit("")
        setUpdate(data)
    }

    const DeleteReason = (reason,title) => {
        if (window.confirm("Comform to Delete")) {
            http.delete("reason", { params: { reason,title } })
                .then(res => {
                    Reload(res.data)
                })
                .catch(err=>{
                    console.log("Error",err)
                })
        }

    }

    const Reset=()=>{
        const initialValues = {
            reason:"",
            amount:"",
            action:""
        }
        setEditData(initialValues)
    }

    let available = 0



    return (
        <div className="w3-container">
            <p className="w3-center w3-text-pink"><b>{title}</b></p>
            {
                data.map((data, index) => {
                    
                    if(data.action === "debit"){
                        available -=data.amount 
                    }
                    else{
                        available +=data.amount 
                    }

                    return (
                        <div key={index}>
                            {
                                edit === data._id ? (

                                    <div className="card mb-3" id="troot"  >
                                        {editData && <ReasonForm initialValues={editData} CancelEdit={CancelEdit} Reload={Reload} Reset={Reset} update={update} />}
                                    </div>
                                )
                                    :
                                    (
                                        <div className="card mb-3" id="troot"  >
                                            <div id="ttop">
                                                <p className="pl-1 pt-1 pr-1 w3-right small w3-text-gray m-0">{MyTime(data.date)}</p>
                                                <p className="pr-1 pt-1 pr-1 w3-right small w3-text-gray m-0">{MyDate(data.date)}</p>
                                            </div>
                                            <div id="vrmiddle">
                                                <div id="vrmiddle_left">
                                                    <p className="pl-3 w3-left m-0">{data.reason}</p>
                                                </div>
                                                <div id="vrmiddle_right" >
                                                    <button onClick={() => EditButton(data._id, data)}><Edit className="w3-text-teal" /></button>
                                                    <button onClick={()=>DeleteReason(data._id,data.title)}><Delete className="w3-text-red" /></button>
                                                </div>
                                            </div>


                                            <div id="tdown" className="w3-light-gray">
                                                <div>
                                                    {
                                                        data.action === "credit" ?
                                                            (
                                                                <p className="w3-text-green">+{data.amount}</p>
                                                            )
                                                            :
                                                            (
                                                                <p className="w3-text-red">-{data.amount}</p>
                                                            )
                                                    }
                                                </div>

                                                <div>
                                                    <p className="w3-text-blue">{available}</p>
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






