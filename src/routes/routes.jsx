
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Jobs from "../pages/Jobs/Jobs";
import Contact from "../pages/Contact/Contact";
import Favorite from "../pages/Favorite";
import AppliedJob from "../pages/AppliedJob/AppliedJob";
import AddJob from "../pages/AddJob/AddJob";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/jobs',
                element: <Jobs />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            
            {
                path: '/favorite',
                element: <Favorite />
            },
            {
                path: '/appliedjobs',
                element: <AppliedJob />
            },
            {
                path: '/addjob',
                element: <AddJob />
            }
           
        ],
        
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: 'login',
        element: <Login />
    }
])

export default routes;