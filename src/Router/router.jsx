import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import CreateJob from "../pages/CreateJob";
import MyJobs from "../pages/Myjobs";
import Login from "../component/Login";
import JobDetails from "../pages/JobDetails";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path:"/",element:<Home/>},
        {path:"/about",element:<About/>},
        {path:"/post-job",element:<CreateJob/>},
        {path:"/my-job",element:<MyJobs/>},
        {path:"/login",element:<Login/>},
        {path:"/signup",element:<Login/>},
        {path:"/job/:id",element:<JobDetails/>}

    ],
    },
  ]);

  export default router ;