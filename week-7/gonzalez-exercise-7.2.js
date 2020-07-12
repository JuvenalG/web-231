
/*
============================================
; Title:  gonzalez-discussion-7.2
; Author: Juvenal Gonzalez
; Date:   12 July 2020
; Description: Creat a constructor that allows you to specify the data fields value for each object
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

//header
const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 7.2"));

//constructor specifies what each parameter will be assigned to
function Employee(id, firstName, lastName, title){
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}
//array of intitialzed objects with desired input in data fields
 var employeeArray =[
   new Employee(1,"Thomas", "Edison", "Software Engineer"),
   new Employee(2,"Benjamin", "Franklin", "Programmer"),
   new Employee(3,"Nikola", "Tesla", "Project Manager"),
   new Employee(4,"Charles", "Babbage", "Product Manager"),
   new Employee(5,"Alexander", "Bell", "Business Analyst"),

];
//for each loop that outputs each elements data fields
employeeArray.forEach(element => {
  console.log(element.id, element.firstName, element.lastName, element.title);
});
