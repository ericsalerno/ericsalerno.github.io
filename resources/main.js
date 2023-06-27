/**
 * Hello!
 */
$(document).ready(function() {
    if (typeof console != 'undefined') {
        console.log('Hello friend!');
    }

    var options = {
        title:"Cookies & Privacy",
        message:"This website uses cookies to ensure you get the best experience on our website.",
        link:"https://www.salernolabs.com/privacy",
        delay: 250,
    };
    $('body').ihavecookies(options);
    $('#update-preferences').click(function(){
        $('body').ihavecookies(options, 'reinit');
    });
});
