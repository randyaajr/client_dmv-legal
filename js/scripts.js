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
