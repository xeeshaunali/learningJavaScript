
msec = 0
sec  = 0
msec = 0

var a = document.getElementById('msec')
var b = document.getElementById('sec')
var b = document.getElementById('min')




function start(){
   setInterval(function(){
    
    msec++
    a.innerHTML = msec
        if(msec >= 100){
                    
        }


    
   }, 10);
}

