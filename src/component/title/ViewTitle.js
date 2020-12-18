import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import {useDispatch} from 'react-redux'
import {setTitle} from '../../redux/Action'
import {http} from '../../axios'
import {MyDate,MyTime} from '../../Custom/MyDate'
function ViewTitle({reload,TitleStats}) {

    const [data,setData] = useState([])
    useEffect(()=>{
        http.get("title")
        .then(res=>{
            setData(res.data)
            StatsMethod(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[reload])

    const StatsMethod =(resdata)=>{
        let debit=0, credit=0, available=0,x
        for(x of resdata){
            debit+=x.debit
            credit += x.credit
            available += x.available
        }
        const stats = {
            debit:debit,
            credit:credit,
            available:available
        }
        console.log(stats)
        TitleStats(stats)
    }
    

    
    const dispatch = useDispatch()
    return (
        <div className="w3-container">
            
            {
                data.map((data,index) => {
                    return (
                        <Link key={index} to="/reason" id="link" onClick={()=>dispatch(setTitle(data.title))} >
                            <div className="card mb-3" id="troot" >                           
                                
                                <div id="ttop">
                                    <p className="pl-1 pt-1 pr-1 w3-right small w3-text-gray m-0">{MyTime(data.date)}</p>
                                    <p className="pr-1 pt-1 pr-1 w3-right small w3-text-gray m-0">{MyDate(data.date)}</p>
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
