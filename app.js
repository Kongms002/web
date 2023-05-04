"use strict";

// 모듈
const express = require('express');
const app = express();

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

// 라우팅
const home = require("./routes/home");

// 미들웨어 등록
app.use("/", home);

module.exports = app;