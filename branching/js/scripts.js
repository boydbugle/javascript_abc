 $(document).ready(function() {
        var age = parseInt(prompt("How old are you?"));
        // var over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");

        if (age >= 21) {
          $('#drinks').show();
        } else {
          $('#under-21').show();
        }
      });