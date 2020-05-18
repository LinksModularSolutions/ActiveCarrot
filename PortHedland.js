// adding meta tag to header
var viewPortTag = document.createElement('meta');
viewPortTag.name = "robots";
viewPortTag.content = "noindex";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

// adding google analytics script tag to header
var ga = document.createElement("script");
ga.id = "googleAnalytics";
ga.async = true;
ga.src = "https://www.googletagmanager.com/gtag/js?id=UA-144561479-4";
document.getElementsByTagName('head')[0].appendChild(ga);
