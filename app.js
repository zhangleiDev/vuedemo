// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

const controller = require("./js/controller.js")
//处理post请求提交的body部分解析
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(async (ctx, next) => {
    console.log(`URL： ${ctx.request.method} ${ctx.request.url}`); // 打印URL
    console.log( JSON.stringify(ctx.request.body,null,4))
    //设置默认返回JSON格式
    ctx.response.type = ctx.response.type || 'application/json';
    // var age = ctx.params.age;
    await next(); // 调用下一个middleware,执行完成前是阻塞状态
    console.log('end')
});
//相当于之前的 app.use(routs)

app.use(controller())

app.listen(3000);
console.log('app started at port 3000...');