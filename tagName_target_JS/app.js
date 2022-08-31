// function change(){
//     var a = document.getElementById('link')
//     a.href = 'https://www.youtube.com'
// }



function styleAllTag(){
    var a = document.getElementsByTagName('p')    
    for (var i = 0; i < a.length; i++){
        a[i].style.backgroundColor = 'red'
        a[i].style.color='white'
        a[i].style.fontSize = '40px'
        a[i].style.fontWeight = 'bolder'
        a[i].innerHTML = 'Xeeshaun'
        


    }
    
    
}

