var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

$(document).ready(function(){
        $('a[href^="/customer/account/outstanding_payment"]').each(function(){ 
            var oldUrl = $(this).attr("href"); // Get current url
            var newUrl = oldUrl.replace("/customer/account/outstanding_payment", "https://paynow.debitsuccess.com/"); // Create new url
            $(this).attr("href", newUrl); // Set herf value
        });
    });


var pageURL = window.location.href;

console.log(pageURL);
var pageStatus = pageURL.includes("/customer/account/outstanding_payment");
console.log(pageURL.includes("/customer/account/outstanding_payment"));

if(pageStatus == true) {
    window.location.replace("https://paynow.debitsuccess.com/"); 

}

