
const fs = require('fs');

/**
 * 统一处理各种请求
 * @param {*} router 
 * @param {*} mapping 
 */
const url_perfix = "/api/v1.0";

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            // 如果url类似"GET xxx":
            var path = url.substring(4);
            router.get(url_perfix+path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            // 如果url类似"POST xxx":
            var path = url.substring(5);
            router.post(url_perfix+path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('DELETE ')) {
            // 如果url类似"DELETE xxx":
            var path = url.substring(7);
            router.delete(url_perfix+path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            // 如果url类似"PUT xxx":
            var path = url.substring(4);
            router.put(url_perfix+path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        }  else {
            // 无效的URL:
            console.log(`invalid URL: ${url}`);
        }
    }
}
/**
 * 扫描控制器在文件夹，自动加载控制器
 * @param {*} router 
 * @param {*} dir 
 */
function addControllers(router, dir) {
    var files = fs.readdirSync(__dirname + '/controllers');
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    }
}


module.exports = function (dir) {
    let
        controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
        addControllers(router, controllers_dir);
    return router.routes();
};