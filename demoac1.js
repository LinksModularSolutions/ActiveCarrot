var viewPortTag = document.createElement('meta');
viewPortTag.id = "viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

var pageURL = window.location.href;

console.log(pageURL);
var pageStatus = pageURL.includes("https://secure.activecarrot.com/customer/dashboard");
console.log(pageURL.includes("https://secure.activecarrot.com/customer/dashboard"));

if(pageStatus == true) {
   var link = document.createElement('link');  
  
        // set the attributes for link element
           link.rel = 'https://secure.activecarrot.com/customer/dashboard';  
      
        link.type = 'text/css'; 
      
        link.href = 'https://cdn.jsdelivr.net/gh/LinksModularSolutions/ActiveCarrot/dashboard.css';  
  
        // Get HTML head element to append
        // link element to it
        document.getElementsByTagName('HEAD')[0].appendChild(link);  
  
}

