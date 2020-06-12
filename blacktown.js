if (location.pathname.indexOf('customer/dashboard') === -1) {
  var facilityBooking = document.getElementById("main_content").getElementsByClassName("three_quarters")[0].getElementsByTagName("H2")[0];
  facilityBooking.innerHTML = facilityBooking.innerHTML.replace("Group Fitness", "Session");
  
  var sessionBooking = document.getElementById("main_content").getElementsByClassName("three_quarters")[0].getElementsByTagName("H2")[0];
  sessionBooking.innerHTML = sessionBooking.innerHTML.replace("Facility Booking", "Session Bookings");
}

