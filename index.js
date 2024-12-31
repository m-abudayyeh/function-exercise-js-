 // Q1
// function reverse_num(num){
//     let num_rev=0;
//   while(num) {
//     num_rev=num_rev*10 +(num%10);
//     num = Math.floor(num/10);
//   } 
//   return num_rev ; 
// }

// let x = 532443 ;
// console.log(reverse_num(x));


// Q2
// for(let a=0 ;a<=15 ; a++){
//     if ( a%2==0 ){
//         console.log(a + " is even");
//     }
//     else{
//         console.log (a + " is odd ");
//     }
// }



// Q3
// function sortAscending(str) {
//     var letters = "abcdefghijklmnopqrstuvwxyz";
//     var x = "";

//     for (var i = 0; i < letters.length; i++) {
//         for (var j = 0; j < str.length; j++) {
//             if (str[j].toLowerCase() === letters[i]) {
//                 x += str[j];
//             }
//         }
//     }

//     return x;
// }



// Q4
// function Dashe_Bet_even(num){
//     let result = " ";
//     num= num+ " " ;

//     for( let a=0 ;a<num.length ;a++){
//         if (a>0 && num[a]%2===0 &  num[a-1]%2===0 ){
//             result+= "-"
//         }
//         result+=num[a];
//     }
//     return result ;
// }
// let input = 25468;
// console.log ( Dashe_Bet_even(input));


// Q5
let age = parseInt (prompt("please enter your age"));

function AgeChecker(age) {
    if (age >= 18) {
        console.log("The user is an adult");
    } else {
        console.log("The user is a minor");
    }
}
AgeChecker(age); 