
      // Business (or back-end) logic:

      var add = function(number1, number2) {
        return number1 + number2;
      };

      var subtract = function(number1, number2) {
        return number1 - number2;
      };

      var multiply = function(number1, number2) {
        return number1 * number2;
      };

      var divide = function(number1, number2) {
        return number1 / number2;
      };

      // User interface (or front-end) logic:

      $(document).ready(function() {
        $("form#add").submit(function(event) {
         event.preventDefault();
          var number1 = parseInt($("#add1").val());
          var number2 = parseInt($("#add2").val());
          var result = add(number1, number2);
          $("#output").text(result);
        });
      });
   
//    gather info from date input
//    $("#born").val();

    //   to gather info from the select input
    // $("#beverage").val()

    // checking radio boxes value 
    //  var flavor = $("input:radio[name=flavor]:checked").val();

    // gather info on color
    // $("#color").val()