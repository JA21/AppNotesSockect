const uri = 'http://localhost:8030/'

const petFecht = async (url, type, body) => {
    if (type === 'put') {
        console.log('put')
       return await fetch(url, {
            method: "put", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(body), // body data type must match "Content-Type" header
        });
    } 

}

/* const deleteNote =  id => {
    const uri = `http://localhost:8030/api/notes/delete?id=${id}`;
    return  petFecht(uri, 'put')
}

const updateNote = (id, data) => {
    const uri = `http://localhost:8030/api/notes/update?id=${id}`;
    petFecht(uri, 'put', data);
} */