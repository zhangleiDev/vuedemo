
var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'Kindle',
    price: 999
}];
var dao = require("../db.js")
var fn_hello = async (ctx, next) => {
    
        dao.queryByid(ctx.params.id).then(async (result) =>{
            // 设置Response Body:
            ctx.response.body = {
                book: result
            };
        });
        
        
};
var del_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello,delete ${name}!</h1>`;
};
var put_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello,put ${name}!</h1>`;
};

module.exports = {
    'GET /hello/:id': fn_hello,
    'DELETE /hello/:name': del_hello,
    'PUT /hello/:name': put_hello
};