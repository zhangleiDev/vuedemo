'use strict';

var fs = require('fs');

// 打开一个流:
var rs = fs.createReadStream('/home/zhanglei/vscodeSpace/js/demoFile', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws1.write('END.');
ws1.end();
//pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序：
var rs1 = fs.createReadStream('output1.txt');
var ws2 = fs.createWriteStream('copied.txt');
rs1.pipe(ws2);
