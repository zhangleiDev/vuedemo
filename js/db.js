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

(async () => {
    try{
        var dog = await Book.create({
            name: "微服务框架333",
            price: 3333
        });
        console.log('created: ' + JSON.stringify(dog));
    }catch(err){
        console.log(err);
    }
    
})();


(async () => {
    try{
        let book = await Book.findOne({
            where:{id:7}
        });
        console.log(JSON.stringify(book));

        let model = await Book.findById(7);
        console.log(JSON.stringify(model));
    }catch(err){
        console.log(err);
    }
    
})();
