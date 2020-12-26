import React,{useEffect} from 'react';
import Login from './login'

import { useDispatch } from 'react-redux'
import { auth } from './firebase';
import { Logout, LoginData } from './redux/Action';







function App() {

  const dispatch = useDispatch()
  
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
