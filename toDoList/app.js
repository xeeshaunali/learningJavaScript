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

// TO DO LIST APPLICATION CODE
var a = document.getElementById('abc')

function bhejo(){
    var add = document.getElementById('addtodo')
    var li = document.createElement('li')    
    var insert = document.createTextNode(add.value)
    li.appendChild(insert)
    console.log(li)
    a.appendChild(li)
    add.value = ''
    var del = document.createElement('button')    
    var delbtn = document.createTextNode('delete')
    del.appendChild(delbtn)    
    li.appendChild(del)
    del.setAttribute('onclick','delitem(this)')
    var editbtn = document.createElement('button')
    var editbtntxt = document.createTextNode('Edit')
    editbtn.appendChild(editbtntxt)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','editfunc(this)')


}
function delitem(e){
    // console.log(e)
    e.parentNode.remove()
}

function delall(){
    a.innerHTML = ''
}

function editfunc(e){
//    console.log(e)
        var editValue = prompt('Enter Value',e.parentNode.firstChild.nodeValue)        
        e.parentNode.firstChild.nodeValue = editValue       
}


// EDIT KA KAM KARNA HA








