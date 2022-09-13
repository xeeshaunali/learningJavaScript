function foo(){
    var docs = document.getElementById('list')
    // var newElement = document.createElement('p')
    var newLi = document.createElement('li')
    var newMsg = document.createTextNode(docs.value)
    newLi.appendChild(newMsg) 
    var a = document.getElementById('myDiv').appendChild(newLi)
    docs.value = ''   

}


/*
var a = document.getElementById ( ' abc ' )
function bhejo ( ) {
    var add = document.getElementById ( ' addtodo ' )
    var li = document.createElement ( ' li ' )
   var textinsert = document.createTextNode ( add.value )
    li.appendChild ( textinsert )
    a.appendChild ( li )
}
*/