var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);


if (location.pathname.indexOf('public/contract/application') === 1) {
  $("#emergency_primary_phone_select > option[value=home_phone]").removeAttr('selected');
$("#emergency_primary_phone_select > option[value=mobile_phone]").attr('selected', 'true');
$("#emergency_primary_mobile_select > option[value=mobile_phone]").removeAttr('selected');
$("#emergency_primary_mobile_select > option[value=home_phone]").attr('selected', 'true');
}

