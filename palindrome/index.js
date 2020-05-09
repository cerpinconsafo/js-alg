// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let arr = str.split("").join("");
    let rev = str.split("").reverse().join("");
    console.log('this is rev: ' + rev);
    console.log('this is arr: ' + arr);

return arr === rev;
}
    
palindrome('a man a plan a canal panama');

palindrome('this makes me sound smart')

module.exports = palindrome;
