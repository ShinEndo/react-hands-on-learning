import React, { useEffect } from 'react'
import { useIterator } from './useIterator'
import { RepositoryReadme } from './RepositoryReadme';

export const RepoMenu = ({
    repositories,
    login,
    onSelect = f => f,
}) => {
    const [{name}, previous, next] = useIterator(repositories); 

    useEffect(()=>{
        if(!name) return;
        onSelect(name);
    },[name]);

    return (
        <>
            <div style={{display: "flex"}}>
                <button onClick={previous}>&lt;</button>
                <p style={{padding:"0 16px"}}>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <RepositoryReadme login={login} repo={name} />
        </>
    )
}
