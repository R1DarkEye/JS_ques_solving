var number = function(busStops){
    // Good Luck!
    // ONpassengers = busStops.reduce((ent,lef)=> ent+lef[0]-lef[1],0)
    let ONpassengers =0;
    busStops.forEach((busStop)=>{
      ONpassengers += busStop[0]-busStop[1]
    })
    return ONpassengers
  }
    console.log(number([[10,0],[3,5],[5,8]]));