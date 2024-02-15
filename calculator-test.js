// Loading the calculator.js script before running the tests ** this could be a source for errors?
beforeAll(function(done) {
  var script = document.createElement('script');
  // Set the source attribute to the path of calculator.js
  script.src = 'calculator.js';
  // Set the onload callback to the 'done' function, indicating that the script has been successfully loaded
  script.onload = done;
  // Append the script element to the head of the document
  document.head.appendChild(script);
});

describe("Loan Calculator", function () {
  // Delay the execution of the tests for 1000 milliseconds (1 second) to ensure that the calculator.js script has loaded
  setTimeout(function() {
    it("should calculate the monthly payment correctly", function () {
      const values = { amount: 10000, years: 3, rate: 5 };
      // Call the calculateMonthlyPayment function with the input values
      const result = calculateMonthlyPayment(values);
      // Expect the result to be equal to the expected monthly payment value as a string
      expect(result).toEqual("304.22");
    });

    // Test case: Ensure that the result has exactly 2 decimal places
    it("should return a result with 2 decimal places", function () {
      const values = { amount: 15000, years: 2, rate: 7.5 };
      // Call the calculateMonthlyPayment function
      const result = calculateMonthlyPayment(values);
      // Extract the number of decimal places in the result
      const decimalCount = (result.split(".")[1] || []).length;
      // Expect the decimal count to be 2
      expect(decimalCount).toBe(2);
    });
  }, 1000);
});
