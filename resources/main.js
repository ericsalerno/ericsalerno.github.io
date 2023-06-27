/**
 * Hello!
 */
function debug(message) {
    if (typeof console != 'undefined') {
        console.log(message);
    }
}
function initializeGa4(disableAnalyticsCookies = false) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    if (disableAnalyticsCookies) {
        debug('gtag minus cookies');
        gtag("consent", "default", {
            ad_storage: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "denied"
        });
    }

    gtag('config', 'G-L4Q3RWN7DP');
}

$(document).ready(function() {
    debug('Hello friend');

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

    var cookieControl = JSON.parse(Cookies.get('cookieControlPrefs') || "['analytics']");
    var disallowAnalyticsCookies = cookieControl.includes('analytics') === false;

    initializeGa4(disallowAnalyticsCookies);
});
