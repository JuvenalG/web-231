
      //this script has 2 errors

        //toggles image on click of button
        //Function was missing a parenthesis
        $(".button").click(function () {
          $("#nick").toggle("slow", function () {
            alert("Why?");
          });
          //toggles button text
          $(this).text(function (i, text) {
            return text === "PUSH ME" ? "DON'T PUSH ME!" : "PUSH ME!";
          });
        });

