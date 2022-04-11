import React, { Children } from "react";

import { Avatar } from "../Avatar";

export default function Feed({ children }) {
    return (
        <div className="container">
            <section className="feed">
                {children}
            </section>
        </div>
    )
}