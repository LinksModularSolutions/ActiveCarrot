var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

var pageURL = window.location.href;

console.log(pageURL);
var pageStatus = pageURL.includes("https://secure.activecarrot.com/customer/account/outstanding_payment");
console.log(pageURL.includes("https://secure.activecarrot.com/customer/account/outstanding_payment"));

if(pageStatus == true) {
 var elements = document.querySelectorAll("[id^='class_registration_amount']");
 for(var e in elements){
 elements[e].readOnly = true;

 }
 
}
