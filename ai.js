 function robotResponse(userInput) {

  var defaultFallback = "I'm sorry, I do not understand. Would you like to know what I can do?"; 
  var positiveSentiment = ['good', 'great'];
  var negativeSentiment = ['bad', ' lousy'];
  var yesSent = ['yes', 'yup'];
  var noSent = ['no', 'nah'];
  
  if (userInput.toLowerCase().indexOf(positiveSentiment)) {
   return "Great to hear!" + "<br>" + "What is your age?";
  } elseif (userInput.toLowerCase().indexOf(negativeSentiment)) {
   return "I'm sorry to hear." + "<br>" + "What is your age?";
  } else {
   return function fallbackFunc(userInput) {
    return defaultFallback;
    if (userInput.toLowerCase().indexOf(yesSent) {
      return "Try typing in \"help\"."; 
     } else {
      return "Sorry I couldn\'t help.";
     };
   };
  };
  
 	var response = "I'm sorry but I could not determine your salary. Please try again.";
 	var helpWords = ["help", "assist", "aid"];

 	for (var helpWord of helpWords) {
 		if (userInput.toLowerCase().indexOf(helpWord) != -1) {
 			return "It seems like you need assistance. Please visit http://www.test.com/help for further help";	
 		}
 	}
  

 	var age = userInput.match(/\d+/g);
 	if (null == age) {
 		return "I'm sorry. I could not determine your age. Please call (02) 1234 5678 for assistance.";
 	} else {
 		var userAge = parseInt(age[0]);
 		if (userAge > 125) {
 			return "Your age is: " + age[0] + ". Are you sure?";
 		}
 		else {
 			return "Your age is: " + age[0];
 		}
 		
 	}

 }
