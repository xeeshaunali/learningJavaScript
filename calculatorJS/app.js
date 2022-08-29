
function calc(b){
    var a = document.getElementById('abc')
    a.value += b
}


function result(){
    var h = document.getElementById('abc') 
    console.log(eval(h.value)) 
    h.value = eval(h.value)        
}

function clr(){
    var r = document.getElementById('abc')
    r.value = ''
}




