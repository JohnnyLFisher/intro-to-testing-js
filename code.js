// helloWorld function 
const helloWorld = function(){
	return "Hello, World!";
};
//sayHello function
function sayHello(name){
	if ((typeof name !== "string") || name === ""){
		return "Hello, World!";
	} else {
		return "Hello, " + name + "!";
	}
};
//isFive function
function isFive(num) {
	return num == 5;
};
//isEven function
function isEven(num){
	return parseFloat(num) % 2 === 0
};
//isVowel function
function isVowel(letter) {
	if (letter === "a"){
		return true
	} else if (letter === "A"){
		return true
	} else if (letter === "e"){
		return true
	} else if (letter === "E"){
		return true
	} else if (letter === "i"){
		return true
	} else if (letter === "I"){
		return true
	} else if (letter === "o"){
		return true
	} else if (letter === "O"){
		return true
	} else if (letter === "u"){
		return true
	} else if (letter === "U"){
		return true
	} else {
		return false
	}
};
//add function
function add(num1,num2) {
		return parseFloat(num1) + parseFloat(num2);
};
