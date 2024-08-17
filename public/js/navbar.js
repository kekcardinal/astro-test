addEventListener("load", (event) => {
    const liens = document.querySelectorAll(".nav-item");
    const openNavButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const sections = document.querySelectorAll(".contenu");
    const html = document.querySelector("html");
    const dark_mode = document.querySelector(".dark_mode>div>input");
    let estActif = false;
    let nav_ul = document.querySelector(".navbar ul");
  
    nav_ul.style.transition = "transform 0.3s ease-in-out 0.1s";

    
    
    openNavButton.addEventListener("click", function () {
     
      nav.classList.toggle("mobile-nav");
      openNavButton.classList.toggle("is-active");
      html.classList.toggle("overflow_y_hidden");
    });
  });