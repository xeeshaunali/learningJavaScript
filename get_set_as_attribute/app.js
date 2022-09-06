
msec = 0
sec  = 0
msec = 0

var a = document.getElementById('msec')
var b = document.getElementById('sec')
var c = document.getElementById('min')
var interval;



function start(){

 interval =   setInterval(function(){
            msec++
            a.innerHTML = msec
                if(msec >= 100){
                   sec++
                   b.innerHTML = sec
                   msec = 0 
                   if(sec >=60){
                                        min++
                                        c.innerHTML = min
                                        sec = 0
                                    }         
                }
        }, 10);
        var i = document.getElementById('start')
        i.disabled = true
}


function stop(){
    clearInterval(interval)
}


function reset(){
    msec = 0
    sec = 0
    min = 0

    a.innerHTML = msec
    b.innerHTML = sec
    c.innerHTML = min
}

