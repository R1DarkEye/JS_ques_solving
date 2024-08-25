function abbrevName(name){
    // let arr = name.split(' ');
    // let result = arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase();

    // code away
    name = name.split(' ');
    return (name[0][0] + '.' + name[1][0]).toUpperCase();

}