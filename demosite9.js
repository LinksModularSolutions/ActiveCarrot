var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

var pageURL = window.location.href;

console.log(pageURL);
var pageStatus = pageURL.includes("https://secure.activecarrot.com/customer/dashboard");
console.log(pageURL.includes("https://secure.activecarrot.com/customer/dashboard"));

if(pageStatus == true) {
   var cssId = 'myCss'; 
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/LinksModularSolutions/ActiveCarrot/dashboard.css';
    link.media = 'all';
    head.appendChild(link);
}
 
}

{$("#LoginForm > button.NewSignup").on('click', function() {
   $("#admin_wrapper > form").fadeOut();
   $("#ProspectIframe").fadeIn();
});}

{$("#LoginForm > button.ExistingLogin").on('click', function() {
   $("#admin_wrapper > form").fadeIn();
   $("#ProspectIframe").fadeOut();
   $("#ProspectIframe").css("visibility", "visible");
});}
