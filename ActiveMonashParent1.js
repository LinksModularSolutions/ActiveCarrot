var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);


			{
				$("#LoginForm > button.NewSignup").on('click', function() {
					$("#admin_wrapper > form").fadeOut();
					$("#ProspectIframe").fadeIn();
				});
			}

			{
				$("#LoginForm > button.ExistingLogin").on('click', function() {
					$("#admin_wrapper > form").fadeIn();
					$("#ProspectIframe").fadeOut();
					$("#ProspectIframe").css("visibility", "visible");
				});
			}
