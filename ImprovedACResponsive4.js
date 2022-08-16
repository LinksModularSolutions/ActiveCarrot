var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

/*HIDE PROFILE AT DASHBOARD*/
if (location.pathname.indexOf('customer/dashboard') === 1) {
  $("#my_profile_left_content").hide()
};

/*DECLARE AT DASHBOARD*/
$("p:contains('Logged in as:')").addClass("loggedInDetails");
$("div:contains('Last Attendance')").addClass("dashboardContent");
$("h2:contains('My Account')").addClass("page_heading");
$("h2:contains('Online Store')").addClass("page_heading");
$("h2:contains('Visit passes available for purchase')").addClass("page_heading");
$("h2:contains('Student Profiles')").addClass("page_heading");
$("h2:contains('Browse Classes')").addClass("page_heading");
$("h2:contains('Class Pre-registration')").addClass("page_heading");
$("h2:contains('Class Progress')").addClass("page_heading");
$("h2:contains('My Bookings')").addClass("page_heading");
$("h2:contains('Casual Entries')").addClass("page_heading");
$("#main_content > div.three_quarters > h2").addClass("page_heading");
$("h2:contains('My Purchase History')").html("My Purchase History");
$("h2:contains('My Purchase History')").addClass("page_heading");



/*Change input type at non responsive public memberships*/
$(".contract_radio").prop('type', 'button');
$(".contract_radio").val('Sign Up');
