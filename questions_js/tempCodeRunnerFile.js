    //You got this!
    /* let newStr ='';
    // newStr = str.slice(1, -1);
    // console.log(str);
     return newStr; */
    str=str.replace(str[0],'');
    str=str.replace(str[-1],'');
    return str;