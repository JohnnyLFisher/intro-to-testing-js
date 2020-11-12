// helloWorld function 
const helloWorld = function(){
	return "Hello, World!";
};
function sayHello(name){
	if ((typeof name !== "string") || name === ""){
		return "Hello, World!"
	} else {
		return "Hello, " + name + "!";
	}
};