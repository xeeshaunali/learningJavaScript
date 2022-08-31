function styleOneDiv(){
var a = document.getElementById('para')
a.className = 'oneDiv'


var b = document.getElementsByTagName('p')
for (var i = 0; i < b.length; i++){
    if(i<4){
        b[i].className = 'one'
        b[i].innerHTML = 'Xeeshaun Ali Narejo Data Coder'
    }
}

}


