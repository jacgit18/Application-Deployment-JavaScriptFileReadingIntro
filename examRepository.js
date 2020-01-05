/**
 * objective to read a JSON file
 */

 /**
  * test
 */

 function findAll(fileName, callback){



var readline = require('readline');
var fs = require('fs');
var rows = []

var myInterface = readline.createInterface({
  input: fs.createReadStream(fileName)
  
});

// call back so it runs on a delay and may get skipped because of
// this but will still run
myInterface.on('line', line => {
  const json = JSON.parse(line)
  rows.push(json)
});


// callback is just a valid vairiable name
myInterface.on('close', line => {
  callback(rows)
});

}

findAll("73-data.json", e => {
let excellentGrades = e.filter( e => e.avg >90);

console.log(excellentGrades)

let summary = excellentGrades.map(r => r.avg)
               .reduce ((a,c) => a + c, 0) / excellentGrades.length;
console.log({summary, numberOfStudents: excellentGrades.length})
})
// findAll("73-data.json", e => console.log(e))
