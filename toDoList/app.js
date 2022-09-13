function foo(){
    var docs = document.getElementById('list')
    // var newElement = document.createElement('p')
    var newLi = document.createElement('li')
    var newMsg = document.createTextNode(docs.value)
    newLi.appendChild(newMsg) 
    var a = document.getElementById('myDiv').appendChild(newLi)

    

}