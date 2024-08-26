document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
      <div class="navbar">
      <header>
      <h1><a href="/index.html">BohnenBar</a></h1>
      </header>
        <div class="toggle-button" id="toggleButton">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul class="nav-links" id="navLinks">
          <li><a href="/pages/coffee.html">Coffee</a></li>
          <li><a href="/pages/cups.html">Cups</a></li>
          <li><a href="/pages/accessories.html">Accessories</a></li>
        </ul>
      </div>
    `;

    document.getElementById('dynamic-nav').innerHTML = navHTML;

    const toggleButton = document.getElementById('toggleButton');
    const navLinks = document.getElementById('navLinks');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


