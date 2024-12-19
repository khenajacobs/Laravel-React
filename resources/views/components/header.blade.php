<header class="bg-blue-500 text-white p-4">
    <nav class="flex justify-between">
        <div class="text-lg font-bold">My App</div>

        <div>
            <select id="language-selector" onchange="setLanguage(this.value)" class="bg-white text-black p-2 rounded">
                <option value="en">English</option>
                <option value="nl_BE">Dutch (Belgium)</option>
                <option value="fr_BE">French (Belgium)</option>
            </select>
            <a href="/welcome" class="mr-4">Welcome</a>
            <a href="/react-test" class="mr-4">React Test</a>
            <a href="/random" class="mr-4">Random View</a>
        </div>
    </nav>
</header>

<script>
  function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    window.location.reload(); // Reload the page to apply the language change
  }

  // Set the dropdown to the selected language on page load
  document.addEventListener('DOMContentLoaded', (event) => {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-selector').value = selectedLanguage;
  });
</script>