import { useState } from 'react';
const usePost = (val) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    fetch('http://localhost:8080/si-pemilu/api/v1/login/admin', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(val),
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        setData(data);
        setIsPending(false)
        setError(null);
    })
    .catch(err => {
        setIsPending(false)
        setError(err.message);
    });

    return {data, isPending, error};
}
 
export default usePost;