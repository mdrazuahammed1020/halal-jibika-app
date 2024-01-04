
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Jobs from "../pages/Jobs/Jobs";
import Contact from "../pages/Contact/Contact";
import Favorite from "../pages/Favorite/Favorite";
import AppliedJob from "../pages/AppliedJob/AppliedJob";
import AddJob from "../pages/AddJob/AddJob";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import EditPage from "../components/EditPage/EditPage";

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
                element: (
                    <PrivateRoutes>
                        <Jobs />
                    </PrivateRoutes>
                )
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
                element: (
                    <PrivateRoutes>
                        <AddJob />
                    </PrivateRoutes>
                )
            },
            {
                path: '/editpage',
                element: <EditPage />
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
    },
    {
        path: '/edit/:jobId',
        element: <EditPage />
    }
])

export default routes;