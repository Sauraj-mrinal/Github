// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");
//--------------------------------------------------------------------------------------------
//                                   setTimeout
//--------------------------------------------------------------------------------------------
//
console.log('script start ');
function hello(){
    console.log('hello world !!');
}
setTimeout(hello , 1000);
console.log("Script end ");

// or we caan write it like 


console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);


// see more ---> go to callback folder and open js folder 
// from line number 30 












