import React from "react";
import { Link } from 'react-router-dom';

import instagramLogo from './instagram-logo.svg'

import './Topbar.css'

export default function Topbar({ openChat }) {
    return (
        <header className="topbar">
            <div className="container">
                <Link to="/" className="topbar__logo">
                    <img src={instagramLogo} alt="Instagram logo" />
                </Link>

                <div className="topbar__links">
                <Link to="/user" className="topbar__logo">
                    Usuários
                </Link>
                <Link to="/login" className="topbar__logo">
                    Login
                </Link>
                </div>

                <button className="topbar__icon" onClick={() => openChat(true)}>
                    <i className="far fa-paper-plane"></i>
                </button>
            </div>
        </header>
    )
}