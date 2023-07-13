import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import BestSels from "../../Page/BestSels/BestSels";
import HomePage from "../../Page/HomePage/HomePage";
import Layoute from "../../Page/CetagoriesLayoute/Layoute/Layoute";
import Dashboard from "../../Page/CetagoriesLayoute/Dashboard/Dashboard";

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
    },
    {
        path: '/dashboard',
        element: <Layoute></Layoute>,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
          },
          
        //   {
        //     path: '/dashboard/document',
        //     element: <Document></Document>
        //   },
          
          
        ]
      },
])

export default router