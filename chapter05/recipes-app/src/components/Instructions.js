import React from "react";

"use strict"

function Instructions({title,steps}) {
    return (
        <section className="instructions">
            <h2>{title}</h2>
            {steps.map((step,i)=>(
                <p key={i}>{step}</p>
            ))}
        </section>
    )
}

export {Instructions};