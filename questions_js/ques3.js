function noSpace(x){
    let str=''
    for(let i=0;i<x.length;i++){
        if(x[i]!=' '){
            str+=x[i]
        }
    }
    return str
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')) // '8j8mBliB8gimjB8B8jlB'
function noSpace1(x){
    return x.replace(/\s/g, '');
  }
console.log(noSpace1('8 j 8   mBliB8g  imjB8B8  jl  B')) // '8j8mBliB8gimjB8B8jlB'