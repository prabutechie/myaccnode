import React,{useState} from 'react'
import ViewReason from './ViewReason'
import Head from '../Head'
import Stats from '../Stats'
import New from '../New'

function Reason() {
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
            {/* <Stats credit="48754" debit="54875" available="58784"  /> */}
            <New target="#reasonform" Reload={Reload} />
            <ViewReason reload={reload} Reload={Reload} />
        </div>
    )
}

export default Reason
