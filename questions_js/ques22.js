function printerError(s) {
       // your code
         let arry = s.split("")
            let i = 0
            arry.forEach(e=>{
                if(e>"m"){
                    i++
                }
            })
            return `${i}/${s.length}`
}
console.log(printerError("aaabbbbhaijjjm"))
 
//   arry.forEach(e=>{
//     if(e>"m"){
//       i++
//     })
//   })
//   return `${i}/${s.length}`
