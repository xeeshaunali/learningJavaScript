
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



    setInterval(function(){        
        msec++
        a.innerHTML = msec
        if(msec >=100){
            sec++
            b.innerHTML = sec
            msec = 0
            if(sec >=60){
                min++
                a.innerHTML = min
            }
        }       
        
    },10)

    
    

   








    


   

