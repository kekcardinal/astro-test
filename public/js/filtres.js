document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.btn-filtre-projets');
    const buildings = document.querySelectorAll('.building');
    let activeFilters = new Set();

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            if (activeFilters.has(filter)) {
                activeFilters.delete(filter);
                this.classList.remove('active');
            } else {
                activeFilters.add(filter);
                this.classList.add('active');
            }

            updateBuildings();
        });
    });

    function updateBuildings() {
        if (activeFilters.size === 0) {
            buildings.forEach(building => building.style.display = 'block');
        } else {
            buildings.forEach(building => {
                const category = building.getAttribute('data-category');
                if (activeFilters.has(category)) {
                    building.style.display = 'block';
                } else {
                    building.style.display = 'none';
                }
            });
        }
    }
});
