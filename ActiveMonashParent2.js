var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);


			{
				$("#LoginForm > button.NewSignup").on('click', function() {
					$("#admin_wrapper > form").fadeOut();
					$("#ProspectIframe").fadeIn();
				});
			}

			{
				$("#LoginForm > button.ExistingLogin").on('click', function() {
					$("#admin_wrapper > form").fadeIn();
					$("#ProspectIframe").fadeOut();
					$("#ProspectIframe").css("visibility", "visible");
				});
			}
      
      
 var pageURL = window.location.href;

console.log(pageURL);
var pageStatus = pageURL.includes("hhttps://secure.activecarrot.com/login/first_login_alternate/584");
console.log(pageURL.includes("https://secure.activecarrot.com/login/first_login_alternate/584"));

if(pageStatus === true) {
   var cssId = 'myCss'; 
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/LinksModularSolutions/ActiveCarrot/ActivMonash584.css';
    link.media = 'all';
    head.appendChild(link);
}
}
