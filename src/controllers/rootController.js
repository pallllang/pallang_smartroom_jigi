var cheerio = require("cheerio"); // 크롤링한 정보를 다듬어주는 모듈
var request = require("request"); // HTTP 네트워크 라이브러리

var url = "http://pallangsmartroom.iptime.org:2017/"; // 1차 서버 주소

export const home = function (req, res) {
  let abc = (err, person, door) => res.render("home", { person, door }); // 전달받은 정보를 서버에 보내기
  request(url, function (error, response, html) {
    if (error) {
      res.render("home", {person: "no data", door: "no data"});
      // throw error;
    }
    else {
      let $ = cheerio.load(html);

      let person = $("#per_n").text();
      let door = $("#is_door").text();
      abc(error, person, door);
    }
  }); // 정보를 추출하고 함수에 전달하기
};


export const login = function(req, res) {
  res.render("login");
}