/*MELBOURNE SPORT*/
var pages = [ 
    "/https://melbournesport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( "#sso_login_button" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

var pages = [ 
    "/https://melbournesport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( ".sso_button_container" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

var pages = [ 
    "/https://melbournesport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( ".sso_legal_text" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

$(document).ready(function() {
    var pageURL = window.location.href;
var loginDiv = $('.loginpagelink');


var pageStatus = pageURL.includes("public/contract/application/");

if(pageStatus === true) {
    $('.loginpagelink').show();
} else {
    $('.loginpagelink').hide();
}

});

/*BRISBANE SPORT*/
var pages = [ 
    "https://brisbanesport.acu.edu.au/public/contract/application/",
    "https://secure.activecarrot.com/public/contract/application/",
];
$( ".loginpagelink" ).toggle(
    $.inArray( location.pathname, pages ) <= 1
);
var pages = [ 
    "/https://brisbanesport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( "#sso_login_button" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

var pages = [ 
    "/https://brisbanesport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( ".sso_button_container" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

var pages = [ 
    "/https://brisbanesport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( ".sso_legal_text" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);


/*SYDNEY SPORT*/
var pages = [ 
    "/https://strathfieldsport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( "#sso_login_button" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

var pages = [ 
    "/https://strathfieldsport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( ".sso_button_container" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

var pages = [ 
    "/https://northsydneysport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( ".sso_legal_text" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);


/*STRATHFIELD*/

var pages = [ 
    "/https://strathfieldsport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( "#sso_login_button" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

var pages = [ 
    "/https://northsydneysport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( ".sso_button_container" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

var pages = [ 
    "/https://strathfieldsport.acu.edu.au/public/session/",
    "https://secure.activecarrot.com/public/session/"
];

$( ".sso_legal_text" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);
