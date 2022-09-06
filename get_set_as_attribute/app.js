
msec = 0
sec  = 0
msec = 0

var a = document.getElementById('msec')
var b = document.getElementById('sec')
var c = document.getElementById('min')



function start(){
   setInterval(function(){
    msec++
    a.innerHTML = msec

        if(msec >= 100){
           sec++
           b.innerHTML = sec 
           msec = 0      

           if(sec >= 60){
           min++
           c.innerHTML = min
           
        }
        }            


    
   }, 10);
}

