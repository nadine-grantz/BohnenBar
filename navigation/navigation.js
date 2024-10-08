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
          <li><a href="/pages/products/coffee/index.html">Coffee</a></li>
          <li><a href="/pages/products/cups/index.html">Cups</a></li>
          <li><a href="/pages/moccamaster/moccamaster.html">Moccamaster</a></li>
           <li>
            <a>Other >></a>
            <ul class="nav-links" id="navLinks">
              <li><a href="/pages/other/plantage/index.html">Plantage</a></li>
              <li><a href="/pages/other/rainforest/index.html">Rainforest</a></li>
             <li><a href="/pages/other/workshop/index.html">Workshops</a></li>
            </ul>
          </li>
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


