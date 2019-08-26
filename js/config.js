var config_db = {
    database: 'my', // 使用哪个数据库
    username: 'root', // 用户名
    password: 'root1234', // 口令
    host: 'localhost', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};
var config_mongo = {
    database: 'runoob', // 使用哪个数据库
    url: 'mongodb://localhost:27017', // url
};

module.exports = {config_db,config_mongo};