

var fun1 = async (a)=>{

    await setTimeout(()=>{
       console.log(11)
   },3000)
    return a;
}

var fun2 =async (a)=>{
    await  setTimeout(()=>{
        console.log(22)

    },4000)
    return a;
}

var fun3 =async (a)=>{

    await setTimeout(()=>{
        console.log(33)
    },5000)
    return a;
}



 fun1(1)
 fun2(2)
 fun3(3)
