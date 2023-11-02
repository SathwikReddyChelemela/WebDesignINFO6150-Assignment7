Part A

This project consists of a simple web page that combines a login form and a basic calculator. Users can log in using the provided form and perform basic arithmetic calculations.


Features

Login Page

Input fields for Email, Username, Password, and Confirm Password.
Utilizes client-side validation with jQuery to enforce the following rules.
Error messages are displayed in red below the respective input fields.
The login button is initially disabled and becomes enabled when all validations pass.
The Email field only accepts emails from a specified domain (e.g., northeastern.edu).

Calculator Page

Displays the logged-in username as a welcoming message.
Provides two input fields for numbers, validated for non-numeric values, empty fields, and special characters.
Offers four operation buttons: Add, Subtract, Multiply, and Divide.
Result display field is non-editable and shows the calculated outcome.
All operations are executed using a single arrow function for efficiency.
Validation Rules

Login Form

All fields are mandatory and should not contain special characters.

The Password must be at least 8 characters long and contain one lowercase letter, one uppercase letter, one numeric digit, and one special character.

Confirm Password should match the Password field for confirmation.

Email input must adhere to a valid format and belong to the specified domain.

Calculator

Input fields must exclusively contain numerical values.
Special characters are not permitted.
The script identifies and prevents infinite or undefined results.





Part B

This single-page stopwatch application harnesses modern JavaScript features, including Async/Await and Promises, to manage asynchronous operations. The application showcases time in a non-editable label and offers user control with Start, Stop, and Reset buttons. It also includes a date picker for selecting dates, although the date is displayed but not editable within the context of the stopwatch functionality.

Features

Non-Editable Stopwatch Display: Displays time in the HH:MM:SS format.
Non-Editable Date Picker: Set to the current date, allowing users to view past and future dates.
Control Buttons:
Start: Initiates the timer.
Stop: Halts the timer.
Reset: Resets the timer to 00:00:00.







