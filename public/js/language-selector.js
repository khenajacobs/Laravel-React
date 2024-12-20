function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    window.location.reload(); // Reload the page to apply the language change
}


document.addEventListener('DOMContentLoaded', function (event) {
    var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    var languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = selectedLanguage;
    }
});
