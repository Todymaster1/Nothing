    // JavaScript code for form validation
    // Prevent form from submitting
    let form = document.getElementById("myForm");
    let textRegex = /^[a-zA-Z0-9]+$/;


    form.addEventListener('submit', function(event) {
        if (textRegex.test(inputField.value)) {
            alert('Input is valid. Form submitted.');
        } else {
            alert("Input is invalid. Please try again");
            event.preventDefault();
        }
    })



    // Retrieve the input field value

    // Regular expression pattern for alphanumeric input

    // Check if the input value matches the pattern

    // Valid input: display confirmation and submit the form

    // Invalid input: display error message