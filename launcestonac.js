if (location.pathname.indexOf('customer/dashboard') === -1) {
  var facilityBooking = document.getElementById("main_content").getElementsByClassName("three_quarters")[0].getElementsByTagName("H2")[0];
  facilityBooking.innerHTML = facilityBooking.innerHTML.replace("Pool Availbility", "Book Online");
}
