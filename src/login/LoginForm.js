import { ErrorMessage, Form, Formik, Field } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { auth } from '../firebase'
import {useDispatch} from 'react-redux'
import {LoginData} from '../redux/Action'
 
function LoginForm({NewUser}) {

    const initialValues = {       
        email: "",
        password: ""
    }

    const validationSchema = yup.object({       
        email: yup.string().required("Enter Email"),
        password: yup.string().required("Enter Password")

    })

    const dispatch = useDispatch()

    const submit = (values, props) => {
        console.log(values)
        const { email, password } = values
        
        auth.signInWithEmailAndPassword(email,password)
            .then((user)=>{
                console.log("username",user)
                dispatch(
                    LoginData({
                        username: user.username,
                        email: user.email,
                        password: user.password,
                        uid:user.uid,
                        name:user.name
                    })
                )
            })
            .catch(err => {
                alert(err)
            })

    }

    
    return (
        <div className="w3-container" id="loginform">
            <div className="w3-card-4 w3-pale-red" id="logincard">
                <h4 className="w3-center pt-3 w3-text-pink">Login</h4>

                <div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={submit}
                        validationSchema={validationSchema}
                    >
                        <div className="w3-container">
                            <Form>
                                <div className="mt-3">
                                    <Field name="email" type="text" className="form-control pt-2 pb-2 ip" placeholder="Enter Email" />
                                    <ErrorMessage name="email" />
                                </div>

                                <div className="mt-3">
                                    <Field name="password" type="text" className="form-control mt-2 mb-2" placeholder="Enter Password" />
                                    <ErrorMessage name="password" />
                                </div>

                                <div className="w3-center">
                                    <button className="btn w3-pink mt-2" type="submit">Login</button>                                    
                                </div>
                            </Form>
                        </div>

                    </Formik>
                </div>

                <div className="w3-container">
                    <p className="w3-left mt-3 pl-3 w3-text-indigo" onClick={()=>NewUser(true)}>New User</p>
                </div>

               
                <br />
            </div>
        </div>
    )
}

export default LoginForm
