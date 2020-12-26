import React,{useEffect} from 'react';
import Login from './login'

import { useDispatch } from 'react-redux'
import { auth } from './firebase';
import { Logout, LoginData } from './redux/Action';



// console.log("user",user)



function App() {

  const dispatch = useDispatch()

  // console.log("auth",auth.currentUser)
  const profile = auth.currentUser
  console.log("profile",profile)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        
        dispatch(
          LoginData({
            username: user.displayName,
            email: user.email,
            password: user.password,
            uid:user.uid,
            name:user.name
          })
        )
      }
      else {
        console.log("else")
        dispatch(Logout())
      }
    })
  }, [])


  return (
    <div>
      
        <Login />
      
    </div>
  );
}

export default App;
