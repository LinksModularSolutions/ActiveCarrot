var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

if (location.pathname.indexOf('customer/class/student_profiles') === 1) {
  var addStudent = document.querySelector("#add_student");
  addStudent.style.display = 'none';
}

var pageURL = window.location.href;

console.log(pageURL);
var pageStatus = pageURL.includes("https://secure.activecarrot.com/login/change_password/");
console.log(pageURL.includes("https://secure.activecarrot.com/login/change_password/"));

if(pageStatus == true) {
   var cssId = 'myCss'; 
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/LinksModularSolutions/ActiveCarrot/ActiveMonashForgotPW.css';
    link.media = 'all';
    head.appendChild(link);
}
 
}
