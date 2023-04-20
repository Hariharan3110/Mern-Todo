// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import AddTask from "./Components/AddTask";
// import Todolist from "./Components/Todolist";

// function App() {
//   const [toDoList, setToDoList] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/tasks")
//       .then((res) => {
//         setToDoList(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const addTask = (newTask) => {
//     setToDoList([...toDoList, newTask]);
//   };

//   const taskComplete = task=>{
//     const newList = [...toDoList]
//     newList.forEach(item=>{
//       if(item._id === task._id){
//         item.isComplete = task.isComplete
//       }
//     })
//     setToDoList(newList)
//   }
//   const removeTask =task =>{
//     const newList = toDoList.filter(item => !(item._id===task._id))
//     setToDoList(newList)

//   }

//   return (
//     <div>
//       <AddTask addTask={addTask} />
//       <Todolist toDoList = {toDoList} taskComplete={taskComplete} removeTask={removeTask}/>
//     </div>
//   );
// }

// export default App;
// src/App.js


// import "./App.scss";


 import './App.css'
import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { UserContext } from './Context/UserContext'
import { getUser } from './apiCalls/user'
import { useEffect } from 'react'
import UnProtectedRoutes from './components/UnProtectedRoutes'
import LoggedInHome from "./pages/LoggedInHome"
import ProtectedRoutes from './components/ProtectedRoutes'
import CreateTodo from './pages/CreateTodo'
import UpdateProfile from './pages/UpdateProfile'
import UpdatePassword from './pages/UpdatePassword'
import ViewTodo from './pages/ViewTodo'
import UpdateTodo from './pages/UpdateTodo'

function App() {
  const {user, setUser} = useContext(UserContext);

  useEffect(() =>{
    const fetchData = async() =>{
      const res = await getUser()
      setUser(res.data.user)
    }
    fetchData();
  },[])

  return(
    <div className='App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
      <Navbar user={user}/>
      <Routes>
        
        <Route 
          path="/" element = {user._id? <LoggedInHome />:<Home />}/>
        
        <Route 
          path='/user/register' 
          element={
          <UnProtectedRoutes loggedIn={user._id ? true : false}>
          <Register />
          </UnProtectedRoutes>
           }/>

        <Route 
          path='/user/login'
           element={<UnProtectedRoutes loggedIn={user._id ? true : false}>
          <Login />
          </UnProtectedRoutes>}/>

        <Route path='/user/profile' element={<ProtectedRoutes  loggedIn={user._id ? true : false}>
          <Profile />
          </ProtectedRoutes>}/>

          <Route path='/todo/create' element={<ProtectedRoutes  loggedIn={user._id ? true : false}>
          <CreateTodo />
          </ProtectedRoutes>}/>

          <Route path='/user/update' element={<ProtectedRoutes  loggedIn={user._id ? true : false}>
          <UpdateProfile />
          </ProtectedRoutes>}/>

          <Route path='/user/updatePassword' element={<ProtectedRoutes  loggedIn={user._id ? true : false}>
          <UpdatePassword />
          </ProtectedRoutes>}/>

          <Route path='/todo/view/:id' element={<ProtectedRoutes  loggedIn={user._id ? true : false}>
          <ViewTodo />
          </ProtectedRoutes>}/>

          
          <Route path='/todo/update/:id' element={<ProtectedRoutes  loggedIn={user._id ? true : false}>
          <UpdateTodo />
          </ProtectedRoutes>}/>
      </Routes>
      
    </div>
  )
}

export default App