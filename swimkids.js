/*HIDE 'BOOK MYSELF' OPTION*/
var pages = [ 
    "https://secure.activecarrot.com/customer/class/browse/"
];

$( "#rp > label, #rp_container" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

	
/*HIDE CHECK BOX FROM ADD TO CART SCREEN*/
  var pages = [ 
    "https://secure.activecarrot.com/customer/class/add_to_cart_new_student/"
];

$( "#classes_grid_view > table > tbody > tr > td:nth-child(5) > strong" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

  var pages = [ 
    "https://secure.activecarrot.com/customer/class/add_to_cart_new_student/"
];

$( "#classes_grid_view > table:nth-child(1) > tbody > tr > td:nth-child(5) > input" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

	

	/*HIDE TEXT ON "ADD TO CART" SCREEN*/
  var pages = [ 
    "https://secure.activecarrot.com/customer/class/add_to_cart_new_student/"
];

$( "#classes_grid_view > table:nth-child(1) > thead > tr > th" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

  var pages = [ 
    "https://secure.activecarrot.com/customer/class/add_to_cart_new_student/"
];

$( "#visit_passes_for_sale > h2" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);

	
/*HIDE RED DELETE BUTTON FROM CHECKOUT*/
  var pages = [ 
    "https://secure.activecarrot.com/customer/class/checkout"
];

$( "#classes_grid_view > table:nth-child(3) > tbody > tr > td:nth-child(9) > a > img" ).toggle(
    $.inArray( location.pathname, pages ) >= 0
);


(document.getElementById("checkout").innerHTML.text = "Proceed to checkout");

