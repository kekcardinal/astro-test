document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.btn-filtre-projets');
    const buildings = document.querySelectorAll('.building');

    const btnFr = document.querySelector(".choix_langue_fr");
    const btnEn = document.querySelector(".choix_langue_en");

    // btnFr.addEventListener('click', function () {
    //     document.documentElement.setAttribute('lang', 'fr'); // Set language to French
    //     updateBuildings();
    // });

    // btnEn.addEventListener('click', function () {
    //     document.documentElement.setAttribute('lang', 'en'); // Set language to English
    //     updateBuildings();
    // });

    let activeFilters = new Set();

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            const isActive = this.classList.contains('active');

            // Clear activeFilters and remove 'active' class from all buttons if the clicked button is not already active
            activeFilters.clear();
            filterButtons.forEach(btn => btn.classList.remove('active'));

            if (!isActive) {
                // If the button was not active, activate it
                activeFilters.add(filter);
                const matchingButtons = document.querySelectorAll(`.btn-filtre-projets[data-filter="${filter}"]`);
                matchingButtons.forEach(btn => btn.classList.add('active'));
            }

            updateBuildings();
        });
    });

    // Function to update buildings based on current language and active filters
    function updateBuildings() {
        const currentLang = document.documentElement.getAttribute('lang'); // Get the current language
        console.log("Current Language:", currentLang);
    
        buildings.forEach(building => {
            const category = building.getAttribute('data-category');
            const buildingLang = building.getAttribute('lang'); // Get the language of the building element
            console.log("Building Category:", category, "Building Language:", buildingLang);
    
            // Check if the building's language matches the current language
            const langMatches = !buildingLang || buildingLang === currentLang;
            console.log("Language Matches:", langMatches);
    
            if (langMatches && (activeFilters.size === 0 || activeFilters.has(category))) {
                building.style.display = 'block';
                console.log("Displaying:", building);
            } else {
                building.style.display = 'none';
                console.log("Hiding:", building);
            }
        });
    }
    
    // Add an observer to watch for changes to the lang attribute on the <html> element
    const observer = new MutationObserver(() => {
        updateBuildings(); // Update buildings when the language changes
    });

    // Start observing the <html> element for attribute changes
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    // Call updateBuildings initially to apply the correct display settings
    updateBuildings();
});
