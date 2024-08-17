document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Create a GSAP animation that moves the .hero section down as you scroll
  gsap.to(".hero>img", {
    y: 400, // Adjust this value to control how far the hero section moves
    scrollTrigger: {
      trigger: ".hero", // The element that triggers the animation
      start: "top top", // Start the animation when the top of the .hero section hits the top of the viewport
      end: "bottom top", // End the animation when the bottom of the .hero section hits the top of the viewport
      scrub: true, // Makes the animation tied to the scroll position
    },
  });
  // Select all buttons with the class "btn-emplois"
  const buttons = document.querySelectorAll(".btn-emplois");

  buttons.forEach((button) => {
    // Select the SVG inside the current button
    const rotateArrows = button.querySelectorAll(".rotate-arrow");

    button.addEventListener("mouseenter", () => {
      rotateArrows.forEach((arrow) => {
        gsap.to(arrow, {
          duration: 0.5, // Duration of the rotation animation
          rotation: 360, // Rotate the SVG 360 degrees
          ease: "power1.inOut", // Easing function for smooth animation
        });
      });
    });

    button.addEventListener("mouseleave", () => {
      rotateArrows.forEach((arrow) => {
        gsap.to(arrow, {
          duration: 0.5, // Duration to return to original state
          rotation: 0, // Reset rotation to 0 degrees
          ease: "power1.inOut", // Easing function for smooth animation
        });
      });
    });
  });

  // Select all buttons with the class "btn-hero"
  const heroButtons = document.querySelectorAll(".btn-hero");

  heroButtons.forEach((button) => {
    // Select the SVG inside the current button
    const rotateArrows = button.querySelectorAll(".rotate-arrow");

    button.addEventListener("mouseenter", () => {
      rotateArrows.forEach((arrow) => {
        gsap.to(arrow, {
          duration: 0.5, // Duration of the rotation animation
          rotation: 360, // Rotate the SVG 360 degrees
          ease: "power1.inOut", // Easing function for smooth animation
        });
      });
    });

    button.addEventListener("mouseleave", () => {
      rotateArrows.forEach((arrow) => {
        gsap.to(arrow, {
          duration: 0.5, // Duration to return to original state
          rotation: 0, // Reset rotation to 0 degrees
          ease: "power1.inOut", // Easing function for smooth animation
        });
      });
    });
  });
});
