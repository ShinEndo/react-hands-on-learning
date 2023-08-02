import React from "react";

"use strict"

function Ingredient({amount,measurement,name}) {
    return (
        <li>{amount} {measurement} {name}</li>
    )
}

export {Ingredient};