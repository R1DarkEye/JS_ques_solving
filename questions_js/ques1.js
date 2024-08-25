
arg2 = function(){
    console.log("arg2");
}
arg3 = function(){
    console.log("arg3");
}
function _if(a,b,c){
    if(a==true){
        return b();
    }else{
        return c();
    }}
_if(true,arg2,arg3); 