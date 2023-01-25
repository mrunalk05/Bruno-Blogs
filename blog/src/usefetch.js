import { useEffect, useState  } from "react"

const useFetch= (url)=>{

    const [data, setblogs]= useState(null);
    const [isPending, setpending]= useState(true);
    const [iserror, seterror]= useState(null);

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            if(!res.ok){
                throw Error('Could not find data');
            }
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setblogs(data);
            setpending(false);
            seterror(null);
        })
        .catch(err=>{
            setpending(false);
            seterror(err.message);
        })
    }, [url]);

    return {data, isPending, iserror};
}