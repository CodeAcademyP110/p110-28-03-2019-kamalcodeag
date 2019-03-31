"use strict"


// HOME TASK 1

// function FindNumberOfSpace ()
// { 
//     let userInput = prompt("Add your sentence").trim();
//     // while(!isNaN(a))
//     // {
//     //     a = prompt("Please, add your sentence");
//     // }
//     let userOutput = userInput.split(" ");
//     let numberOfSpace = userOutput.length -1;
//     return numberOfSpace;
// }

// console.log(FindNumberOfSpace());





//----------------------------------------------------------------------------------------------------------------------------------------





// HOME TASK 2

// let array = [38,67,91,34,22,10,159];

// function FindMiddleNumber ()
// {
  
//   let sum = 0;
//   let result = 0;
  
//   for (let i=0; i<array.length; i++)
//   {
 
//     sum = (sum + array[i]);
//     result = sum / array.length;
    
//   }
  
//   return result;
// }


// console.log(FindMiddleNumber());





//----------------------------------------------------------------------------------------------------------------------------------------





// HOME TASK 3

// let array = [3,5,52,85,45,248,130];
// let evens = [];

// function FindEvens ()
// {
//   for (let element of array)
//     {
//       if(element%2===0 && element!=0)
//         {
//           evens.push(element);
//         }
      
//     }
  
//   return evens;
 
// }

// console.log(FindEvens());




//----------------------------------------------------------------------------------------------------------------------------------------





// HOME TASK 4

// let array = [39,7,1,0,55,73,79];
// let sum = 0;
// let middle = 0;
// let elders = [];

// function FindEldersThanMiddle (par)
// {
//     let sum = 0;
//     let middle = 0;
//     let elders = [];
    
//     for(let i=0; i<par.length; i++)
//     {
//       sum += par[i];
//       middle = sum/par.length;
//     }
  
//     for(let i=0; i<par.length; i++)
//     {
//         if(par[i]>middle)
//         {
            
//             elders.push(par[i]);
//         }
//     }
  
//     return elders;
// }

// console.log(FindEldersThanMiddle())




//----------------------------------------------------------------------------------------------------------------------------------------




// HOME TASK 5

// function MakeString (par)
// {
//     let string = "";

//     for(let i=0; i<par.length;i++)
//     {
//         if(i == par.length -1)
//         {
//             string += par[i]; 
//         }
//         else
//         {
//             string += par[i] + ",";
//         }
        
//     }

//     return string;
// }

// console.log(MakeString ());




//----------------------------------------------------------------------------------------------------------------------------------------




// HOME TASK 6

// function FindReversedArray (par)
// {
//     let reverseArray = [];

//     for(let i=0; i<par.length; i++)
//     {
//         reverseArray.push(par[(par.length-1)-i]);
//     }

//     return reverseArray;
// }

// console.log(FindReversedArray());




//----------------------------------------------------------------------------------------------------------------------------------------




//HOME TASK 7

// function FindMutualArray()
// {

//     let firstArray = ["apple","pear","cherry","peach"];
//     let secondArray = ["apple","cherry","strawberry","lemon"];
//     let mutualArray = [];

//     for(let i=0; i<firstArray.length; i++)
//     {
//         if(secondArray.indexOf(firstArray[i]) != -1)
//         {
//             mutualArray.push(firstArray[i]);
//         }
//     }

//     return mutualArray;
// }

// console.log(FindMutualArray());