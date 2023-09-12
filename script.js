// Function to set the active link based on the current page
function setActiveLink() {
  var currentLocation = window.location.href;
  var navbarItems = document.getElementsByClassName("navbar")[0].getElementsByTagName("a");

  for (var i = 0; i < navbarItems.length; i++) {
    if (navbarItems[i].href === currentLocation) {
      navbarItems[i].classList.add("active");
    } else {
      navbarItems[i].classList.remove("active");
    }
  }
}

// Call the setActiveLink function when the page loads
document.addEventListener("DOMContentLoaded", function() {
  setActiveLink();
});

// Add hover effect to the cards
var cards = document.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s";
  });
  
  cards[i].addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
  });
}
