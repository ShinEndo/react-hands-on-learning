import React from 'react'

export const Agreement = ({onAgree}) => {
    return (
        <div>
            <p>Terms...</p>
            <p>These are the terms and staff. Do you agree?</p>
            <button onClick={onAgree}>I agree</button>
        </div>
    )
}
