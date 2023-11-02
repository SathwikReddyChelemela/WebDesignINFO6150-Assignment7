$.validator.addMethod("regex", function(value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
}, "Please check your input.");
$(document).ready(function () {
    $("input.submit").prop('disabled', true);
    $("#signupForm").validate({
    
        // In 'rules' user have to specify all the 
    // constraints for respective fields
    rules: {
        username: {
            required: true,
            minlength: 2
        },
        password: {
            required: true,
            minlength: 8,
            regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$" // Password must contain lowercase, uppercase, numeric, and special character
        },
        confirm_password: {
            required: true,
            minlength: 8,
            equalTo: "#password" // Must be equal to the password field
        },
        email: {
        required: true,
        email: true,
        regex: "^[a-zA-Z0-9._%+-]+@northeastern\\.edu$" // Regex for northeastern.edu emails
        },
    },
    messages: {
        username: {
            required: "Please enter a username",
            minlength: "Your username must consist of at least 2 characters"
        },
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 8 characters long",
            regex: "Your password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
        },
        confirm_password: {
            required: "Please provide a password",
            minlength: "Your confirm password must be at least 8 characters long",
            equalTo: "Please enter the same password as above"
        },
        email: {
            required: "Please provide northeastern email address",
            email: "Please enter a valid northeastern email address",
            regex: "Please enter a valid northeastern email address"
        },
    },
    invalidHandler: function(event, validator) {
        // Disable the login button if the form is invalid
        $("input.submit").prop('disabled', true);
    },
        submitHandler: function(form) {
            // This function runs when the form passes validation.
            // Get form data
            
            var formData = {
                username: $('#username').val(),
                password: $('#password').val(),
                email: $('#email').val(),
            };
            $("input.submit").prop('disabled', false);
            console.log(username)

            // Store form data in sessionStorage
            sessionStorage.setItem('signupFormData', JSON.stringify(formData));

            // Submit the form
            form.submit();
        }
    });
    // Check the form validity on every keyup and change event
    $("#signupForm input").on('keyup change', function() {
        // Check if the form is valid
        if ($("#signupForm").valid()) {
            $("input.submit").prop('disabled', false);
        } else {
            $("input.submit").prop('disabled', true);
        }
    });
});


