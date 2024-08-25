function reverseWords(str) {
    // Go for it
    let arr = str.split(' ');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split('').reverse().join(''));
    }
    return newArr.join(' ');
  }

let arry = ["Hey", "fellow" ,"warriors",1];
let str=arry.join("")
console.log(str);
console.log(arry[1].split(''));
console.log(arry.reverse());
console.log(typeof str)