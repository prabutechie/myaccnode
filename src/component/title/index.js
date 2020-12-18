import React,{useState} from 'react'
import Head from '../Head'
import New from '../New'
import Stats from '../Stats'
import ViewTitle from './ViewTitle'


function Title() {

    const [reload,setReload] = useState()
    const [stats,setStats] = useState({})
    const Reload = (data)=>{
        setReload(data)
    }
    const TitleStats=(data)=>{
        setStats(data)
    }
    return (
        <div>
            <Head />
            <Stats stats={stats} />
            <New target="#titleform" Reload={Reload} />
            <ViewTitle reload={reload} TitleStats={TitleStats} />
        </div>
    )
}

export default Title
