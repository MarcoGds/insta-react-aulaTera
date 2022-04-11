import React from "react";

export default function Feed({ children }) {
    return (
        <div className="container">
            <section className="feed">
                {children}
            </section>
        </div>
    )
}