const navLinks = document.querySelectorAll("li a");

const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  if (link.getAttribute("href") === `.${currentPath}`) {
    link.parentElement.classList.add("active");
  }
});

function readmore() {
  var featuresContainer = document.querySelector(".characteristics");

  if (featuresContainer) {
    featuresContainer.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    console.log("Scrolled to .features-container");
  } else {
    console.log("Element .features-container not found");
  }
}

document.getElementById("readmorebtn").addEventListener("click", readmore);
