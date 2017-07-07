var currentQuestion = 0; 	
var state = {
	 1: "Does your animal have wings?",
	 2: "Does your animal have feathers?"
};

function robotResponse(userInput) {

	if (userInput.toLowerCase().indexOf("no") != -1) {
		if (currentQuestion == 0)
			return "Your animal is an insect";
		if (currentQuestion == 1) {
			currentQuestion++;
			return "Does your animal lay eggs?";
		}

 		return "I'm sorry. I could not determine your age. Please call (02) 1234 5678 for assistance.";
		
 	} else if (userInput.toLowerCase().indexOf("yes") != -1) {
 		if (currentQuestion == 0) {

 			// Increment the question counter
 			currentQuestion++;

 			// Ask the next question
 			return state[currentQuestion];
 		}
 		
 	} else {
 		return "Please enter your answer in the form of 'Yes' or 'No'";
 	}
  	return response;


}


