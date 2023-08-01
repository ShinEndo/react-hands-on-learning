import React from 'react'
import { useParams } from "react-router-dom";
import { useColors } from "./ColorProvider";

export const ColorDetails = () => {
    const { id } = useParams();
    console.log(`id: ${id}`);
    const { colors } = useColors(); 
    console.log(`colors:---------------`);
    console.log(colors);
    const foundColor = colors.find(color => color.id === id);
    console.log(foundColor);
    return (
        <div style={{marginTop:"30px"}}>
            <div style={{backgroundColor: foundColor.color, height:100, width:100}}></div>
            <h1>{foundColor.title}</h1>
            <p>{foundColor.color}</p>
        </div>
    )
}
