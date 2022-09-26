//CUNSTRUCTOR FUNCTIONS
// var student1 = {
//     name1 : 'Saad',
//     age : 22,
//     id: 'csc-20S-088',
//     department: 'Computer Science'
// } 

// var student2 = {
//     name1 : 'Saad',
//     age : 22,
//     id: 'csc-20S-088',
//     department: 'Computer Science'
// } 

  
// for (var key in obj){
//     document.write(key +":"+obj[key] + " <br>")
// }


//CUNSTRUCTOR FUNCTIONS

 //MAKE FIRST LETTER OF FUNCTION CAPITAL

 function Students(name,age,department){
    this.name = name;
    this.age  = age;
    this.department = department 
 }
 var student1 = new Students('Saad',22,'Sciene')
 var student2 = new Students('ali',22,'AI')
console.log(student1)
console.log(student1)
for(var key in Students){
    document.write(key,":")
}



