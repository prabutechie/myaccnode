import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { http } from '../../axios'
import { useSelector } from 'react-redux'

function ReasonForm({ initialValues, CancelEdit, Reload, Reset, update }) {

    const title = useSelector(state => state.titleid)

    

    const [buttonStatus, setbuttonStatus] = useState("Cancel")



    const submit = (values, props) => {
        const postData = { title, ...values }

        if (update) {
            http.put("reason", postData)
                .then(res => {
                    Reload(res.data)
                    Reset()
                    setbuttonStatus("Close")
                    
                })
                .catch(err => {
                    console.log("Error", err)
                })
        }
        else {
            http.post("reason", postData)
                .then(res => {
                    Reload(res.data)
                    setbuttonStatus("Close")
                })
                .catch(err => {
                    console.log("Error", err)
                })
        }

        props.resetForm()
    }
    const validationSchema = yup.object({
        reason: yup.string().required("Enter Reason"),
        amount: yup.number().required("Enter Number"),
        action: yup.string().required("Choose Method")
    })

    const CancelButton=()=>{
        
        setbuttonStatus("Cancel")
        CancelEdit(false)
    }

    return (
        <div className="w3-container">
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                <div>
                    <Form>
                        <div>
                            {
                                update ? (<p className="w3-center pt-3 w3-text-yellow">Update Reason</p>) : (<p className="w3-center pt-3 w3-text-green">Reason Entry</p>)
                            }

                        </div>
                        <div>
                            <Field name="reason" type="text" className="form-control mt-2" placeholder="Enter Reason" />
                            <ErrorMessage name="reason" />
                        </div>
                        <div>
                            <Field name="amount" type="number" className="form-control mt-2" placeholder="Enter Amount" />
                            <ErrorMessage name="amount" />
                        </div>
                        <div>
                            <Field name="action" as="select" className="form-control mt-2" >
                                <option value="">Select Method</option>
                                <option value="debit">Debit</option>
                                <option value="credit">Credit</option>
                            </Field>
                            <ErrorMessage name="action" />
                        </div>
                        <div className="w3-center">

                            {buttonStatus === "Cancel" ? (update ? (
                                <button type="submit" className="btn btn-success mt-2 mb-3">Update</button>
                            ) : (
                                    <button type="submit" className="btn btn-success mt-2 mb-3">Submit</button>
                                )) : (null)
                            }

                            <button type="button" className="btn btn-danger mt-2 mb-3 ml-2" data-dismiss="modal" onClick={CancelButton}>{buttonStatus}</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}

export default ReasonForm
