import React from "react";
import './Stories.css';
import { Avatar } from "../Avatar";

export default function Stories() {
    return (
        <div className="container">
            <section className="stories">
                <div className="stories__container">
                    <Avatar image="https://avatarfiles.alphacoders.com/125/thumb-125043.jpg" size="large" selectable />
                </div>
            </section>
        </div>

    )
}