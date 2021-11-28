var cheerio = require("cheerio");
var request = require("request");
var a = require("../../prParser");

var url = "http://pallangsmartroom.iptime.org:2017/";

export const home = function (req, res) {
  let abc = (err, person, door) => res.render("home", { person, door });
  request(url, function (error, response, html) {
    if (error) {
      throw error;
    }

    var $ = cheerio.load(html);

    var person = $("#per_n").text();
    var door = $("#is_door").text();

    abc(error, person, door);
  });
};
