import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import BestSels from "../../Page/BestSels/BestSels";
import HomePage from "../../Page/HomePage/HomePage";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/SignUp/SignUp";
import BrandDetails from "../../Page/BrandDetails/BrandDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/bestsels',
                element: <BestSels></BestSels>
            },
            {
                path: '/hompages',
                element: <HomePage></HomePage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/brandDetails',
                element: <BrandDetails></BrandDetails>
            }
        ]
    }
])

export default router