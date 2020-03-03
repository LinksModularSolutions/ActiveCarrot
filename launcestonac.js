var pages = [ 
    "https://secure.activecarrot.com/customer/booking/facility_read_only/1529",
  "https://secure.activecarrot.com/customer/booking/facility_read_only/",
];

  var bookOnline = document.getElementById("title_nav").getElementsByClassName("page_heading")[0];
bookOnline.innerHTML = "Pool Availability";

var facilityBooking = document.getElementById("main_content").getElementsByClassName("three_quarters")[0].getElementsByTagName("H2")[0];
facilityBooking.innerHTML = facilityBooking.innerHTML.replace("Facility Booking", "Pool Availbility");

