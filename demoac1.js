var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);


var pages = [ 
    "https://secure.activecarrot.com/customer/dashboard"
];

$('head').append('<link rel="dashboardstylesheet" href="https://cdn.jsdelivr.net/gh/LinksModularSolutions/ActiveCarrot/dashboard.css" type="text/css" />');

