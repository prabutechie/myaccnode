import React from 'react'
import Head from '../Head'
import New from '../New'
import Stats from '../Stats'
import ViewTitle from './ViewTitle'

function Title() {
    return (
        <div>
            <Head />
            <Stats credit="48754" debit="54875" available="58784"  />
            <New target="#titleform" />
            <ViewTitle />
        </div>
    )
}

export default Title
