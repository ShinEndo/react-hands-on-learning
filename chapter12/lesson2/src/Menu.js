import React from 'react'

function Recipe({name, ingredients, steps}) {
    return (
        <section id={name.toLowerCase().replace(/ /g,"-")}>
            <h1>{name}</h1>
            <ul classNme="ingredients">
                {ingredients.map((ingredient,i)=>(
                    <li key={i}>{ingredient.name}</li>
                ))}
            </ul>
            <section className="instructions">
                <h2>Cooking Instructions</h2>
                {steps.map((step,i) => (
                    <p key={i}>{step}</p>
                ))}
            </section>
        </section>
    );
}

export const Menu = ({title,recipes}) => {
    return (
        <article>
            <headre>
                <h1>{title}</h1>
            </headre>
            <div className="recipes">
                {recipes.map((recipe,i)=>(
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    )
}
