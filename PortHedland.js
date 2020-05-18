// adding meta tag to header
var metaTag = document.createElement('meta');
metaTag.name = "robots";
metaTag.content = "noindex";
document.getElementsByTagName('head')[0].appendChild(metaTag);
