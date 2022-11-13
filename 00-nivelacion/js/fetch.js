fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((resp)=>{
        return resp.json();
    })
    .then((data)=>{
        console.log(data)
    })