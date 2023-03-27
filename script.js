// Get the form element
const form = document.querySelector('form');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input fields
  const name = document.querySelector('input[type="text"][placeholder="Enter your name"]').value;
  const number = document.querySelector('input[type="number"][placeholder="Enter your number"]').value;
  const address = document.querySelector('input[type="text"][placeholder="Enter your address"]').value;
  const email = document.querySelector('input[type="text"][placeholder="Enter your email"]').value;
  const qualification = document.querySelector('input[type="text"][placeholder="Enter your qualification"]').value;
  const occupation = document.querySelector('input[type="text"][placeholder="Enter your occupation"]').value;
  const department = document.querySelector('input[type="text"][placeholder="Enter your department"]').value;
  const state = document.querySelector('input[type="text"][placeholder="Enter your state"]').value;
  const city = document.querySelector('input[type="text"][placeholder="Enter your city"]').value;

  // Display an alert with the input field values
  alert(`Name: ${name}\nMobile Number: ${number}\nAddress: ${address}\nEmail: ${email}\nQualification: ${qualification}\nOccupation: ${occupation}\nDepartment: ${department}\nState: ${state}\nCity: ${city}`);
});
