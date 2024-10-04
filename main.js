let id = document.getElementById('id');
let title = document.getElementById('title');
let body = document.getElementById('body');
let div = document.getElementById('div');
let btn = document.getElementById('btn');

let searchId = ''

id.onchange = (e) => {
    searchId = e.target.value;    
}

title.onchange = (e) => {
    title = e.target.value;    
}

body.onchange = (e) => {
    body = e.target.body
}

btn.onclick = () => {
    fetchJson(id.value)
}


const fetchJson = (searchId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(user => {
            if(searchId == user.id){
                div.append(`id: ${user.id}, title: ${user.title},body:${user.body}`)
            }
            else{
                return                
            }
        });
        data.forEach(user => {
            if(title == user.title){
                div.append(`id: ${user.id}, title: ${user.title},body:${user.body}`)
            }
            else{
                return                
            }

        data.forEach(user => {
            if(body = user.body){
                div.append(`id: ${user.id}, title: ${user.title}, body: ${user.body}`)
            }
            else{
                return
            }
        })
        });
    })
    .catch((error) => console.log(error))
}

