import { ErrorMessage, Form, Formik, Field } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { auth } from '../firebase'
import {useDispatch} from 'react-redux'
import {LoginData} from '../redux/Action'
 
function Register({NewUser}) {

    const initialValues = {
        username: "",
        email: "",
        password: ""
    }

    const validationSchema = yup.object({
        username: yup.string().required("Enter User Name"),
        email: yup.string().required("Enter Email"),
        password: yup.string().required("Enter Password")

    })

    const dispatch = useDispatch()

    const submit = (values, props) => {
       
        const { username, email, password } = values
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {                
                userAuth.user.updateProfile({
                    displayName: username                    
                })
                    .then(() => {
                        NewUser(false)
                        dispatch(
                            LoginData({
                                username: userAuth.user.displayName,
                                email: userAuth.user.email,
                                password: userAuth.user.password,
                                uid:userAuth.user.uid,
                                name:userAuth.user.name
                            })
                        )
                    })
                    .catch(err=>{
                        alert(err)
                    })

            })
            .catch(err => {
                alert(err)
            })

    }
    

    return (
        <div className="w3-container" >
            <div className="w3-card-4 w3-pale-blue" id="registercard">
                <h4 className="w3-center w3-text-purple pt-3">New User</h4>

                <div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={submit}
                        validationSchema={validationSchema}
                    >
                        <div className="w3-container">
                            <Form>
                                <div className="mt-3">
                                    <Field name="username" type="text" className="form-control " placeholder="Enter User Name" />
                                    <ErrorMessage name="username" />
                                </div>

                                <div className="mt-3">
                                    <Field name="email" type="text" className="form-control " placeholder="Enter Email" />
                                    <ErrorMessage name="email" />
                                </div>

                                <div className="mt-3">
                                    <Field name="password" type="text" className="form-control " placeholder="Enter Password" />
                                    <ErrorMessage name="password" />
                                </div>

                                <div className="w3-center mt-3" >
                                    <button className="btn w3-purple" type="submit">SignUp</button>                                   
                                </div>
                            </Form>
                        </div>

                    </Formik>


                </div>

                <div className="w3-container mt-2">
                    <p className="w3-left w3-text-indigo" onClick={()=>NewUser(false)}>Back to Login</p>
                </div>
            </div>
        </div>
    )
}

export default Register
