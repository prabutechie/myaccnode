import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import {http} from '../../axios'
import {useSelector} from 'react-redux'

function ReasonForm({editData,CancelEdit,Reload}) {

    const title = useSelector(state => state.title)

    console.log("editdata",editData)
    const initialValues = {
        reason:"",
        amount:"",
        action:""
    }
    const submit=(values,props)=>{
        const postData = {title,...values}
        if(editData){
            http.put("reason",values)
            .then(res=>{
                Reload(res.data)
            })
            .catch(err=>{
                console.log("Error",err)
            })
        }
        else{
            http.post("reason",postData)
            .then(res=>{
                Reload(res.data)
            })
            .catch(err=>{
                console.log("Error",err)
            })
        }
        
        props.resetForm()
    }
    const validationSchema = yup.object({
        reason:yup.string().required("Enter Reason"),
        amount:yup.number().required("Enter Number"),
        action:yup.string().required("Choose Method")
    })

    return (
        <div className="w3-container">
            <Formik
                initialValues={editData || initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                <div>
                    <Form>
                        <div>
                            <p className="w3-center pt-3">Reason Entry</p>
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
                            <button type="submit" className ="btn btn-success mt-2 mb-3">Submit</button>
                            <button type="button" className ="btn btn-danger mt-2 mb-3 ml-2" data-dismiss="modal" onClick={CancelEdit}>Cancel</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}

export default ReasonForm
