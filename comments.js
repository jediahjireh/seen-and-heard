//JS file for user comments
//function to display formatted comments
function displayComments() {
    //retrieve comments from local storage or initialise array
    let arrComments = JSON.parse(localStorage.getItem('arrComments')) || [];
    //get container for comment display
    let commentsContainer = document.getElementById('comments');

    //clear comments container
    commentsContainer.innerHTML = '';

    //loop through comments array 
    arrComments.forEach(comment => {
        //create div for comment element
        let commentElement = document.createElement('div');
        commentElement.innerHTML = comment + '<hr>';
        //add comment to container
        commentsContainer.appendChild(commentElement);
    });
}
//display existing comments upon onload
document.addEventListener('DOMContentLoaded', displayComments);

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

//function to submit comment when submit comment button is clicked
function submitComment() {
    //required fields filled in correctly
    if (inputValidation()) {
        //get input data
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let comment = document.getElementById('comment').value;

        //format comment string
        let commentText = `<strong>${name}</strong> (${email}): ${comment}`;

        //retrieve comments stored in local storage
        let arrComments = JSON.parse(localStorage.getItem('arrComments')) || [];
        //add new comment to array of comments
        arrComments.push(commentText);
        //update comments in local storage
        localStorage.setItem('arrComments', JSON.stringify(arrComments));

        //notify user of comment success
        alert('Comment successfully added!');

        //reload webpage to display comments
        location.reload();

        //clear input fields after comment is submitted
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
    }
    else {
        //notify user of incomplete form
        alert("Please fill in all required empty fields.");
    }
}