'use strict';

var s = 'Hello';
var ss = 'sssss';
function greet(name) {
    console.log(s + ', ' + name + '!');
}
//暴露模块方式一:
// module.exports = {
//     ss:"随笔川迹",
//     greet:function(name){
//         console.log(s + ', ' + name + '!');
//     }
// }

//暴露模块方式二:
module.exports = {
    "greet":greet,
    "ss":ss
};
//暴露模块方式三,键值一样可以简写:
// module.exports = {
//     greet,
//     ss
// };


