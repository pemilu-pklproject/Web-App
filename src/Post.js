const post = (url,val, method) => {
    // const [isPending, setIsPending] = useState(true);

    return fetch(url, {
        method: method,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(val),
    }).then(res => {
        // if (!res.ok) {
        //     throw new Error(res.message);
        // }
        return res.json();
    }).then(data => {
        return data;
    }).catch(err => {
        return err;
    });
}

export default post;