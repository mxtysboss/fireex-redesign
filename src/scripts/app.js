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

function offer(a) {
  console.log(a);
  switch (a) {
    case "owner": {
      document.getElementById("offer-details").innerHTML =
        "<h1>Inwestor/Właściciel</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";

      document.getElementById("offer-details").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;
    }
    case "design-office": {
      document.getElementById("offer-details").innerHTML =
        "<h1>Biuro projektowe</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";

      document.getElementById("offer-details").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;
    }
    case "performer": {
      document.getElementById("offer-details").innerHTML =
        "<h1>Wykonawca</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";

      document.getElementById("offer-details").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;
    }
    case "insurance-company": {
      document.getElementById("offer-details").innerHTML =
        "<h1>Firma ubezpieczeniowa</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";

      document.getElementById("offer-details").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;
    }
    case "house": {
      document.getElementById("offer-details").innerHTML =
        "<h1>Dom/Mieszkanie</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";

      document.getElementById("offer-details").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;
    }
  }
}
