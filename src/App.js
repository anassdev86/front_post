import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";





const App = () => {
  const [token, setToken] = useState(localStorage.secrut_tokken);
  const [user, setUser ] = useState({});

   

   const router = createBrowserRouter([
    {
      path: '/',
      element: !token ? (<><div>Hello go <Link to='/login' >enter</Link></div></>)
      : <Navigate  to='/profil' replace={true}/>
    },
    {
       path:"/profil",
      // element: < Home />
      element: !token ? <Navigate to='/signup' replace={true} /> 
      : <Home setUser = {setUser} /> 
    },
    {
      path: '/createpost',
      element: <Post user = {user}/>
    },
    {
      path: '/signup',
      element: !token ? <Signup setUser = {setUser}/> : <Navigate to='/' replace={true} />
    },
    {
      path: '/login',
      element: !token ? <Login  setUser = {setUser}/> : <Navigate to='/' replace={true} />
    }
  ])



  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
