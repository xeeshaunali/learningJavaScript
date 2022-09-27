//QUIZ APPLICATION
// localStorage.clear()
function register(){
    var a = document.getElementById('yourname').value;
    var b = document.getElementById('youremail').value;
    var c = document.getElementById('yourpassword').value;
    var d = localStorage.setItem('name', a);
    var e = localStorage.setItem('email', b);
    var f = localStorage.setItem('password', c);        
    var g = document.getElementById('yourname').value = '';
    var h = document.getElementById('youremail').value = '';
    var i = document.getElementById('yourpassword').value = '';
    window.location.href = 'login.html';
}

function login(){
    var a = document.getElementById('youremail').value;
    var b = document.getElementById('yourpassword').value;
    var c = localStorage.getItem('email');
    var d = localStorage.getItem('password');
    if(a == c && b == d){
        alert('Login Successfull')
        window.location.href = 'wellcome.html';
    } else {
        alert('nahe bhai');
    }    
}


























// localStorage.clear()
// function register(){
//     var a = document.getElementById('yourname').value;
//     var b = document.getElementById('youremail').value;
//     var c = document.getElementById('yourpassword').value;
//     var d = localStorage.setItem('yourname', a);
//     var e = localStorage.setItem('youremail', b);
//     var f = localStorage.setItem('yourpassword', c);
//     var emptyname = document.getElementById('yourname').value = '';
//     var emptyemail = document.getElementById('youremail').value = '';
//     var emptypassword = document.getElementById('yourpassword').value = '';
//     window.location.href = 'login.html'    
// }

// function login(){
//     var youremail = document.getElementById('youremail').value;    
//     var yourpassword = document.getElementById('yourpassword').value;
//     if(youremail == localStorage.getItem('youremail') && yourpassword == localStorage.getItem('yourpassword')){
//         alert('done')
//         window.location.href = 'wellcome.html'        
//     } else {
//         alert('failed')
//     }
    
// }
  




// var quiz = [
//      myQuestions = [
//         {
//           question: "Who invented JavaScript?",
//           answers: {
//             a: "Douglas Crockford",
//             b: "Sheryl Sandberg",
//             c: "Brendan Eich"
//           },
//           correctAnswer: "c"
//         },
//         {
//           question: "Which one of these is a JavaScript package manager?",
//           answers: {
//             a: "Node.js",
//             b: "TypeScript",
//             c: "npm"
//           },
//           correctAnswer: "c"
//         },
//         {
//           question: "Which tool can you use to ensure code quality?",
//           answers: {
//             a: "Angular",
//             b: "jQuery",
//             c: "RequireJS",
//             d: "ESLint"
//           },
//           correctAnswer: "d"
//         }
//       ]
    

    // var obj = {
    //     name1 : 'Saad',
    //     age : 22,
    //     arr :['Ali','Syed','03213008992']
    // } 
    // for (var key in obj){
    //     document.write(key +":"+obj[key] + " <br>")
    // }
//FOR LOOP
//NESTED LOOP
//FOR EACH 
//DO WHILE
//WHILE
// FOR KEY IN OBJECT
//BREAK FLAGS



