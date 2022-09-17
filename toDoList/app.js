// function foo(){
//     var docs = document.getElementById('list')    
//     var newLi = document.createElement('li')
//     var newMsg = document.createTextNode(docs.value)
//     newLi.appendChild(newMsg) 
//     var a = document.getElementById('myDiv').appendChild(newLi)
//     docs.value = ''
//     var del = document.createElement('button')
//     var delbtn = document.createTextNode('delete')
//     del.appendChild(delbtn)
//     newLi.append(del)
    
//     del.setAttribute('onclick', 'delItem()')   

// }

// function delItem(e){
//    console.log(e)

// }


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


function foo(){
    var inputt = document.getElementById('inputt')
    var newElement = document.createElement('li')
    var newMsg = document.createTextNode(inputt.value)
    newElement.appendChild(newMsg)
    console.log(newElement)
    var newUl = document.createElement('ul')
    newUl.appendChild(newElement)
    console.log(newUl)

    
}










