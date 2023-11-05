//------------------
// promise 
//-----------------
// we have to make fried rice and i have available  items my kitchen 
// console.log("Script Start");
// const bucket = ['coffee', 'chips','vegetables','salt','rice'];

// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// })

// produce 



// consume 
// how to consume -->
    // friedRicePromise.then((value)=>{
    // console.log("lets eat ",value);
    // }, (error)=>{console.log(error);})

// ------------> see handwriting notes in my OneNote Dev chapter name--> promise 

// in consume process we can use only one callback function 
// we can use .catch after . than 
// friedRicePromise.then((value)=>{
//     console.log("lets eat ",value);
// }).catch( (error)=>{
//         console.log(error)
//      })

     //-------------------------------------------
     //example -- javascript is a synchronized 
     //---------------------------------------------
            //  console.log("Script Start");
            //  const bucket = ['coffee', 'chips','vegetables','salt','rice'];
            
            //  const friedRicePromise = new Promise((resolve,reject)=>{
            //      if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
            //          resolve({value:"friedrice"});
            //      }else{
            //          reject("could not do it");
            //      }
            //  })
            

            //  friedRicePromise.then((value)=>{
            //     console.log("lets eat ",value);
            // }).catch( (error)=>{
            //         console.log(error)
            //      })


        
            //  for( let i=0; i<101; i++){
            //     console.log(Math.rendom(),i);

            //  }
            //  console.log("Script end !!!");


//------------------------------------------------------------------------------------------------------------------------

              // function which return promise
//------------------------------------------------------------------------------------------------------------------------


//  function ricePromise(){
//     const bucket = ['coffee', 'chips','vegetables','salt','rice'];

//      return new Promise((resolve , reject)=>{
//         if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//             resolve( {value: "friedrice"});

//         }else{
//             reject("could not do it ")
//         }
//      })
//  }

//  ricePromise().then((value)=>{
//     console.log("lets eat ",value);
//     }, (error)=>{console.log(error);})


//------------------------------------------------------------------------------------------------------------------------

              //  promise and setTimeout 
              // i want to resolve and reject promise after 2 seccond 
//------------------------------------------------------------------------------------------------------------------------


// // to solve this problem we will create a new function 
// function myPromise(){
//     // this function help us to return a promise 
//     // here we are creating a dummy variable
//     const val = false;

//     return new Promise((resolve , reject)=>{
//        // my requerement is we have to resolve and reject promise in 2 second 
//        // then we will use here setTimeout fnction to hold the promise time 
//        setTimeout(()=>{
//         if(val){
//             resolve();
//         }else{
//             reject();
//         }
//        })
//     });

// }

// // to get the promise retuen value we need to call that function
// myPromise().then(()=>{
//     // here than will take call back function or arrow function
//     console.log("resolve promise");
// }).catch(()=>{
//    console.log("reject promise");
// })



// output -- reject promise

//------------------------------------------------------------------------------------------------------------------------

              //  promise .resolve
//------------------------------------------------------------------------------------------------------------------------
function myPromise(){
    return  new Promise(function(resolve , reject){
        resolve("Foo");
    });
}

// myPromise().then((value)=>{
//     console.log(value); // Foo
// })
// i want to add some new value 
myPromise().then((value)=>{
    console.log(value); // Foo
    value += "Bar";
    return value; 

})
// here i am not returning any value i 
//i am  returning  promise so i can eligible to use then method again

// .then((value)=>{
//    console.log(value); // FooBar  
// })


// see notes in detailed in my promise chapter 
.then((value)=>{
    console.log(value); // FooBar  
    value += "Baz" ;
    return value; 
 })
 .then((value)=>{
    console.log(value); // FooBarBaz
 }) 





































