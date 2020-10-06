(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWGWH6Q');

//Hide the button when the cart item is 0 
var getCurrentUrl = window.location.href
if(getCurrentUrl == "https://secure.activecarrot.com/customer/class/bookings"){
   statusOfTheCart = $('#cart_total').text()
   if(statusOfTheCart == "No items in Cart"){
       $('#add_student').hide();
   }
}
