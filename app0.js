var global=10;

function fun1(){
    console.log(global);
    globalval=34;// if not let or var then warning coz scope limited to fun1 only else treated global variable. 
}

function fun2(){
    if(global==10){
        console.log("Hiiii");
    }
    if(globalval==34){
        console.log("Babe");
    }else{
        console.log("laude");
    }
}
fun1();
fun2();