// admin-ui.js
document.addEventListener("DOMContentLoaded", function() {
    const customizationForm = document.getElementById("customization-form");
    const themeSelect = document.getElementById("theme-select");
    const layoutSelect = document.getElementById("layout-select");
    const saveButton = document.getElementById("save-button");

    // Load existing customizations
    fetch('/admin/customizations.json')
        .then(response => response.json())
        .then(data => {
            themeSelect.value = data.theme;
            layoutSelect.value = data.layout;
        })
        .catch(error => console.error('Error loading customizations:', error));

    // Save customizations
    saveButton.addEventListener("click", function() {
        const customizations = {
            theme: themeSelect.value,
            layout: layoutSelect.value
        };

        fetch('/admin/customizations.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customizations)
        })
        .then(response => {
            if (response.ok) {
                alert("Customizations saved successfully!");
            } else {
                alert("Failed to save customizations.");
            }
        })
        .catch(error => console.error('Error saving customizations:', error));
    });
});