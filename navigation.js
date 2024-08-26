document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
      <nav>
        <ul>
          <li><a href="/pages/coffee.html">Coffee</a></li>
          <li><a href="/pages/cups.html">Cubs</a></li>
          <li><a href="/pages/accessories.html">Accessories</a></li>
        </ul>
      </nav>
    `;

  document.querySelector(".dynamic-nav").innerHTML = navHTML;
});