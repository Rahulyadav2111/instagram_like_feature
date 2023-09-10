var a = document.getElementById("heart")
var flag =0;
a.addEventListener("click",function(){
    if(flag==0){
    a.style.webkitTextFillColor = "red"
    flag = 1;
    return c();
    }else{
        a.style.webkitTextFillColor = "white"
        flag =0;
    }
})

var con = document.querySelector("#main")
var like = document.querySelector("i")
var f=0;

con.addEventListener("dblclick", c = function(){
    if(f==0){
    like.style.transform = "translate(-50%, -50%) scale(1)"
    like.style.opacity = 0.8;
    a.style.webkitTextFillColor = "red"
    // a.style.borderBlockColor = "red"
    setTimeout(function(){
        like.style.opacity = 0;
    },1000)
    setTimeout(function(){
        like.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)
    f=1;
}else{
    a.style.webkitTextFillColor = "white"
    f =0;
}
})
