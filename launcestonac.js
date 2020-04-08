if (location.pathname.indexOf('customer/dashboard', 'customer/profile', 'customer/account', 'customer/contract/application', 'customer/class/student_profiles', 'customer/class/browse', 'customer/class/bookings') === -1) {
  var bookOnline = document.getElementById("title_nav").getElementsByClassName("page_heading")[0];
  bookOnline.innerHTML = "Pool Availability";
}

  
  var facilityBooking = document.getElementById("main_content").getElementsByClassName("three_quarters")[0].getElementsByTagName("H2")[0];
  facilityBooking.innerHTML = facilityBooking.innerHTML.replace("Facility Booking", "Pool Availbility");
