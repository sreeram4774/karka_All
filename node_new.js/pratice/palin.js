// let str="malayala"
// var start = 0;
// var end = str.length - 1;

// while (start < end) {
//     if (str[start] !== str[end]) {
//         console.log("the given str is not plaindrome");
//     }
//     start++;
//     end--;
// }
// console.log("the given str is  plaindrome");

let str = "221"
// var start = 0;
// var end = str.length - 1;

for (start = 0,end = str.length - 1; start < end; start++, end--) {
    if (str[start] !== str[end]) {
        console.log("The given string is not a palindrome");
        return; // Exit the function or break out of the loop
    }
}
console.log("The given string is a palindrome");

