var MongoClient = require('mongodb').MongoClient;
const config_mongo = require("./config.js").config_mongo;
//创建合集 
// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function (err, db) {
//     if (err) throw err;
//     console.log('数据库已创建');
//     var dbase = db.db("runoob");
//     dbase.createCollection('site', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//         db.close();
//     });
// });

// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj = { name: "菜鸟教程", url: "www.runoob",date:1111 };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

/**
 * 数据库操作公共方法
 * @param {*} dbname  数据库名称
 * @param {*} callback 回调函数
 */
async function executeDb(callback){

     MongoClient.connect(config_mongo.url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
        if (err) {
            db.close();
            throw err;
        };
        var dbo = db.db(config_mongo.database);
        try {
            callback(dbo)
            console.log("文档操作成功！");
        } catch (error) {
            console.log(error)
        }
        db.close();
    });
}

(()=>{
    executeDb((db)=>{
        var myobj = { name: "菜鸟教程", url: "www.runoob",date:444 };
        db.collection("site").insertOne(myobj, function(err, res) {
            if (err) throw err;
        });
    })

    executeDb((db)=>{

        dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            db.close();
        });
    })
    

})()

