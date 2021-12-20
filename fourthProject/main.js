function randomColorGenerator(){
    var elligbleLetters = "ABCDEF0123456789";
    var str = "#";
    var random ;
    for(var i = 0;i<6;i++){
        var random = Math.floor(Math.random()*elligbleLetters.length);
        str += elligbleLetters.charAt(random);
    }
    return str;
}
//alert(randomColorGenerator());
function animation(element){
    var timer = setInterval(function(){
        var counter1 = 0;
        element.style.top = (parseInt(element.style.top.split("px")[0])+(Math.random()*10)).toString()+"px";
        if(element.style.top.split("px")[0]> window.innerHeight){
           // clearInterval(timer);
            element.style.top = "0px";
            counter1++;
        }
        if(counter1>100){//100 tur döndürüp bitiriyorum
            clearInterval(timer);
            element.style.top = window.innerHeight + "px";
        }   
    },10);
}



var snow;

for(var counter = 0;counter<100;counter++){
    snow = document.createElement("div");
    snow.classList.add("snow");
    snow.style.backgroundColor = randomColorGenerator();
    snow.style.border = "1px solid black";
    snow.style.top = Math.floor(Math.random() *(window.innerHeight-50)).toString()+"px";

    snow.style.left = Math.floor(Math.random() * (window.innerWidth-50)).toString()+"px";
    document.body.appendChild(snow);
    animation(snow);
 

}
