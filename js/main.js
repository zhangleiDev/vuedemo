'use strict';
// 引入hello模块:
var hello = require('./hello');

var s = 'Michael';

hello.greet(s); // Hello, Michael!
console.log(hello.ss)

var fs = require('fs');
/**
 * 文件读取,异步读取
 */
fs.readFile('/home/zhanglei/vscodeSpace/js/hello.js', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//同步加载文件
var data = fs.readFileSync('/home/zhanglei/vscodeSpace/js/hello.js', 'utf-8');
console.log(data);
console.log("读取完成.......................")