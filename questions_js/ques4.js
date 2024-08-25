function ar(n){
    let l =[]
    let num=n
    for(let i=1;i<=num;i++){
        l.push(n)
        n=n-1
    }
    return l
}
let list=ar(10)
console.log(list)