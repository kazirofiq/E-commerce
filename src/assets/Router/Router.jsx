import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import BestSels from "../../Page/BestSels/BestSels";
import HomePage from "../../Page/HomePage/HomePage";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/SignUp/SignUp";
import BrandDetails from "../../Page/BrandDetails/BrandDetails";
import Layoute from "../../Page/CetagoriesLayoute/Layoute/Layoute";
import Dashboard from "../../Page/CetagoriesLayoute/Dashboard/Dashboard";
import Bloglayoute from "../../Page/BlogLayoute/Bloglayoute/Bloglayoute";
import BlogDashboard from "../../Page/BlogLayoute/BlogDashboard/BlogDashboard";
import Fashionhut from "../../Page/BlogLayoute/Fashionhut/Fashionhut";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
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
    {
        path: '/blogdashboard',
        element: <Bloglayoute></Bloglayoute>,
        children: [
          {
            path: '/blogdashboard',
            element: <BlogDashboard></BlogDashboard>
          },
          
          {
            path: '/blogdashboard/fashinhut',
            element: <Fashionhut></Fashionhut>
          },
          
          
        ]
      },
])

export default router