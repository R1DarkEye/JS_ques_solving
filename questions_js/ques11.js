function fakeBin(x){
    // return x.split('').map(e => e < 5 ? 0 : 1).join('');
    return x.split('').map((e)=>{
        if(e < 5){
            return 0;
        }else{
            return 1;
        }
    }).join('');
}
console.log(fakeBin('45385593107843568')); // 01011110001100111