// function myFun(callback){
//     console.log("function is ding task 1");
//     callback();
// }

// myFun( ()=>{
//     console.log(" function is ding task 2");
// } );


// function getTwoNumbers(number1, number2 , callback) {
//     console.log(number1 , number2);
//     callback(number1, number2);
// }
// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

// getTwoNumbers(3,5,addTwoNumbers)
// out put 
// function is ding task 1
//  function is ding task 2
// 3 5
// 8

//-------------------------------------------------------------------
//---------------callbacks , callback hell ,
//  pyramid of doom
//  asynchronous programming
//------------------------------------------------------------------------------->
// console.log("hello");
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");

// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
// }, 4000);

//   setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//   }, 3000);



// const heading1 = document.querySelector("#heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");

// // Text       Delay   Color

// // one        1s      Violet
// // two        2s      purple
// // three      2s      red
// // four       1s      Pink
// // five       2s      green
// // six        3s      blue
// // seven      1s      brown
// //------------------------------------------
// // callback hell  
// //--------------------------------------------
// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//       heading3.textContent = "three";
//       heading3.style.color = "red"; 
//       setTimeout(()=>{
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(()=>{
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//         },2000)
        
//       },1000)
      
//     },2000)
    
//   },2000)
  
// },1000)

//--------------------------------------------------------------------------------------------------
// first go and read promise notes the continue from here
//-------------------------------------------------------------------------------------------------------------
// so before we are using like call back but now
//----------------------------------------
// replaceinf the callback with promise
// ---------------------------------------

// example -->
// ye samjh me nhi aaya hai bc ->05-11-2023


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }
// chageText.then(()=>{ })

// const retunrPromise = changeText(heading1, "one", "red", 1000);
// retunrPromise.then(()=>{
//     // again function call
//      return changeText(heading2, "two", "purple", 1000);
// })
// .then((vla)={
   
// })
  // same we can write in batter way
changeText(heading1, "one", "red", 1000)
  .then(()=>changeText(heading2, "two", "purple", 1000))
  .then(()=>changeText(heading3, "three", "green", 1000))
  .then(()=>changeText(heading4, "four", "orange", 1000))
  .then(()=>changeText(heading5, "four", "orange", 1000))
  .then(()=>changeText(heading6, "four", "orange", 1000))
  .then(()=>changeText(heading7, "four", "orange", 1000))
  .then(()=>changeText(heading8, "four", "orange", 1000))
  .then(()=>changeText(heading9, "four", "orange", 1000))
  .then(()=>changeText(heading10, "four", "orange", 1000))
  .catch((error)=>{
      alert(error);
  })