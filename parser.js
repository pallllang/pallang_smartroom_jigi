var cheerio = require("cheerio");
var request = require("request");
var dis = require("./prParser");

var url = "http://pallangsmartroom.iptime.org:2017/";

let resArr = [];

let fun = function (error, response, html) {
  if (error) {
    throw error;
  }

  var $ = cheerio.load(html);

  var dis = $("#dis").text();
  var person = $("#per_n").text();
  console.log(person);
  resArr.push(dis);
  resArr.push(person);

  return resArr;
};
request(url, resArr, fun);

console.log(resArr);
