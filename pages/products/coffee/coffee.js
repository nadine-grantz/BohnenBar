
function renderCoffee() {
    const container = document.querySelector('#coffee'); 
  
    const coffeesHTML = coffees.map(coffee => {
      return `
       <div class="product">
          <a href="${coffee.link}">
            <img class= hover-effect src="${coffee.image}" alt="${coffee.name}" />
          </a>
          <p class="product-name">${coffee.name}</p>
          <p class="product-price">EUR ${coffee.price}</p>
        </div>
      `;
    }).join('');
  

    container.innerHTML += `<div class="products">${coffeesHTML}</div>`;
  }
  
  window.addEventListener('DOMContentLoaded', renderCoffee);
  
  
  const coffees = [
    {
      name: "Filter Coffee | 250 g",
      image: "/public/blackCoffee.jpg",
      price: 10.99,
      link: "./blackCoffee.html",
    },
    {
      name: "Espresso | 250 g",
      image: "/public/espresso.jpg",
      price: 13.99,
      link: "./espresso.html",
    },
    {
      name: "Monte Verde | 250 g",
      image: "/public/monteverde.jpg",
      price: 13.99,
      link: "./monteVerde.html",
    },
    {
      name: "Aurora Blend | 250 g",
      image: "/public/auroraBlend.jpg",
      price: 13.99,
      link: "./auroraBlend.html",
    },
  ];
  


  