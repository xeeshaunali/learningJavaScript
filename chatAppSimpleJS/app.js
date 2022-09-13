function foo(){
    var a = document.getElementById('abc')
    var newElement = document.createElement('p')
    newElement.setAttribute('id','shush')
    var b = document.getElementById('shush')
    console.log(newElement)
    var newMsg = document.createTextNode(a.value)
    newElement.appendChild(newMsg)
    res = newElement.appendChild(newMsg)
    document.getElementById("body").appendChild(res);
    
    
    
}