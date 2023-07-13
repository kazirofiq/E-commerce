import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import BestSels from "../../Page/BestSels/BestSels";
import HomePage from "../../Page/HomePage/HomePage";

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
        ]
    }
])

export default router