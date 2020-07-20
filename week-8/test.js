var fruits = [
  {id: 1, fruit: "strawberry"},
  {id: 2, fruit: "peach"},
  {id: 3, fruit: "grape"},
  {id: 4, fruit: "apple"},
  ]

  var out = '';

  fruits.forEach(function(fruits){
  out += '<li>' + "ID: " + fruits.id + " Fruit: " + fruits.fruit  + '</li>';
  });

  out = '<ul>' +  out + '</ul>';

  $("p").css("background-color")
