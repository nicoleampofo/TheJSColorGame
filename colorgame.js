//generates six random colors to choose from
var colors = generateRandomColors(6);
	
	var numSquares =6;
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	var modeButtons = document.querySelectorAll(".mode");

	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove ("selected");
			modeButtons[1].classList.remove ("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy"){
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			reset();
		})
	}

	function reset(){
		colors = generateRandomColors(numSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors"
		messageDisplay.textContent = "";
		//change colors of the squaress
		for(var i = 0; i < squares.length; i++){
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}
		h1.style.backgroundColor = "steelblue";
	}


	resetButton.addEventListener("click", function(){
		//generate all new colors
		colors = generateRandomColors(numSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors";

		messageDisplay.textContent = "";
		//change colors of the squares
		for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		}
		h1.style.backgroundColor = "steelblue";
	})

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//add click listener to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
			}
		});
	}
	
	function changeColors(color){
		//loop through all squares
		for(var i = 0; i < squares.length; i++){
		//change each olor to match the correct color
		squares[i].style.backgroundColor = color;
		}
	}
//Chooses a random color as the correct choice
	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

//Returns x number of colors in the array. Easy mode vs. Hard mode
function generateRandomColors(num){
	//make an array
	var arr = []
	//addnumrandomcolors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		//get random color and push in to array. repeat num times.
	}
	//return that array
	return arr;
}

	function randomColor(){
		//pick a "red" from 0 -255 (math.random gives a number between 0 and less than 1)
		var r = Math.floor(Math.random() * 256);
		//pick a "green" from 0 -255
		var g = Math.floor(Math.random() * 256);
		//pick a "blue" from 0 -255
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b +")";
	}
