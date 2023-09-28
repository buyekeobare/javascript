# How to structure a web form

## Tasks

O. Create your form by adding a <form> element

1. Inside the <form> element, add a heading and paragraph to inform users how required fields are marked

2. Next, we'll add a larger section of code into the form, below our previous entry. Here you'll see that we are wrapping the contact information fields inside a distinct <section> element. Moreover, we have a set of three radio buttons, each of which we are putting inside its own list (<li>) element. We also have two standard text <input>s and their associated <label> elements, each contained inside a <p>, and a password input for entering a password.

3. The second <section> of our form is the payment information. We have three distinct controls along with their labels, each contained inside a <p>. The first is a drop-down menu (<select>) for selecting credit card type. The second is an <input> element of type tel, for entering a credit card number; while we could have used the number type, we don't want the number's spinner UI. The last one is an <input> element of type text, for entering the expiration date of the card; this includes a placeholder attribute indicating the correct format, and a pattern that tests that the entered date has the correct format. These newer input types are reintroduced in The HTML5 input types.

4. The last section we'll add is a lot simpler, containing only a <button> of type submit, for submitting the form data
