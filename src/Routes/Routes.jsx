import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './Home';
import { User } from './User';
import { Login } from './Login';

import { Topbar } from '../components/';

export function RoutesController() {
    return (
        <React.Fragment>

            <Topbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user/:id" element={<User />} />
            </Routes>
        </React.Fragment>
    );
}