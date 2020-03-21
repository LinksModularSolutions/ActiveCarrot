var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);


  function myFunction() {
  var x = document.getElementById("floatright");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.width = "50%";
  }
}

