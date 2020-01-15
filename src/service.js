import React, {useState, useEffect} from 'react';
/**
 * 
 * @param {*} url 
 */
const useFetchData = (url) => {
    let [isLoading, setIsLoading] = useState(false);
    let [output,setOutput] = useState('{}');

    useEffect(() => {
        setIsLoading(true);
        async function fetchData() {
                const res = await fetch(url);
                res
                .json()
                .then(res => setTimeout(()=>{setOutput(res); setIsLoading(false)},1500))
                .catch(err => {setOutput('{}'); setIsLoading(false)});
            }   
        fetchData();
    }, [url]);

    return [isLoading, output];
}

export default useFetchData;