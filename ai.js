var currentResponse = ""; 	

var YEARS = 0;
var START_DATE = 1;
var RENT = 2;

var leaseYears = "";
var leaseStartDate = "";
var leaseRent = "";

var state = YEARS;

function robotResponse(userInput) {

	if (state == YEARS) {

		if (isNumber(userInput) && parseInt(userInput) >= 3) {
			response = "Please enter the start date of the lease."
			leaseYears = userInput;
			state++;
		} else {
			response = "Please enter the number of years in the lease as a number only eg 5. The lease must be for three or more years."
		}

 	} 

 	else if (state == START_DATE) {

 		if (isDate(userInput)) {
 			response = "Please enter the yearly rent."
 			leaseStartDate = userInput;
 			state++;
 		} else {
 			response = "Please enter the date in the following format: DD/MM/YYYY"
 		}
 		

 		
 	} 

 	else if (state == RENT) {

 		if (isCurrency(userInput)) {

 			leaseRent = userInput;
 			var leaseRentAsNumber = Number(leaseRent.replace(/[^0-9\.]+/g,""));
 			var totalRent = leaseRentAsNumber * leaseYears;
 			response = "I am now preparing the following lease:<br><br>Years: " + leaseYears + " <br>Start date:" + leaseStartDate + "<br>Rent:" + leaseRent + "<br>Total rent: $" + totalRent.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');;
	  		$("#btn-input").prop('disabled', true);
	 		$("#btn-chat").prop('disabled', true);

 		} else {
 			response = "Please enter a dollar amount eg $53,246.35";
 		}
 	}

  	return response;
}

function isNumber(obj) { 
	return !isNaN(obj)
}

function isDate(str) {
  var m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  return (m) ? new Date(m[3], m[2]-1, m[1]) : null;
}

function isCurrency(str) {
	var regex = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/;
	return regex.test(str);

}