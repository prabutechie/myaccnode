import React from 'react'
import TitleForm from './title/TitleForm'
import ReasonForm from './reason/ReasonForm'

function New({target}) {
    return (
        <div className="w3-right w3-container">
            <button className="m-3 btn w3-blue" data-toggle="modal" data-target={target}>+New</button> 

            <div className="modal" id="titleform">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <TitleForm />
                    </div>
                </div>
            </div>

            <div className="modal" id="reasonform">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <ReasonForm />
                    </div>
                </div>
            </div>

        </div>        
    )
}

export default New
