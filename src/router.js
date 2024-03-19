import React from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: 'home',
                element: <Home/>

            },
            {
                path: 'product',
                element: <Product/>

            }
        ]
    },
])
const Router = () => {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default Router;