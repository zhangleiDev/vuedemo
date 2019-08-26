const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    logging: true,//开启sql日志
    define: {
        // 字段以下划线（_）来分割（默认是驼峰命名风格）
        'underscored': true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 2000
    }
});

var Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING(100),
    price: Sequelize.STRING(10),
}, {
        timestamps: true,
        freezeTableName:true
    });

// Book.create({
//     name: "微服务框架",
//     price: 48964,
// }).then(function (p) {
//     console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//     console.log('failed: ' + err);
// });

//新增数据
// (async () => {
//     try{
//         var dog = await Book.create({
//             name: "微服务框架333",
//             price: 3333
//         });
//         console.log('created: ' + JSON.stringify(dog));
//     }catch(err){
//         console.log(err);
//     }
    
// })();

var print=(data)=>{
    console.log('created: ' + JSON.stringify(data));
}

//自定义sql：查询
// (async () => {
//     try{
//         let book= await sequelize.query("select * from book where id=?", {
//             replacements:[1],   
//             type : sequelize.QueryTypes.SELECT
//         });
//         print(book)
//     }catch(err){
//         console.log(err);
//     }
// })();

//自定义sql：新增
(async () => {
    try{
        //result: [20,1],返回新增记录的主键值和影响条数
        let result= await sequelize.query("insert into book (id,name,price) values(:id,:name,:price)", {
            replacements:{
                id:20,
                name:"Mysql",
                price:1234
            },   
            type : sequelize.QueryTypes.INSERT
        });
        print(result)
    }catch(err){
        console.log(err);
    }
})();

//自定义sql：更新
// (async () => {
//     try{
        
//         let result= await sequelize.query("update book set name=:name where id=:id", {
//             replacements:{
//                 name:"InnoDb",
//                 id:20
//             },   
//             type : sequelize.QueryTypes.UPDATE
//         });
//         print(result)
//     }catch(err){
//         console.log(err);
//     }
// })();

// 自定义sql：删除
(async () => {
    try{
        
        let result= await sequelize.query("delete from book where id=:id", {
            replacements:{
                id:20
            },   
            type : sequelize.QueryTypes.DElETE
        });
        print(result)
    }catch(err){
        console.log(err);
    }
})();




//单条查询
var queryByid = async (id) => {
            try{
        
                let book = await Book.findOne({
                    where:{id:id}
                });
                return book;
            }catch(err){
                console.log(err);
            }
        };

module.exports={
    queryByid
}