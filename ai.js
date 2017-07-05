 function robotResponse(userInput) {

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