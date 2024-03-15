//this file contains javascript functionality provided to the Seen & Heard (Task 20) html webpages

//all webpages
$(document).ready(function () {
    //create a drop-down menu (accordion animation style when menuBtn is hovered over)
    $('.dropdown-menu').children('.dropdown-options').stop(true, true).hide;
    //referenced https://stackoverflow.com/questions/8775860/jquery-drop-down-hover-menu for guidance on a jQuery dropdown hover menu
    $('.dropdown-menu').hover(
        function () {
            //show dropdown menu options upon hover
            $(this).children('.dropdown-options').stop(true, true).slideDown('fast');
        },
        function () {
            //close dropdown menu options when dropdown menu is not hovered over
            $(this).children('.dropdown-options').stop(true, true).slideUp('fast');
        });

    //animate header logo
    $('#logoAnimate').click(function () {
        //create jumping effect upon click
        $(this)
            .animate({ marginTop: '-=20px' }, 400)
            .animate({ marginTop: '+=20px' }, 400)
            .animate({ marginTop: '-=10px' }, 300)
            .animate({ marginTop: '+=10px' }, 300)
            .animate({ marginTop: '-=5px' }, 200)
            .animate({ marginTop: '+=5px' }, 200);
    });
});
