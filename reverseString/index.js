// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {


    // long way (making variables, console logs)
    //
    //
    // let strArr= str.split("");
    // console.log(strArr);    
    // let revArr = strArr.reverse();
    // console.log(revArr);
    // let joined = revArr.join("");
    // console.log('//Joined\n'  + joined)

    // return joined;
    //
    //


    //
    //
    //fast, less code (can still remove variable name and return raw result)

    let revStr = str.split("").reverse().join("");
    //console.log (revStr);
    return revStr
    



}

reverse('A man, A plan, A canal, Panama');

module.exports = reverse;
