

const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);

// we have to use open methond which take two arguments
// here open method is belong to xhr object 
console.log(xhr.readyState);
xhr.open("GET", url);
console.log(xhr.readyState);
xhr.onreadystatechange = function(){
    if(xhr.readyState===4){
        console.log(xhr);
        console.log(xhr.response);
        const respones = xhr.response;
       const data =  JSON.parse(respones);
        console.log(data);
        console.log(typeof data);
    }
    
}

xhr.send()


