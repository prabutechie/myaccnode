import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { useDispatch } from 'react-redux'
import { setTitle } from '../../redux/Action'
import { http } from '../../axios'
import { MyDate, MyTime } from '../../Custom/MyDate'
import { CheckCircle, Delete, Edit } from '@material-ui/icons'

function ViewTitle({ reload, TitleStats, Reload }) {

    const [data, setData] = useState([])
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState("")
    useEffect(() => {
        http.get("title")
            .then(res => {
                setData(res.data)
                StatsMethod(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload])

    const StatsMethod = (resdata) => {
        let debit = 0, credit = 0, available = 0, x
        for (x of resdata) {
            debit += x.debit
            credit += x.credit
            available += x.available
        }
        const stats = {
            debit: debit,
            credit: credit,
            available: available
        }
        console.log(stats)
        TitleStats(stats)
    }

    const EditTitle = (e) => {
        e.preventDefault()
        http.put("title", { id: edit, title: editTitle })
            .then(res => {
                Reload(`r${edit}`)
                setEdit("")
            })
            .catch(err => {
                console.log("Error", err)
            })
    }

    const DeleteTitle = (id) => {
        if (window.confirm("Conform to Delete")) {
            http.delete("title", { params: { id: id } })
                .then(res => {
                    Reload(id)
                })
                .catch(err => {
                    console.log("Error", err)
                })
        }

    }

    const EditButton = (id, title) => {
        setEdit(id)
        setEditTitle(title)
    }


    const dispatch = useDispatch()
    return (
        <div className="w3-container">

            {
                data.map((data, index) => {
                    return (
                        // <Link key={index} to="/reason" id="link" onClick={()=>dispatch(setTitle(data.title))} >
                        <div className="card mb-3" id="troot" key={index} >

                            <div id="ttop">
                                <p className="pl-1 pt-1 pr-1 w3-right small w3-text-gray m-0">{MyTime(data.date)}</p>
                                <p className="pr-1 pt-1 pr-1 w3-right small w3-text-gray m-0">{MyDate(data.date)}</p>
                            </div>
                            <div id="middle">
                                <div className="middle_left">
                                    {
                                        edit === data._id ? (
                                            <form className="form-inline">
                                                <div id="ml_form">
                                                    <div id="ml_input">
                                                        <input type="text" placeholder="Enter Title" id="ip" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                                                    </div>
                                                    <div id="ml_btn">
                                                        <button type="submit" onClick={EditTitle}>
                                                            <CheckCircle className="w3-text-green" />
                                                        </button>
                                                    </div>
                                                </div>


                                            </form>
                                        )
                                            :
                                            (
                                                <Link key={index} to="/reason" id="link" onClick={()=>dispatch(setTitle(data.title))} >
                                                    <p className="pl-3 w3-left m-0">{data.title}</p>
                                                </Link>
                                            )
                                    }
                                </div>
                                <div className="middle_right">
                                    <p className="pr-3" onClick={() => EditButton(data._id, data.title)}><Edit /></p>
                                    <p onClick={() => DeleteTitle(data._id)}><Delete /></p>
                                </div>


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
                        // </Link>
                    )
                })
            }

        </div>
    )
}

export default ViewTitle
