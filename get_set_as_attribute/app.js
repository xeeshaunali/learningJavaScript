//getAttribute
/*
function foo(){
    var a = document.getElementById('abc')
    var b = a.getAttribute('class')
    console.log(b)

}
*/

function foo(){
var a = document.getElementById('abc')
var b = a.setAttribute('class', 'change')
console.log(b)
}