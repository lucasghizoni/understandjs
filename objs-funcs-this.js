console.log(this); //points to the window

function a(){
	console.log(this); // points to the window
}

var myObj = {
	myFunc: function(){
		console.log(this); // points to myObj in memory 

		var myInnerFund = function(){
			console.log(this); // this will strangely points to the global object window.
		}
	}
};

