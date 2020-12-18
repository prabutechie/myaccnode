import React from 'react'
import './index.css'

function Stats({credit,debit,available}) {
    return (
        <div className="w3-container w3-light-gray" id="sroot">
            <div className="w3-card-4 m-3 w3-purple">
                <p className="w3-center pt-2 m-0">${credit}</p>
                <p className="p-2 m-0 small">Total Credits</p>
            </div>
            <div className="w3-card-4 m-3 w3-indigo">
                <p className="w3-center pt-2 m-0">${debit}</p>
                <p className="p-2 m-0 small">Total Debits</p>
            </div>
            <div className="w3-card-4 m-3 w3-green">
                <p className="w3-center pt-2 m-0">${available}</p>
                <p className="p-2 m-0 small">Total Available</p>
            </div>
        </div>
    )
}

export default Stats
