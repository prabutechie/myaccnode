import React, { useState, useEffect } from 'react'
import Head from '../Head'
import New from '../New'
import Stats from '../Stats'
import ViewTitle from './ViewTitle'
import { http } from '../../axios'
import {useSelector} from 'react-redux'


function Title() {

    const [reload, setReload] = useState()
    const [stats, setStats] = useState({})
    const [data, setData] = useState([])

    const Reload = (data) => {
        setReload(data)
    }
    const TitleStats = (data) => {
        setStats(data)
    }

    const uid = useSelector(state => state.login.uid)

    useEffect(() => {
        http.get("title",{params:{uid:uid}})
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload,uid])

    useEffect(()=>{
        let debit = 0, credit = 0, available = 0, x
        for (x of data) {
            debit += x.debit
            credit += x.credit
            available += x.available
        }
        const stats = {
            debit: debit,
            credit: credit,
            available: available
        }
       
        setStats(stats)
    },[data])

    


    return (
        <div>
            <Head />
            <Stats stats={stats} />
            <New target="#titleform" Reload={Reload} />
            <ViewTitle Reload={Reload} reload={reload} TitleStats={TitleStats} data={data} />
        </div>
    )
}

export default Title
