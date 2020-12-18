import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'

function ReasonForm() {

    const initialValues = {
        reason:"",
        amount:"",
        action:""
    }
    const submit=(values,props)=>{
        console.log(values)
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
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
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
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}

export default ReasonForm
