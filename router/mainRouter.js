const express = require('express');
const router = express.Router();

router.get("/",function(req,res){
    res.render('index',{title:"EJS 메인 페이지"}) // 그림 파일 전달해줄때 쓰는 함수 render
})

router.get("/about", function(req, res){
    res.send("About Page"); // 문자열과 같은 데이처 마일 전달시에는 send
})

router.post("/postapi", function(req, res){
    let body_ = req.body;
    console.log(body_)
    res.send("POST API");
})

module.exports = router;