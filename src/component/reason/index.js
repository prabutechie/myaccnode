import React, { useState, useEffect } from 'react'
import ViewReason from './ViewReason'
import Head from '../Head'
import Stats from '../Stats'
import New from '../New'
import { useSelector } from 'react-redux'
import { http } from '../../axios'

function Reason() {
    const [reload, setReload] = useState()
    const [stats, setStats] = useState({})
    const [data, setData] = useState([])

    const title = useSelector(state => state.title)
    const titleid = useSelector(state => state.titleid)

    const Reload = (d) => {
        setReload(d)
    }

    useEffect(() => {
        http.get("reason", { params: { title: titleid } })
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log("Error", err)
            })
    }, [reload, titleid])

    const initialValues = {
        reason: "",
        amount: "",
        action: ""
    }

    useEffect(() => {
        let debit = 0, credit = 0, x
        for (x of data) {
            if (x.action === "debit") {
                debit += x.amount
            }
            if (x.action === "credit") {
                credit += x.amount
            }

        }
        const stats = {
            debit: debit,
            credit: credit,
            available: credit - debit
        }
        console.log(stats)
        setStats(stats)
    }, [data])

    return (
        <div>
            <Head />
            <Stats stats={stats} />
            <New target="#reasonform" Reload={Reload} initialValues={initialValues} />
            <ViewReason Reload={Reload} data={data} title={title} />
        </div>
    )
}

export default Reason
