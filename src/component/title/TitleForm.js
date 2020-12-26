import { ErrorMessage, Field, Form, Formik } from 'formik'
import React,{useState} from 'react'
import * as yup from 'yup'
import { http } from '../../axios'
import {useSelector} from 'react-redux'


function TitleForm({Reload}) {

    const [buttonClose, setbuttonClose] = useState(false)

    const uid = useSelector(state => state.login.uid)
   

    const initialValues = {
        title:"",
        type:""
    }
    // 64202866521
    const submit=(values,props)=>{
       
        const postData = {uid,...values}
        
        http.post("title",postData)
        .then(res=>{

            Reload(res.data)
            props.resetForm()
            setbuttonClose(true)
            
        })
        .catch(err=>{
            console.log("Error",err)
        })
    }
    const validationSchema = yup.object({
        title:yup.string().required("Enter Title"),
        type:yup.string().required("Choose Type")
    })
    return (
        <div className="w3-container">
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="w3-container ">
                        <p className="w3-center pt-3">Create New Title</p>
                    </div>
                    <div className="m-2">
                        <Field name="title" type="text" className="form-control" placeholder="Enter Title" />
                        <ErrorMessage name="title" />
                    </div>
                    <div className="m-2">
                        <Field as="select" name="type" type="text" className="form-control">
                            <option value="">Select Categry</option>
                            <option value="debit">Only Credit</option>
                            <option value="credit">Credit and Debit</option>
                        </Field>
                        <ErrorMessage name="type" />
                    </div>
                    <div className="w3-center m-2">
                        {
                            buttonClose ? (<button type="submit" data-dismiss="modal" className="btn btn-danger mb-3">Close</button>)
                            :(<button type="submit" className="btn btn-success mb-3">Submit</button>)
                        }
                    </div>    
                    
                </Form>
            </Formik>
        </div>
    )
}

export default TitleForm
