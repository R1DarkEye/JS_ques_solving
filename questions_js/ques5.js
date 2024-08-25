function digitize(n) {
    list=[]
    n=n.toString()
    for(let i =0;i < n.length ;i++){
        list.push(Number(n[i]))
        console.log(n[i])
    }
   list=list.reverse()
   return list
  }
//   35231 => [1,3,2,5,3]
//   0 => [0]
let rev=[]
rev=digitize(35231)
console.log(rev)
