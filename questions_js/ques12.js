function disemvowel(str) {
    // str = str.replace(/[aeiou]/gi, '');
    for(let i = 0; i < str.length; i++) {
        if( str[i].toLowerCase() ==='a' || str[i].toLowerCase()==='e' || str[i].toLowerCase()==='i' || str[i].toLowerCase()==='o' || str[i].lower==='u') {
            str = str.replace(str[i], '');
        }
    }
    return str;
  }
    console.log(disemvowel('This website is for losers LOL!')); // Ths wbst s fr ls