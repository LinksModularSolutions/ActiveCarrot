var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

var pageURL = window.location.href;

console.log(pageURL);
var pageStatus = pageURL.includes("public/contract/application");
console.log(pageURL.includes("public/contract/application"));

if(pageStatus == true) {

$(window).load(function(){
$("#emergency_primary_phone_select > option[value=home_phone]").removeAttr('selected');
$("#emergency_primary_phone_select > option[value=mobile_phone]").attr('selected', 'true');
$("#emergency_primary_mobile_select > option[value=mobile_phone]").removeAttr('selected');
$("#emergency_primary_mobile_select > option[value=home_phone]").attr('selected', 'true');
 });
 }


