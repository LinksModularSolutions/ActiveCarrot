var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

var bookOnline = document.getElementById("title_nav").getElementsByClassName("page_heading")[0];
bookOnline.innerHTML = "Pool Availability";

var facilityBooking = document.getElementById("main_content").getElementsByClassName("three_quarters")[0].getElementsByTagName("H2")[0];
facilityBooking.innerHTML = facilityBooking.innerHTML.replace("Facility Booking", "Pool Availbility");

