var date = new Date();

var hours ,milliseconds,minutes,seconds;
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
document.getElementsByClassName("date")[0].innerText =((date.getDate()<=9) ? "0"+date.getDate():date.getDate())+" /"+((date.getMonth()<=9) ? "0"+date.getMonth():date.getMonth())+" /"+date.getFullYear();
//milliseconds = date.getMilliseconds();
setInterval(function(){

    document.getElementsByClassName("hour")[0].innerText = hours;    
    document.getElementsByClassName("minute")[0].innerText = minutes;    
    document.getElementsByClassName("second")[0].innerText = seconds++;    
    //document.getElementsByClassName("hour")[0].innerText = milliseconds++;   
    if(parseInt(document.getElementsByClassName("second")[0].innerText)>59){
        minutes++;
        seconds = 0;
    } 
    if(parseInt(document.getElementsByClassName("minute")[0].innerText)>59){
        hours++;
        minutes = 0;
    } 
    if(parseInt(document.getElementsByClassName("hour")[0].innerText)>23){
        hours=0;
        minutes = 0;
    } 
    


},1000);