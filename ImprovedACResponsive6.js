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

/*Fixed Headings*/
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
$("h2:contains('My direct debit details')").addClass("page_heading");
$("h2:contains('Pay my account')").addClass("page_heading");



/*Change input type at non responsive public memberships*/
$(".contract_radio").prop('type', 'button');
$(".contract_radio").val('Sign Up');



/*Read-Only Facilities on XML Calls */
$('body').append('<div class="facilityGrouping"></div>');
$('.facilityGrouping').load('https://qat.activecarrot.net/public/facility/browse_raw/1205/1049.xml, group_desc');

$('body').append('<div class="facilityDescription"></div>');
$('.facilityDescription').load('https://qat.activecarrot.net/public/facility/browse_raw/1205/1049.xml, description');
