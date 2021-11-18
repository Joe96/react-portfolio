import React, { useState } from 'react';
import { checkPassword, validateEmail } from '../../utils/helpers';
import '../../styles/style.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email) || !firstName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(message)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${firstName}`
      );
      return;
    }

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName}`);
    setFirstName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div class="row">
      <div className="col-md-3 center">
        <p>
          Contact 
          {firstName} 
          {email} 
          {message} 
        </p>
        <form className="form">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={email}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
        </form>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
          )}
      </div>
    </div>
  );
}

export default Form;
