import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Header from './components/nav/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import { Trips } from './pages/trip/Trips';
import { Create } from './pages/trip/Create';
import { Update } from './pages/trip/Update';
import { Delete } from './pages/trip/Delete';




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path='/create' element={<Create/>} />
            <Route path='/trips' element={<Trips/>} />
            <Route path='/update/:id' element={<Update/>} />
            <Route path='/delete/:id' element={<Delete/>} />
        </Route>
    )
)

function App({ routes }) {

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
