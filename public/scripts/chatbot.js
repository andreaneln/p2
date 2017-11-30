(function chatbot() {
    
        $('#live-chat header').on('click', function() {
    
            $('.chat').slideToggle(300, 'swing');
            $('.chat-message-counter').fadeToggle(300, 'swing');
        
        });
    
        $('.chat-close').on('click', function(e) {
    
            e.preventDefault();
            $('#live-chat').fadeOut(300);
    
        });
    
    }) ();

    //adding code - asking a question 

    var questionNum = 0;													// keep count of question, used for IF condition.
    var question = "Would you like to run 2km, 5km or 10km?";				  // first question
    
    var output = document.getElementById('output');				// store id="output" in output variable
    output.innerHTML = question;													// ouput first question
    
    function bot() { 
        var input = document.getElementById("input").value;
        console.log(input);
    
        if (questionNum == 0) {
        output.innerHTML = '<h1> Good choice for the ' + input + '</h1>';// output response
        document.getElementById("input").value = "";  			 		// clear text box
        question = '<h1>Are you training for a marathon?</h1>';			 // load next question		
        setTimeout(timedQuestion, 2000);												// output next question after 2sec delay
        }
                if (input== "yes" || input == "no") {
          output.innerHTML = '<h1> Then here are some specific training plans for you </h1>';
          setTimeout(timedQuestion, 2000);
          window.location.href = "fares";
          }
    
    }
    
    function timedQuestion() {
        output.innerHTML = question;
    }
    
    //push enter key (using jquery), to run bot function.
    $(document).keypress(function(e) {
      if (e.which == 13) {
        bot();									// run bot function when enter key pressed
        questionNum++;							// increase questionNum count by 1
      }
    });
    
    
    
    