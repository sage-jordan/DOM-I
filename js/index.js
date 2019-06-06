const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//My Code:
let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])


let navigation = document.querySelectorAll("nav a");
navigation.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`]
})

let divCtaText = document.getElementsByClassName('cta-text')[0];
divCtaText.getElementsByTagName('h1')[0].innerHTML = siteContent['cta']['h1']
divCtaText.getElementsByTagName('button')[0].innerHTML = siteContent['cta']['button']

let topContent = document.getElementsByClassName('top-content')[0];

let textContentOne = topContent.getElementsByClassName('text-content')[0];
textContentOne.getElementsByTagName('h4')[0].innerHTML =  siteContent['main-content']['features-h4']
textContentOne.getElementsByTagName('p')[0].innerHTML =  siteContent['main-content']['features-content']

let textContentTwo = topContent.getElementsByClassName('text-content')[1];
textContentTwo.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['about-h4']
textContentTwo.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['about-content']

let middleimg = document.getElementById('middle-img');
middleimg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//bottom content
let bottomContent = document.getElementsByClassName('bottom-content')[0];
let servicesHeader = bottomContent.getElementsByClassName('text-content')[0];
servicesHeader.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4']

let servicesText = bottomContent.getElementsByClassName('text-content')[0];
servicesText.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['services-content']

let productHeader = bottomContent.getElementsByClassName('text-content')[1];
productHeader.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4']

let productText = bottomContent.getElementsByClassName('text-content')[1];
productText.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['product-content']

let visionHeader = bottomContent.getElementsByClassName('text-content')[2];
visionHeader.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4']

let visionText = bottomContent.getElementsByClassName('text-content')[2];
visionHeader.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['vision-content'] 

let contact = document.getElementsByClassName('contact')[0];
contact.getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['h4']
contact.getElementsByTagName('p')[0].innerHTML = siteContent['contact']['address']
contact.getElementsByTagName('p')[1].innerHTML = siteContent['contact']['phone']
contact.getElementsByTagName('p')[2].innerHTML = siteContent['contact']['email']

let footerText = document.getElementsByTagName('footer')[0];
footerText.getElementsByTagName('p')[0].innerHTML = siteContent['footer']['copyright']