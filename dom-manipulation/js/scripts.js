
      $(document).ready(function() {
        $("button#hello").click(function() {
          $("ul#user").prepend("<li>Hello!</li>");
          $("ul#webpage").prepend("<li>Why hello there!</li>");
          $("ul#user").children("li").first().click(function() {
        $(this).remove();
        $('li').css('background-color', 'green');
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
        $('li').css('background-color', 'teal');
      });
        });

        $("button#goodbye").click(function() {
          $("ul#user").prepend("<li>Goodbye!</li>");
          $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
          $('li').css('background-color', 'gold');
          $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
      });
        });

        $("button#stop").click(function() {
          $("ul#user").prepend("<li>Stop copying me!</li>");
          $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
          $("ul#user").children("li").first().click(function() {
        $(this).remove();
        $('li').css('color', 'green');
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
        $('li').css('color', 'blue');
      });
        });
      });
    

// $(document).ready(function() {
//       $("button#hello").click(function() {
//         $("ul#user").prepend("<li>Hello!</li>");
//         $("ul#webpage").prepend("<li>Why hello there!</li>");
//         $('li').css('color', 'green');
//       });
//        });


// $(document).ready(function() {
//     $("button#hello").click(function() {
//         $("ul#user").prepend("<li>Hello!</li>");
//         $("ul#webpage").prepend("<li>Why hello there!</li>")
//         $("ul#user").children("li").first().click(function() {
//         $(this).remove();
//       });
//       $("ul#webpage").children("li").first().click(function() {
//         $(this).remove();
//       });
//       });
//        });