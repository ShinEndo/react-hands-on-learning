import React from 'react'
import { useFetch } from './useFetch'

export const Fetch = ({
    uri,
    renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = error => (
        <pre>{JSON.stringify(error,null,2)}</pre>
    )
}) => {
    const {loading, data, error} = useFetch(uri);
    console.log(error);
    if(error) return renderError(error);
    if(loading) return loadingFallback;
    if(data) return renderSuccess({data});
}
