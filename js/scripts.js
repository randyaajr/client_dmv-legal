window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }
});

// Init AOS
AOS.init({
  // AOS would work only for windows bigger than or equal to 768px
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
});

//Get the button
var mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 64px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
