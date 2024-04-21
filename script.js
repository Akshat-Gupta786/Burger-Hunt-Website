document.addEventListener("DOMContentLoaded", function () {
  const home = document.getElementById("home");
  const aboutUs = document.getElementById("about-us");
  const findBurger = document.getElementById("find-burger");
  const blog = document.getElementById("blog");
  const contactUs = document.getElementById("contact-us");

  home.addEventListener("click", function (a) {
    a.preventDefault();
    scroll("home");
  });
  aboutUs.addEventListener("click", function (a) {
    a.preventDefault();
    scroll("aboutUs");
  });
  findBurger.addEventListener("click", function (a) {
    a.preventDefault();
    scroll("findBurger");
  });
  blog.addEventListener("click", function (a) {
    a.preventDefault();
    scroll("Blog");
  });

  
  contactUs.addEventListener("click", function (a) {
    a.preventDefault();
    scroll("contact");
    
    const contactForm = document.getElementById("contact-form");

  });

  function scroll(a) {
    const scrollTo = document.getElementById(a);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }

  contactForm.addEventListener("submit", handleSubmit);
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function handleSubmit(event) {
  event.preventDefault();
  window.alert("Your message has been sent.");
  event.target.reset();
}

document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", handleSubmit);
});

function handleSubmit(a){
  a.preventDefault();
  confirm("Click ok to book your slot Thank You.");
  alert("Your slot hass been booked");
  a.target.reset();
};