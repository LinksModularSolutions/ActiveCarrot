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


/*Change input type at non responsive public memberships*/
$(".contract_radio").prop('type', 'button');
$(".contract_radio").val('Sign Up');
