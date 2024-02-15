// Event listener for when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', function() {
  // Get the form element by its ID
  const form = document.getElementById("calc-form");

  // Check if the form element exists
  if (form) {
    setupIntialValues();

    // Add event listener for form submission
    form.addEventListener("submit", function(e) {
      // Prevent the default form submission behavior
      e.preventDefault();
      // Update the UI based on the form values
      update();
    });
  }
});

// Function to set up initial values for the form inputs
function setupIntialValues() {
  const defaultValues = {
    amount: "10000",
    years: "3",
    rate: "5",
  };

  // Get form elements
  const inputs = document.getElementById("calc-form").elements;

  // Set default values for each input element in the form
  for (const key in defaultValues) {
    if (key in inputs) {
      inputs[key].value = defaultValues[key];
    }
  }
}

// Function to get the current values from the UI form
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
}

// Function to update the UI based on the form values
function update() {
  const values = getCurrentUIValues();
  // Calculate the monthly payment based on the form values
  const monthlyPayment = calculateMonthlyPayment(values);
  // Update the UI with the calculated monthly payment
  updateMonthly(monthlyPayment);
}

// Function to calculate the monthly payment based on loan parameters
function calculateMonthlyPayment({ amount, years, rate }) {
  // Calculate monthly interest rate and number of payments
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = years * 12;

  // Use the formula to calculate the monthly payment
  const monthlyPayment =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

  // Format the result to two decimal places
  return monthlyPayment.toFixed(2);
}

// Function to update the UI with the calculated monthly payment
function updateMonthly(monthly) {
  // Get the element where the monthly payment will be displayed
  const monthlyPaymentElement = document.getElementById("monthly-payment");
  // Update the content of the element with the calculated monthly payment
  monthlyPaymentElement.textContent = `$${monthly}`;
}
