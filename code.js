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