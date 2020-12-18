import React from 'react'
import ViewReason from './ViewReason'
import Head from '../Head'
import Stats from '../Stats'
import New from '../New'

function Reason() {
    return (
        <div>
            <Head />
            <Stats credit="48754" debit="54875" available="58784"  />
            <New target="#reasonform" />
            <ViewReason />
        </div>
    )
}

export default Reason
