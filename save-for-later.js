//javascript file for all save-for-later functionality
//initialise saved item counter
let iCountItemsSaved = parseInt(localStorage.getItem('savedItemCount')) || 0;

//retrieve saved items from local storage or initialise array
let arrSavedImages = JSON.parse(localStorage.getItem('arrSavedImages')) || [];

//index webpage
//function to save item for later
function saveImageForLater(itemName, itemUrl) {
    //initialise boolean variable
    let itemAdded = false;
    //check if item is already added
    for (let i = 0; i < arrSavedImages.length; i++) {
        if (arrSavedImages[i].name === itemName) {
            itemAdded = true;
            //item found so exit loop
            break;
        }
    }
    //if item is not in array
    if (!itemAdded) {
        //add item and its address to array
        arrSavedImages.push({ name: itemName, address: itemUrl });
        //add object to local storage
        localStorage.setItem('arrSavedImages', JSON.stringify(arrSavedImages));
        //update saved item counter
        iCountItemsSaved++;
        //update local storage saved item count
        localStorage.setItem('savedItemCount', iCountItemsSaved);
        //notify user of action result
        alert(`You have earmarked "${itemName}".
You now have ${iCountItemsSaved} items in your “Save for later” folder.`);
    }
    else {
        alert(`You have already added this image to your “Save for later” folder!
[Items saved total: ${iCountItemsSaved}]`);
    }
}

//index webpage
//function to remove item from save for later
function removeImageFromSaveForLater(itemName) {
    //referenced https://www.w3schools.com/jsref/jsref_findindex.asp for guidance on the .findIndex() method
    //check if name property of item element is in array (callback function)
    let indexOfItemToRemove = arrSavedImages.findIndex(element => element.name === itemName);
    //if item found
    if (indexOfItemToRemove !== -1) {
        //remove item from array
        arrSavedImages.splice(indexOfItemToRemove, 1);
        //remove object from local storage
        localStorage.setItem('arrSavedImages', JSON.stringify(arrSavedImages));
        //update saved item counter
        iCountItemsSaved--;
        //update local storage saved item count
        localStorage.setItem('savedItemCount', iCountItemsSaved);
        //notify user of action result status
        alert(`"${itemName}" is no longer earmarked.
You now have ${iCountItemsSaved} items in your “Save for later” folder.`);
    }
    //error handling purposes
    else {
        console.log('This image is not in your “Save for later” folder!');
    }
}

//save for later webpage
//function to display saved images on save for later webpage
function displaySavedImages() {
    //get container for image display
    let listSavedImages = document.getElementById('listSavedImages')

    //clear existing list before adding items
    if (listSavedImages.innerHTML !== '') {
        listSavedImages.innerHTML = '';
    }

    //loop through each saved item in array
    arrSavedImages.forEach(function (element) {
        //create elements
        let listItem = document.createElement('li');
        let image = document.createElement('img');
        //get image path
        image.src = element.address;
        //format item being displayed
        listItem.style.listStyleType = 'none';
        image.style.width = '100%'
        //add image as list item
        listItem.appendChild(image);
        //add item to list
        listSavedImages.appendChild(listItem);
    });
}

//retrieve saved articles from local storage or initialise array
let arrSavedArticles = JSON.parse(localStorage.getItem('arrSavedArticles')) || [];

//index webpage
//function to save articles for later
function saveArticleForLater(articleDiv) {
    //get html div content of article
    let articleContent = document.getElementById(articleDiv).innerHTML;

    //referenced https://www.programiz.com/javascript/library/array/some for guidance on .some() method
    //check if article is already stored in array
    if (!arrSavedArticles.some(element => element === articleContent)) {
        //add article content to array
        arrSavedArticles.push(articleContent);
        //add object to local storage
        localStorage.setItem('arrSavedArticles', JSON.stringify(arrSavedArticles));
        //update saved item counter
        iCountItemsSaved++;
        //update local storage saved item count
        localStorage.setItem('savedItemCount', iCountItemsSaved);
        //notify user of action result
        alert(`Article has been successfully earmarked.
You now have ${iCountItemsSaved} items in your “Save for later” folder.`);
    }
    else {
        alert(`You have already added this article to your “Save for later” folder!
[Items saved total: ${iCountItemsSaved}]`);
    }
}

