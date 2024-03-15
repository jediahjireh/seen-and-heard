//manipulation code for about-us.html webpage
//store email address for newsletters upon subscribe button click
document.getElementById('subscribeBtn').addEventListener('click', function () {
    //get input variable
    let emailAddress = document.getElementById('subscribeEmail').value;

    //make sure input field is not empty
    if (emailAddress.trim() !== "") {
        //retrieve saved items from local storage or initialise array
        let arrSubscribedEmails = JSON.parse(localStorage.getItem('arrSubscribedEmails')) || [];

        //check if email is already in array
        if (arrSubscribedEmails.includes(emailAddress)) {
            //notify user that they are already subscribed
            alert('This email address is already subscribed to our newsletters!');
        }
        //if email is not in array
        else {
            //add email address to array
            arrSubscribedEmails.push(emailAddress);
            //add email address to local storage
            localStorage.setItem('arrSubscribedEmails', JSON.stringify(arrSubscribedEmails));
            //notify user
            alert('Thank you for subscribing to our newsletters!');
        }
    }
    //error handling
    else {
        alert('Invalid input! Please enter a valid email address.');
    }
});

//jQuery functions
$(document).ready(function () {
    //initially hide content box
    $('#aboutUs').hide();
    //function with chained effects
    $('#aboutUs')
        //animate content box 
        .slideDown('slow')
        .fadeIn('slow')
        //styling
        .css({
            'border': '1px solid rgb(0, 3, 22)',
            'padding': '10px',
            'background-color': 'rgb(0, 96, 250)'
        });
});