function removeChar(str){
    //You got this!
     let newStr ='';
     newStr = str.slice(1, -1);
     console.log(str);
     return newStr;
    // str=str.replace(str[0],'');
    // str=str.replace(str[[str.length-1]],'');
    return str;
   };
   
console.log(removeChar('eloquent')); // 'loquen'
   