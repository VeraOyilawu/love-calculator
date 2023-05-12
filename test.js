// let jos = (Math.floor(Math.random()*100));
// console.log(jos)
// let joe = (Math.floor(Math.random()*100));
// console.log(joe)
// let average = (joe + jos)/2;
// console.log(Math.floor(average))
 
// let date = new Date
// let today = date.getDate();
// let myPromise = new Promise( (resolve, reject) => {
//     if(today==10){
//         resolve("sucessful")
//     }
//     else {
//         reject("failure")
//     }
// })
// myPromise.then(() =>{
//     console.log("today's date is correct")
// })
// myPromise.catch(() =>{
//     console.log("today's date is wrong");
// })


const myschool = ["Unilag","Lasu","FCE","The Curve","Yabatech"]

const promise = new promise((resolve,reject) => {
    if(myschool.includes("Unilag")){
        resolve("sucessful")
    }
    else{
        reject("failure")
    }
});

promise.then(
    function(value){
        console.log("available")
    },
    function(error){
        console.log("unavailble")
    }
)




// let function1 = function() {
//     console.log("i am function 1")
// }

// let function2 = function() {
//     console.log("i am function 2")
// }

// let function3 = function() {
//     console.log("i am function 3")
// }

// let function4 = function() {
//     console.log("i am function 4")
// }

// setTimeout( () =>{
//     console.log("i am function 4")
// }, 4000)


// setTimeout( () =>{
//     console.log("i am function 3")
// }, 5000)

// setTimeout( () =>{
//     console.log("i am function 2")
// }, 6000)

// setTimeout( () =>{
//     console.log("i am function 1")
// }, 7000)


// console.log(Math.floor(Math.random()*10))

// setTimeout( () =>{
//     let number = (Math.floor(Math.random()*80)+"%")

// if (number >= 70){
//     // console.log("you are compatable to marry")
//     console.log(number+"d")
// }
// else if (number >= 60) {
//     // console.log("you are slightly compatable to marry")
//     console.log(number+"c")
// } 
// else if ( number > 50) {
//     // console.log("managable")
//     console.log(number+"b")
// }
//  else {
//     // console.log("japa")
//     console.log(number+"a")
// }

// }, 1000)

// function Relationship (){
//     let score = (Math.floor(Math.random()*100))
//     if (score >= 70){
//         console.log(`your love score is ${score}% you are compatible `)
//     }
//     else if (score >= 60) {
//         console.log(`your love score is ${score}% you are slightly compatible `)
//     } 
//     else if ( score >= 50) {
//         console.log(`your love score is ${score}% you are managable `)
//     }
//      else {
//         console.log(`your love score is ${score}% japa `)
//     }
// }
// setTimeout(Relationship, 2000)   


// function Relationship() {
//     let score = (Math.floor(Math.random()*100));
//      switch (true) {
//         case (score >= 70):
//             console.log(`your love score is ${score}%, you are compatible `);
//             break;
//         case (score >= 60):
//             console.log(`your love score is ${score}% you are slightly compatible `);
//             break;
//         case (score >= 50):
//             console.log(`your love score is ${score}% you are managable `);
//             break;
//         default:          
//              console.log(`your love score is ${score}% japa `)      
//      }       
// }
// setTimeout(Relationship, 2000)
