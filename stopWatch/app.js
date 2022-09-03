
    // setInterval method
    /*
    setInterval(function(){
        document.write("Xee" + "<br>")
    }, 1000)
    */


    // OTHER WAY OF USING setInterval Method

    /*
    function foo(){
        document.write('xee' + "<br>")
    }

    setInterval(foo,1000)
    */


    // var a = 0
    // setInterval(function(){
    //     a++
    //     document.write(a)
    // },1000)


//     var a = 0
//     var interval

//     interval = setInterval(function(){
//         a++
//         document.write(a)
//     },1000)
// // second method
//     clearInterval(interval)
    
 
//THIRD METHOD

    // setTimeout(function(){
    //     console.log('xee')
    // },1000)

    // var a = 0
    // var interval;

    // interval = setInterval(function(){
    //     a++
    //     document.write(a)
    // },1000)


    // setTimeout(function(){
    //     clearInterval(interval)
    // }, 10000);

    
    
    
    //STOP WATCH

    var min  = 0
    var sec  = 0
    var msec = 0
    var a = document.getElementById('msec')
    var b = document.getElementById('sec')
    var c = document.getElementById('min')
    var interval;



//    setInterval(function(){
//         msec++
//         a.innerHTML = msec

//             if(msec >= 100){
//                 sec++
//                 b.innerHTML = sec
//                 msec = 0

//                     if(sec >=60){
//                         min++
//                         c.innerHTML = min
//                         sec = 0
//                     }                
//             }        
//    },10)
    

  // TO START STOP WATCH 

 function start(){
   interval = setInterval(function(){
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
    },10)
    var i = document.getElementById('ms')
    i.disabled = true // DISABLE BUTTON AFTER CLICK
 }

function stop(){
  clearInterval(interval)
  var i = document.getElementById('ms')
  i.disabled = false // ENABLE DISABLED START BUTTON AFTER CLICK
}


function reset(){
    setTimeout(function(){
        msec = 0
        a.innerHTML = msec
        sec = 0
        b.innerHTML = sec
        min = 0
        c.innerHTML = min
    })
    
}


 
   








    


   

