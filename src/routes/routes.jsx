
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Jobs from "../pages/Jobs";
import Contact from "../pages/Contact";
import Favorite from "../pages/Favorite";
import AppliedJob from "../pages/AppliedJob";
import AddJob from "../pages/AddJob/AddJob";
import SignUp from "../pages/SignUp";

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
                path: '/signup',
                element: <SignUp />
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
           
        ]
    }
])

export default routes;