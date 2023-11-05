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



const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown
//------------------------------------------
// callback hell  
//--------------------------------------------
setTimeout(()=>{
  heading1.textContent = "one";
  heading1.style.color = "violet";
  setTimeout(()=>{
    heading2.textContent = "two";
    heading2.style.color = "purple";
    setTimeout(()=>{
      heading3.textContent = "three";
      heading3.style.color = "red";
      setTimeout(()=>{
        heading4.textContent = "four";
        heading4.style.color = "pink";
        setTimeout(()=>{
          heading5.textContent = "five";
          heading5.style.color = "green";
        },2000)
        
      },1000)
      
    },2000)
    
  },2000)
  
},1000)


