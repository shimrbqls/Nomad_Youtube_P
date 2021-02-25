const express = require('express');
//require('x') <-- Find 'x' from folder
//1. 이 파일이 있는 폴더를 찾는다.
//2. 다른 파일이 있는지 찾는다.
const app = express();
//위의 const express에 선언된 내용을 실행시킨다.

const PORT = 4000;

function handleListening(){
    console.log(`Listening on : http://localhost:${PORT}`);
}
// 콜백 함수 생성

function handlehome(req, res){
    console.log(req);
    res.send("Hello from home");
}

function handleProfile(req, res){
    res.send("You are on my profile");
}

app.get("/",handlehome);

app.get("/profile",handleProfile);

app.listen(PORT,handleListening);
// 콜백 함수 집어 넣기