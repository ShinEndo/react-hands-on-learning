import React from "react";
import { IngredientsList } from "./IngredientsList";
import { Instructions } from "./Instructions";

"use strict"

function Recipe(props) {
    return (
        <section id={props.name.toLowerCase().replace(/ /g, "-")} >
            <h1>{props.name}</h1>
            {/* <ul className="ingredients">
                {props.ingredients.map((ingredient,i)=>(
                    // <li key={i}>{ingredient.name}</li>
                ))}
            </ul> */}
            <IngredientsList list={props.ingredients}/>
            {/* <section className="instructions">
                <h2>Cooking Instructions</h2>
                {props.steps.map((step,i)=>(
                    <p key={i}>{step}</p>
                ))}
            </section> */}
            <Instructions title="Cooking Instructions" steps={props.steps} />

        </section>
    );

};

export {Recipe};