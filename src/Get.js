import { useState } from 'react';

const get = (url) => {
    // const [isPending, setIsPending] = useState(true);

    return fetch(url)
    .then(res => {
        if (!res.ok) {
            throw new Error(res.message);
        }
        return res.json();
    }).then(data => {
        return data;
    }).catch(err => {
        return err;
    });
}

export default get;