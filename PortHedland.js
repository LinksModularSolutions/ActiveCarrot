// adding meta tag to header
var viewPortTag = document.createElement('meta');
viewPortTag.name = "robots";
viewPortTag.content = "noindex";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

// adding google analytics script tag to header
var googleAnalyticsTag = document.createElement('script');
googleAnalyticsTag.id = "ganalytics";
googleAnalyticsTag.src = "https://www.googletagmanager.com/gtag/js?id=UA-144561479-4";
document.getElementsById('ganalytics')[0].appendChild(googleAnalyticsTag);
