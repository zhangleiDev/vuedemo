
// back()
var dakaBtn=descStartsWith("打卡时间1").find();
log(dakaBtn.length)
dakaBtn.forEach(element => {
    log(element.parent().child(2).desc());
});
    //log(dakaBtn)