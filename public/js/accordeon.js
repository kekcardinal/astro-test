document.addEventListener("DOMContentLoaded", (event) => {
  const currentLang = document.documentElement.getAttribute("lang");

  // Select only the job elements that match the current language
  const jobElements = document.querySelectorAll(
    `.projet.building.emplois-demander`
  );

  // Count the number of elements
  const jobCount = jobElements.length;

  // Insert the count into the <span> elements with class "jobCount"
  document.querySelectorAll(".jobCount").forEach((span) => {
    span.textContent = jobCount;
  });

  const checkboxs = document.querySelectorAll(".state");
  let conteneur_checkboxs = document.querySelectorAll(
    ".conteneur_checkbox_projet"
  );

  let currentlyOpenContent = null;

  conteneur_checkboxs.forEach((conteneur) => {
    conteneur.addEventListener("click", function (event) {
      let checkbox_projet = conteneur.querySelector('input[type="checkbox"]');
      if (checkbox_projet.checked) {
        checkbox_projet.checked = false;
      } else {
        checkbox_projet.checked = true;
      }
      const changeEvent = new Event("change", { bubbles: true });
      checkbox_projet.dispatchEvent(changeEvent);
    });
  });

  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      let content = checkbox.closest(".projet").querySelector(".content");
      let symbole = checkbox.previousElementSibling.querySelector(".symbole");

      if (checkbox.checked) {
        // Close the currently open content, if any
        if (currentlyOpenContent && currentlyOpenContent !== content) {
          currentlyOpenContent.style.maxHeight = "0";
          currentlyOpenContent.previousElementSibling.querySelector(
            ".state"
          ).checked = false;
          currentlyOpenContent.previousElementSibling.querySelector(
            ".symbole"
          ).textContent = "+";
        }

        // Open the new content
        content.style.maxHeight = content.scrollHeight + "px";
        symbole.textContent = "−";

        // Update the currently open content
        currentlyOpenContent = content;
      } else {
        // Close the current content
        content.style.maxHeight = "0";
        symbole.textContent = "+";

        // Clear the reference to the currently open content
        if (currentlyOpenContent === content) {
          currentlyOpenContent = null;
        }
      }
    });
  });
});
