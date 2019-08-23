
var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'Kindle',
    price: 999
}];
var dao = require("../db.js")
var fn_hello = async (ctx, next) => {
    let book= await dao.queryByid(ctx.params.id);
    ctx.response.body = {
        book: book
    };
    console.log(1111111111)
        
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