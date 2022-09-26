//localStorage()
//sessionStorage()
//localStorage.clear()
//localStorage.clear()

//localStorage() accepts objects 
// key and value as in object

// localStorage.setItem('age', 22)
// localStorage.setItem('name','Saad')
// sessionStorage.setItem('name', 'Fariha')
// sessionStorage.setItem('age', 100)

// document.write(localStorage.getItem('name'), localStorage.getItem('age'), localStorage.getItem('non-Existance')
// ) 

// localStorage.clear()
// sessionStorage.clear()

//SIGNUP FORM
function signup(){var fname = document.getElementById('fname').value;
                    localStorage.setItem('First Name', fname);
                    var lname = document.getElementById('lname').value;
                    localStorage.setItem('last Name', lname);
                    var email1 = document.getElementById('email1').value;
                    localStorage.setItem('Email', email1);
                    var pass1 = document.getElementById('pass1').value;
                    localStorage.setItem('Password', pass1);
                    var pass2 = document.getElementById('pass2').value;
                    localStorage.setItem('PasswordConfirm', pass2);
                    alert('Data saved successfully')
}

function login(){
    var username = document.getElementById('email1')
    var password = document.getElementById('pass1')
    if (username.value === localStorage.getItem(email1) && password === localStorage.getItem(pass1)){
        alert('Done')
    }    
    else {
        alert('failed')
    }
}
