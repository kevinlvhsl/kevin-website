var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
 
var routes = require('./routes');//路由目录设置为routes目录
var users = require('./routes/users');
 
var app = express();
 // view engine setup
app.set('views', path.join(__dirname, 'views'));//模板目录设置为views目录
app.set('view engine', 'jade');//将模板引擎设置为jade
app.listen(8000)//在八千端口上建立监听

//express route
app.get('/',function(req, res){
	console.log((new Date()).getTime())
		//渲染到页面
	res.write('<javascript>window.location.href = "main.html"</javascript>');
    res.end();

})