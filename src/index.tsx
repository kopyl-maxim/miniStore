import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from './App';
import AboutUsPage from './pages/AboutUsPage';
import MainPage from './pages/MainPage';
import BlogPage from './pages/BlogPage';
import CardPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { ContactPage } from '@mui/icons-material';
import ShopPage from './pages/ShopPage';
import SinglePostPage from './pages/SinglePostPage';
import SingleProductPage from './pages/SingleProductPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/aboutAsPage',
        element: <AboutUsPage />,
    },
    {
        path: '/blogPage',
        element: <BlogPage />,
    },
    {
        path: '/cardPage',
        element: <CardPage />,
    },
    {
        path: '/checkoutPage',
        element: <CheckoutPage />,
    },
    {
        path: '/contactPage',
        element: <ContactPage />,
    },
    {
        path: '/shopPage',
        element: <ShopPage />,
    },
    {
        path: '/singlePostPage',
        element: <SinglePostPage />,
    },
    {
        path: '/singleProductPage',
        element: <SingleProductPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
    </React.StrictMode>,
);