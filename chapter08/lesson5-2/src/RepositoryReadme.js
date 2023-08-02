import React, {useState, useCallback, useEffect} from 'react'
import ReactMarkdown from 'react-markdown';

export const RepositoryReadme = ({repo,login}) => {
    const [loading,setLoading] =  useState(false);
    const [error, setError] = useState();
    const [markdown,setMarkdown] = useState("");

    console.log("read RepositoryReadme");

    const loadReadme = useCallback(async(login,repo)=>{
        setLoading(true);
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
        const {download_url} = await fetch(uri).then(res => res.json());
        console.log("* download_url *********************************");
        console.log(download_url);
        console.log("************************************************");
        const markdown = await fetch(download_url).then(res => res.text());
        console.log("* markdown *************************************");
        console.log(markdown);
        console.log("************************************************");
        setMarkdown(markdown);
        setLoading(false);
    },[]);

    useEffect(()=>{
        if(!repo || !login) return;
        loadReadme(login,repo).catch(setError);
    },[repo]);

    if(error) return <pre>{JSON.stringify(error,null,2)}</pre>;
    if(loading) return <p>Loading...</p>;
    return <ReactMarkdown>{markdown}</ReactMarkdown>; 
}
