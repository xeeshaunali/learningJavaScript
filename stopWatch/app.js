
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


    var a = 0
    var interval

    interval = setInterval(function(){
        a++
        document.write(a)
    },1000)

    clearInterval(interval)
    
     