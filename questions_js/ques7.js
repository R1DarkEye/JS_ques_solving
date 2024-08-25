var summation = function (n) {
    // Code here
    let totle=0
    let out=''
    for(let i =0;i!=n+1;i++){
      totle+=i
      out+=i+" + "
    }
    let index=out.lastIndexOf("+")
    out.slice(index-2)
    return out
    }
let ot=''
 ot= summation(36)
 console.log(ot)
