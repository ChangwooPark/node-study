const express = require('express'); // 설치한 express모듈을 불러옴
const helmet = require('helmet');
const app = express(); // 불러온 express모듈을 app변수에 대입 => express는 함수형태였다!
const ejs = require("ejs") // npm instal ejs

app.set('view engine', 'ejs'); // 확장자를 ejs로만 사용하겟다
app.set('views','./views') // HTML파일의 위치 지정
app.use('/public',express.static(__dirname + '/public'))

app.use(helmet()); // app.use => 미들웨어를 설정해주는 함수
// post통신을 위한 필수 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded());

const mainRouter = require('./router/mainRouter');
app.use("/", mainRouter);

app.listen(3000, function(req, res){
    console.log("서버가 실행되었습니다.")
})