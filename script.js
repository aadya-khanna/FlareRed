
window.onscroll = function() {
  var content = document.getElementById("content");
  var navbar = document.getElementById("navbar");

  // Adjusted condition to show navbar when the header begins
  if (window.scrollY >= content.offsetTop) {
      navbar.classList.add("visible");
      navbar.classList.remove("hidden");
  } else {
      navbar.classList.remove("visible");
      navbar.classList.add("hidden");
  }
};




// GSAP Timeline for zoom scrolling on the Lottie animation
// GSAP Timeline for zoom scrolling on the Lottie animation
// Set initial scale for the Lottie animation
gsap.set("#anim lottie-player", { scale: 1 }); // Ensure it starts at scale 1

// GSAP Timeline for zoom scrolling on the Lottie animation
const zoomScroll = gsap.timeline({
    scrollTrigger: {
        trigger: "#anim",
        start: "top top",
        end: "top+=300vh", // Control how far down the animation section ends
        scrub: true,
        markers: false,
        pin: true, // Keeps the animation section pinned while zooming
    }
});

// Zoom in effect for the Lottie animation
zoomScroll.to("#anim lottie-player", {
    scale: 2, // Adjust scale factor for zooming in the animation
    duration: 1,
});

// Ensure that the header appears once the animation completes
zoomScroll.to("#header", {
    scale: 1, // Ensure header starts at normal scale
    opacity: 1, // Set to fully visible
    duration: 0.5,
}, "-=0.5"); // Start zoom-in effect for header before animation completes

// Optional: Set initial opacity and scale for header
gsap.set("#header", { scale: 0.5, opacity: 0 });


// When the logged in status changes, display one of the divs
authClient.addLoggedInChangeObserver((isLoggedIn) => {
    if (isLoggedIn) {
        document.getElementById("display-when-logged-in").style.display = "revert";
        document.getElementById("display-when-logged-out").style.display = "none";

        // Get authentication info and set email to it
        authClient.getAuthenticationInfoOrNull()
            .then(authInfo => {
                document.getElementById("email").innerText = authInfo?.user?.email;
            });
    } else {
        document.getElementById("display-when-logged-in").style.display = "none";
        document.getElementById("display-when-logged-out").style.display = "revert";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const flareRed = document.getElementById("flareRed");
    const header = document.getElementById("header");
    const buildingLightImage = document.querySelector("#building-light img");

    flareRed.addEventListener("mouseenter", () => {
        header.style.backgroundColor = "black"; // Change header background color to black
        buildingLightImage.src = "flareblack.png"; // Change to new PNG
        console.log("mouse hovers");
    });

    flareRed.addEventListener("mouseleave", () => {
        header.style.backgroundColor = "white"; // Reset header background color to white
        buildingLightImage.src = "FlareRed.png"; // Reset to original PNG
        console.log("mouse leaves");
    });
});