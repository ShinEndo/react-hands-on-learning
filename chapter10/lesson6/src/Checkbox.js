import React, { useReducer } from 'react'

export const Checkbox = () => {
    const [checked, setChecked] = useReducer(checked => !checked, false); 
    return (
        <>
            <label>
                {checked ? "chekced" : "not chekced"}
                <input type="checkbox" value={checked} onChange={setChecked} data-testid="checkbox"/>
            </label>
            <div>Checkbox</div>
        </>
    )
}
