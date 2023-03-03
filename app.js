const express = require('express'); // 설치한 express모듈을 불러옴
const app = express(); // 불러온 express모듈을 app변수에 대입 => express는 함수형태였다!

app.get("/",function(req,res){
    res.send("Hellow World");
})

app.listen(3000, function(req, res){
    console.log("서버가 실행되었습니다.")
})