//index webpage
//function to remove article from save for later 
function removeArticleFromSaveForLater(articleDiv) {
    //find index of article to remove
    let indexOfArticleToRemove = arrSavedArticles.findIndex(element => element.includes(articleDiv));

    //if article found
    if (indexOfArticleToRemove !== -1) {
        //remove article from array
        arrSavedArticles.splice(indexOfArticleToRemove, 1)
        //update saved articles in local storage
        localStorage.setItem('arrSavedArticles', JSON.stringify(arrSavedArticles));
        //update saved item counter
        iCountItemsSaved--;
        //update local storage saved item count
        localStorage.setItem('savedItemCount', iCountItemsSaved);
        //notify user of action result status
        alert(`Article is no longer earmarked.
You now have ${iCountItemsSaved} items in your “Save for later” folder.`);
    }
    //error handling purposes
    else {
        console.log('You have already added this article to your “Save for later” folder!');
    }
}

//save for later webpage
//function to display saved articles on save for later webpage
function displaySavedArticles() {
    //get container for article display
    let containerSavedArticles = document.getElementById('containerSavedArticles')

    //clear existing content in container before adding items
    if (containerSavedArticles.innerHTML !== '') {
        containerSavedArticles.innerHTML = '';
    }

    //loop through each saved item in array
    arrSavedArticles.forEach(function (articleContent) {
        //create div element in which article content will be stored
        let articleDiv = document.createElement('div');
        //add class to articleDiv element so that it can be referred to for possible manipulation
        articleDiv.classList.add('savedArticles');
        //render article content to div
        articleDiv.innerHTML = articleContent;
        //add article content to container
        containerSavedArticles.appendChild(articleDiv);
    });
}

//jQuery functions:
//save for later webpage
$(document).ready(function () {
    //initially hide elements
    $('#earmarkedItems').hide();
    //animate display of items saved for later
    $('#earmarkedItems')
        .slideDown('slow')
        .fadeIn('slow');
});

/* referenced code guidance for saving correct bookmark/bookmarked image in local storage by mentor Troy Tempest :
set id of images in saveItemForLater class (use template literals and increment counter for id) */

//index webpage
$(document).ready(function () {
    //initialise counter for assigning ids to image sets
    let iCountID = 1;

    //go through each image set
    $('.saveItemForLater').each(function () {
        //created ids for image sets
        let imageSetID = `imageSet${iCountID}`;

        //referenced https://www.w3schools.com/jquery/html_attr.asp for guidance on the jQuery .attr() method
        //assign generated id to current image set
        $(this).attr('id', imageSetID);

        //retrieve data from local storage
        let lastClickedImage = localStorage.getItem(imageSetID);

        //check if last clicked image is the bookmarked image
        if (lastClickedImage === 'bookmarkedImage') {
            //hide bookmark image
            $(this).find('.bookmarkImage').hide();
            //display bookmarked image
            $(this).find('.bookmarkedImage').show();
        }
        //if last clicked image is the bookmark image
        else {
            //hide bookmarked image
            $(this).find('.bookmarkedImage').hide();
            //display bookmark image
            $(this).find('.bookmarkImage').show();
        }
        //increment counter for next image set
        iCountID++;
    });

    //toggle between bookmarked and bookmark images when clicked
    //function for if bookmark image clicked
    $('.bookmarkImage').click(function () {
        //get correct image from class
        let imageSet = $(this).closest('.saveItemForLater');

        //hide bookmark image
        imageSet.find('.bookmarkImage').hide();
        //display bookmarked image
        imageSet.find('.bookmarkedImage').show();

        //get image set id
        let imageSetID = imageSet.attr('id');
        //store last clicked image set id in local storage
        localStorage.setItem(imageSetID, 'bookmarkedImage');
    });

    //function for if bookmarked image clicked
    $('.bookmarkedImage').click(function () {
        //get correct image from class
        let imageSet = $(this).closest('.saveItemForLater');

        //hide bookmarked image
        imageSet.find('.bookmarkedImage').hide();
        //display bookmark image
        imageSet.find('.bookmarkImage').show();

        //get image set id
        let imageSetID = imageSet.attr('id');
        //store last clicked image set id in local storage
        localStorage.setItem(imageSetID, 'bookmarkImage');
    });

    //set default visible image for each image set to bookmark image (if neither image in set is clicked)
    //go through each item in class
    $('.saveItemForLater').each(function () {
        //get id of current element
        let imageSetID = $(this).attr('id');
        //if the image set id is not stored in local storage
        if (!localStorage.getItem(imageSetID)) {
            //hide bookmarked image
            $(this).find('.bookmarkedImage').hide();
            //display bookmark image
            $(this).find('.bookmarkImage').show();
            //save default visible image as bookmark image in local storage
            localStorage.setItem(imageSetID, 'bookmarkImage');
        }
    });
});
