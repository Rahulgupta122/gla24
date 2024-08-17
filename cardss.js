async function fetchData(params) {
    const response =await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response); 
    const data =await response.json();
    console.log(data);
}
// console.log(response);// refrence error
fetchData();

async function fetchData(params) {
    const response =await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response); 
    const data =await response.json();
    console.log(data);
}
// console.log(response);// refrence error
fetchData();


async function fetchData(params) {
    const response =await fetch("https://jsonplaceholder.typicode.com/comments");
    console.log(response); 
    const data =await response.json();
    console.log(data);
}
// console.log(response);// refrence error
fetchData();


async function fetchData(params) {
    const response =await fetch("https://jsonplaceholder.typicode.com/photos");
    console.log(response); 
    const data =await response.json();
    console.log(data);
}
// console.log(response);// refrence error
fetchData();


async function fetchData(params) {
    const response =await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response); 
    const data =await response.json();
    console.log(data);
}
// console.log(response);// refrence error
fetchData();

async function fetchData(params) {
    const response =await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log(response); 
    const data =await response.json();
    console.log(data);
}
// console.log(response);// refrence error
fetchData();

