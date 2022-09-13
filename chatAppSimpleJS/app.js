

function foo(){
var a = document.getElementById('chat')
var newElement = document.createElement('p')
var newMsg = document.createTextNode(a.value)
newElement.setAttribute('id','shush')
var para = document.getElementById('shush')
newElement.append(newMsg)
var paragraph = document.getElementById('chat').appendChild(newElement)
}
