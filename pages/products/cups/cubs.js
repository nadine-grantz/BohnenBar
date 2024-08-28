
function renderCups() {
    const container = document.querySelector('#cups'); 
  
    const cupsHTML = cups.map(cup => {
      return `
        <div class="product">
          <img src="${cup.image}" alt="${cup.name}" />
          <p class="product-name">${cup.name}</p>
          <p class="product-price">EUR ${cup.price}</p>
        </div>
      `;
    }).join('');
  

    container.innerHTML += `<div class="products">${cupsHTML}</div>`;
  }
  
  window.addEventListener('DOMContentLoaded', renderCups);
  
  
  const cups = [
    {
      name: "Thermos cup | 350 ml",
      image: "/public/thermoCup.jpg",
      price: 19.99,
      link: "/pages/products/thermoCup.html",
    },
    {
      name: "Coffee cup | 300 ml",
      image: "/public/coffeeCup.jpg",
      price: 14.99,
      link: "/pages/products/caffeetasse.html",
    },
    {
      name: "Espresso cup | 100 ml",
      image: "/public/espressoCup.jpg",
      price: 9.99,
      link: "/pages/products/espressoTasse.html",
    },
    {
      name: "Handmade Cup | 400 ml",
      image: "/public/selfmadeCoffeeCup.jpg",
      price: 24.99,
      link: "/pages/products/selfmadecoffeecup.html",
    },
    {
      name: "Chemex | 400 ml",
      image: "/public/chemex.jpg",
      price: 45.99,
      link: "/pages/products/chemex.html",
    },
    {
      name: "Espresso Maker | 400 ml",
      image: "/public/coffeeBrewMaschine.jpg",
      price: 39.99,
      link: "/pages/products/coffeeBrewMaschine.html",
    },
  ];
  


  