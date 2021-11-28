const cheerio = require('cheerio');
const request = require('request');

// let fun = function(error, response, html){
//   if (error){
//     throw error;
//   }


//   var $ = cheerio.load(html);

//   var dis = $('#per_n').text();
//   console.log(dis);
// }


var findNum = function(err, data) {
  if (err) throw err;
  return data;
}

var getNum = function() {
  var url = "http://192.168.0.10/";
  request(url, function(error, response, html){
    if (error){
      throw error;
    }
  
    var $ = cheerio.load(html);
  
    var dis = $('#per_n').text();

    findNum(err, dis);
  })
}

console.dir(findNum);


//request(url, fun);

