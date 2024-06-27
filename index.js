document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
      <nav>
        <ul>
          <li><a href="coffee.html">Coffee</a></li>
          <li><a href="cubs.html">Cubs</a></li>
          <li><a href="accessories.html">Accessories</a></li>
        </ul>
      </nav>
    `;

  document.querySelector(".dynamic-nav").innerHTML = navHTML;
});
