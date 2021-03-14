// npm에는 글로벌모듈, 로컬모듈 2가지가 있다.
// 기본적으로 우리가 설치하는거는 로컬모듈이고 글로벌모듈 설치시에는 user/lib/node_modules로 설치가 된다.
// 따라서 require할때도 바로 할 수 없고 경로를 링크시켜줘야한다.
// 웹사이트는 2개의 중요한 동작이 있다. 이는 POST,GET이다.
// 1. 웹사이트에 URL을 적고 실행할 때 브라우저는 GET method를 실행한다. 이러면 브라우저가 페이지를 읽어온다.
// 2. 웹사이트에 login을 할 때 브라우저는 POST method를 실행한다. 이러면 브라우저가 웹사이트한테 정보를 전달한다.
// package.json은 어플리케이션/모듈의 경로에 위치해 있으며 패키지의 속성을 정의합니다.
//const express = require('express');
//require('x') <-- Find 'x' from folder
//1. 이 파일이 있는 폴더를 찾는다.
//2. 다른 파일이 있는지 찾는다.
//require는 모듈을 불러오는 역활을 한다.

//package.json에 쓰일 내용이다.
/*
scripts : 
1. 변수 선언을 해주면 해당 파일이 실행이 된다. npm에 쓰일 명령어를 정의하기 위한? 것 같다. 
2. 거기다가 index.js앞에 붙은것은 babel로 컴파일 해달라는 의미라고 생각된다.
*/

//dependencies : 해당 내용은 프로젝트를 실행시키기 위해서 설치해야하는 내용이다.

//devDependencies : 해당 내용은 개발에 편리한 프로그램을 설치하기 위한 공간이다. ex) npm install xxx -D <- 이걸로 오케이가 됨 

import express from "express";
import morgan from "morgan";
//const morgan = morgan();
const app = express();
//위의 const express에 선언된 내용을 실행시킨다.

const PORT = 4000;

function handleListening(){
    console.log(`Listening on : http://localhost:${PORT}`);
}
// 콜백 함수 생성

function handlehome(req, res){
    console.log(req);
    res.send("안녕 이생퀴야");
}
//req = request = get?, res = response = post?

//const handlehome = (req,res) => res.send("Hello from home");
//ES6문법에서는 위와 같은 함수가 이렇게 변환될 수 있다.

function handleProfile(req, res){
    res.send("You are on my profile");
}

//const hadleProfile = (req,res) => res.send("You are on my profile");

function betweenHome(req,res,next){
    console.log("Between");
    next();
}

// function middleTest(req,res,next){
//     morgan.tiny;
// }
// app.use(middleTest);
//위에 부분은 동작을 하지 않는다 왜지?

app.use(morgan("dev"));

// app.get이라는 function은 분명 express.get일것이다. 그럼 get은 어디서 나온것인가?
app.get("/",handlehome);

app.get("/profile",handleProfile);

app.listen(PORT,handleListening);
// 콜백 함수 집어 넣기