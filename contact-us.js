//JS file for contact forms (given its own JS file in case of wanting to expand the number of contact form functionality on webpages in future)

//contact us form:
//function to validate data input 
function inputValidation() {
    //initialise variable
    let booleanValid = true;
    //loop through each input and select fields
    for (let element of document.querySelectorAll('input[required]')) {
        //check if field is empty -> referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim for for guidance on the .trim() method
        //if (element.value === null) {
        if (element.value.trim() === "") {
            booleanValid = false;
            //error handling
            console.log("Please fill in all required empty fields.");
            //exit loop if empty field found
            break;
        }
    }
    //send as argument
    return booleanValid;
}

//retrieve messages stored in local storage or initialise array
let arrMessages = JSON.parse(localStorage.getItem('arrMessages')) || [];

//constructor function to create all message objects
function Messages(user, name, surname, email, message) {
    this.user = user;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.message = message;
};

//function to submit message upon submit message button click
function submitMessage() {
    //required fields filled in correctly
    if (inputValidation()) {
        //get input data
        //get selected radio group value
        let user = document.querySelector('input[name="userSelection"]:checked').value;
        let name = document.getElementById('contactName').value;
        let surname = document.getElementById('contactSurname').value;
        let email = document.getElementById('contactEmail').value;
        let message = document.getElementById('contactMessage').value;

        //call the messages constructor function to pass through data as arguments to create a new message object
        let newMessage = new Messages(user, name, surname, email, message);
        //add object to array
        arrMessages.push(newMessage);
        //update messages in local storage
        localStorage.setItem('arrMessages', JSON.stringify(arrMessages));

        //notify user
        alert(`Your message has been sent, ${name}!
Thank you for reaching out.`);
        //reload webpage upon form submission
        location.reload();
        //clear input fields after message is 'sent'
        document.querySelector('input[name="userSelection"]:checked').checked = false;
        document.getElementById('contactname').value = '';
        document.getElementById('contactsurname').value = '';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactMessage').value = '';
    }
    else {
        //notify user of incomplete form
        alert("Please fill in all required empty fields.");
    }
}