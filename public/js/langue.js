function setLanguage(lang) {
  // Store the language preference in local storage
  localStorage.setItem("preferredLanguage", lang);

  // Update the lang attribute on the <html> tag
  document.documentElement.setAttribute("lang", lang);

  // Update the URL to include the language query parameter only if it differs
  const url = new URL(window.location.href);
  const currentLang = url.searchParams.get("lang");

  // Only update the URL if the lang parameter is different
  if (currentLang !== lang) {
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  }
}

function getLanguage() {
  return localStorage.getItem("preferredLanguage") || "en"; // Default to 'en' if no preference is found
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLanguage();

  document.documentElement.setAttribute("lang", lang);
  setLanguage(lang);
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    window.innerWidth - document.documentElement.clientWidth + "px"
  );

  const btnFr = document.querySelector(".choix_langue_fr");
  const btnEn = document.querySelector(".choix_langue_en");

  btnFr.addEventListener("click", () => {
    setLanguage("fr");
    console.log("click");

    btnEn.classList.remove("active");
    btnFr.classList.add("active");
  });

  btnEn.addEventListener("click", () => {
    setLanguage("en");
    console.log("click");

    btnFr.classList.remove("active");
    btnEn.classList.add("active");
  });

  console.log("patate");
  console.log(lang);

  // Set the active class based on the current language
  if (lang === "fr") {
    btnEn.classList.remove("active");
    btnFr.classList.add("active");
  } else {
    btnFr.classList.remove("active");
    btnEn.classList.add("active");
  }
});
