if (location.pathname.indexOf('customer/dashboard') === -1) {
  var bookOnline = document.getElementById("title_nav").getElementsByClassName("page_heading")[0];
  bookOnline.innerHTML = "Pool";
}

  
  var facilityBooking = document.getElementById("main_content").getElementsByClassName("three_quarters")[0].getElementsByTagName("H2")[0];
  facilityBooking.innerHTML = facilityBooking.innerHTML.replace("Facility Booking", "Pool Availbility");
