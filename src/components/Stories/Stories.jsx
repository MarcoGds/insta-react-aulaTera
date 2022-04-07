import React from "react";
import './Stories.css';
import { Avatar } from "../Avatar";

export default function Stories({ dates }) {
    return (
        <div className="container">
            <section className="stories">
                <div className="stories__container">
                    {dates.map((story) => (

                        <Avatar
                            key={story.id}
                            image={story.story} 
                            size="large" selectable
                        />

                    ))}
                </div>
            </section>
        </div>

    )
}