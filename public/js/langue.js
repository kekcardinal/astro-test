function setLanguage(lang) {
  // Store the language preference in local storage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update the lang attribute on the <html> tag
  document.documentElement.setAttribute('lang', lang);
}

// Function to get the preferred language from local storage
function getLanguage() {
  return localStorage.getItem('preferredLanguage') || 'en'; // Default to 'en' if no preference is found
}

document.addEventListener("DOMContentLoaded", (event) => {
  var lang = getLanguage();
  document.documentElement.setAttribute('lang', lang);

  document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");

  let btn_fr = document.querySelector(".choix_langue_fr");
  let btn_en = document.querySelector(".choix_langue_en");

  btn_fr.addEventListener('click', function () {
      setLanguage('fr');
      btn_en.classList.remove("active");
      btn_fr.classList.add("active");
  });
  btn_en.addEventListener('click', function () {
      setLanguage('en');
      btn_fr.classList.remove("active");
      btn_en.classList.add("active");
  });

  // Set the active class based on the current language
  if (lang === 'fr') {
      btn_en.classList.remove("active");
      btn_fr.classList.add("active");
  } else {
      btn_fr.classList.remove("active");
      btn_en.classList.add("active");
  }
});