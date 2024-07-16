document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.pathname.split("/").pop();

  const menuItems = document.querySelectorAll("ul li a");

  menuItems.forEach(function (item) {
    if (item.getAttribute("href") === currentUrl) {
      item.parentElement.classList.add("active");
    }
  });
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

