// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let total=0;
    let numberofStudents=classPoints.length+1;
    classPoints.forEach(element => {
        total=total+element;
    });
    total=total+yourPoints;
    let average=total/numberofStudents;
    if(yourPoints>average){
        return true;
    }
    else{
        return false;
    }
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //true
  