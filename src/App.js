import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { userActions } from './redux/actions/userActions';
import { useEffect } from 'react';
import User from './components/User';
import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from './redux/constants/userConstants';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.userList)
  const {loading,error,users}=userList
  // const userFetch =async()=>{
  //   dispatch({ type: GET_USERS_REQUEST })
  //   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   dispatch({ type: GET_USERS_SUCCESS, payload: data })
  // }
  useEffect(()=>{
    console.log(dispatch)
    dispatch(userActions())
    // userFetch()
    
  },[dispatch])
  return (
    <div className="App">
        Redux Thunk

        {loading? 
        <h2>loading....</h2>:error?<h2>{error}</h2>:
        <User users={users}/>
        
        }
    </div>
  );
} 
 
export default App;