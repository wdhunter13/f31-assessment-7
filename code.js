// This is a O(n) 


let numbers = [0];
let sum = 0;

function sumZero(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if ((sum = 0)) {
      return true;
    } else {
      return false;
    }
  }
}



// This is a O(n)

 function uniqChars(str) {
   let uniqChars = new Set([]);
   for (let i = 0; i < str.length; i++) {
     uniqChars.add(str[i]);
   }
   return uniqChars.size === str.length;
 }



 //This is a O(n)

 alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

 const pangram = (str) => {
   str = str.toLowerCase();
   return alphabet.every((x) => str.includes(x));
 };

 console.log(pangram("Dev Mountain"));




//This is a O(n^2)
 function longestWord(str) {
   let words = str.split(" ");
   let maxLength = 0;

   for (let i = 0; i < words.length; i++) {
     if (words[i].length > maxLength) {
       maxLength = words[i].length;
     }
   }
   return maxLength;
 }

 longestWord("coding is cool");