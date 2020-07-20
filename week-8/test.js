var employee = [
  {id: 1, firstName: "Bob", lastName: "Lezowzky", title: "HR Manager"},
  {id: 2, firstName: "Harold", lastName: "Kumar", title: "Custodian"},
  {id: 3, firstName: "Lucy", lastName: "Mcdabber", title: "Accountant"},
  {id: 4, firstName: "Stacy", lastName: "Dash", title: "Loss Prevention"},
  {id: 5, firstName: "Rhonda", lastName: "Lucille", title: "CEO"},
  ]

function getEmployee(input){
  employee.forEach(element => {
    if (element.id == input)
         {//alert("Match");
         console.log('match');
        }
  });
}

var output = "<table></table>"

employee.forEach(element => {
  $( "li" ).prepend( $( "<tr><th> Title</th></tr>" ) );
});






//<tr><td></td><td></td></tr><tr><td></td><td></td></tr>
