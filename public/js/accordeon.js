document.addEventListener("DOMContentLoaded", (event) => {
  const jobElements = document.querySelectorAll(
    ".projet.building.emplois-demander"
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

  conteneur_checkboxs.forEach((conteneur) => {
    conteneur.addEventListener("click", function (event) {
      let checkbox_projet = conteneur.querySelector('input[type="checkbox"]');
      if (checkbox_projet.checked == true) {
        checkbox_projet.checked = false;
      } else {
        checkbox_projet.checked = true;
      }
      const changeEvent = new Event("change", { bubbles: true });
      checkbox_projet.dispatchEvent(changeEvent);
    });
  });
  checkboxs.forEach((checkbox) => {
    // console.log(checkbox);
    checkbox.addEventListener("change", function () {
      let content = checkbox.closest(".projet").querySelector(".content");
      let symbole = checkbox.previousElementSibling.querySelector(".symbole");
      if (checkbox.checked) {
        content.style.maxHeight = content.scrollHeight + "px";
        symbole.textContent = "−";
      } else {
        content.style.maxHeight = "0";
        symbole.textContent = "+";
      }
    });
  });
});
