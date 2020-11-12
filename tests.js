// Unit tests for the helloWorld function
describe("helloWorld", function() {
	it('should be a defined function', function() {
		expect(typeof helloWorld).toBe("function");
	});
	it('should return a string when called', function() {
		expect(typeof helloWorld()).toBe("string");
	});
	it('should return the string "Hello, World!" when executed', function() {
		expect(helloWorld()).toBe("Hello, World!");
	});
	it("should never return 'undefined' when called", function() {
		expect(helloWorld()).not.toBe(undefined);
	});
});

describe("sayHello", function () {
	it('should be a defined function', function () {
		expect(typeof sayHello).toBe("function")
	});
	it('should return a string when called', function() {
		expect(typeof sayHello()).toBe("string");
	});
	it('should return the string "Hello, Jane!" when executed', function() {
		expect(sayHello("Jane")).toBe("Hello, Jane!");
	});
	it('should return the string "Hello, Alex!" when given "Alex"', function() {
		expect(sayHello("Alex")).toBe("Hello, Alex!");
	});
	it('should return the string "Hello, Pat!" when given "Pat"', function() {
		expect(sayHello("Pat")).toBe("Hello, Pat!");
	});
	it('should return the string "Hello, World!" when executed', function() {
		expect(sayHello()).toBe("Hello, World!");
	});
	it('should return the string "Hello, World!" when given false', function () {
		expect(sayHello(false)).toBe("Hello, World!")
	});
	it('should return the string "Hello, World!" when given empty string', function () {
		expect(sayHello("")).toBe("Hello, World!")
	});
});

 describe("isFive", function () {
	 it('should be a defined function', function () {
		 expect(typeof isFive).toBe("function");
	 });
	 it('should always return a boolean', function (){
	 	expect(typeof isFive()).toBe("boolean");
	 });
	 it('should return true when given 5', function () {
		 expect(isFive(5)).toBe(true);
	 });
	 it('should return true when given the string "5"', function () {
		 expect(isFive("5")).toBe(true);
	 });
	 it('should return false when given "five"', function () {
		 expect(isFive("five")).toBe(false);
	 });
	 it('should return false when given empty string', function () {
		 expect(isFive("")).toBe(false);
	 });
 });

 describe("isEven", function () {
	 it('should be a defined function', function () {
		 expect(typeof isEven).toBe("function");
	 });
	 it('should return a boolean no matter what', function () {
		 expect(typeof isEven()).toBe("boolean");
	 });
	 it('should return true when given 2', function () {
		 expect(isEven(2)).toBe(true);
	 });
	 it('should return true when given -4', function () {
		 expect(isEven(-4)).toBe(true);
	 });
	 it('should return false when given 3', function () {
		 expect(isEven(3)).toBe(false);
	 });
	 it('should return false when given "banana"', function () {
		 expect(isEven("banana")).toBe(false);
	 });
	 it('should return true when given "8"', function () {
		 expect(isEven(8)).toBe(true);
	 });
	 it('should return false when given Infinity', function () {
		 expect(isEven(Infinity)).toBe(false);
	 });
	 it('should return false when given false', function () {
		 expect(isEven(false)).toBe(false);
	 });
	 it('should return false when given true', function () {
		 expect(isEven(true)).toBe(false);
	 });
	 it('should return false when called without an argument', function () {
		 expect(isEven()).toBe(false);
	 });
 });