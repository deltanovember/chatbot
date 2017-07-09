var currentResponse = ""; 	
var decisionTree = {
	"": "Does your animal have a skeleton?",
	"0": "Your animal is an insect",
	"1": "Does your animal have wings?",
	"10": "Does your animal lay eggs?",	
	"100": "Does your animal's baby drink milk from its mother?",
	"1000": "Does your animal go through metamorphosis?",	
	"10000": "Does your animal have gills?",
	"100000": "Your animal is a reptile",
	"100001": "Your animal is a fish",
	"10001": "Your animal is a reptile",
	"10001": "Your animal is an amphibian",
	"100011": "Your animal is a fish",
	"1001": "Your animal is a mammal",
	"101": "Does your animal go through metamorphosis?",
	"1010": "Does your animal have gills?",
	"10100": "Your animal is a reptile",
	"10100": "Your animal is a reptile",
	"10101": "Your animal is a fish",
	"10101": "Your animal is a fish",
	"1011": "Your animal is an amphibian",
	"11": "Does your animal have feathers?",
	"110": "Your animal is a bat and is a mammal",
	"111": "Your animal is a bird"
}

function robotResponse(userInput) {

	if (userInput.toLowerCase() == 'no') {
		currentResponse += "0";
		
 	} else if (userInput.toLowerCase() == 'yes') {
 		currentResponse += "1"
 		
 	} else {
 		return "Please enter your answer in the form of 'Yes' or 'No'. " + decisionTree[currentResponse];
 	}
 	answer = decisionTree[currentResponse];
 	if (answer.indexOf("Your animal is") != -1) {
 		$("#btn-input").prop('disabled', true);
 		$("#btn-chat").prop('disabled', true);
 	}
	
  	return answer;
}


