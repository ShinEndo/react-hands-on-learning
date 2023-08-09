import React, { useReducer } from 'react'

export const Checkbox02 = () => {
    const [checked, setChecked] = useReducer(checked => !checked, false); 
    return (
        <>
            <label>
                {checked ? "chekced" : "not chekced"}
                <input type="checkbox" value={checked} onChange={setChecked} />
            </label>
            <div>Checkbox</div>
        </>
    )
}
