
function start(){
    var i=0
    while(true){
        var n = random(1, 5)
        var time = n*1000;
        console.log("sleeping "+time+" s")
        if(i==5){
            exit();
        }
        i++
        sleep(time)
        
    }
    

}
// start();
function setInTime(time){
    console.log(time)
}
