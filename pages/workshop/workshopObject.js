const cafeWorkshops = [
  {
    name: "Coffee Tasting",
    image: "coffee-tasting.jpg",
    price: 15,
    category: "Bean Special"
  },
  {
    name: "Latte Art Workshop",
    image: "latte-art-workshop.jpg",
    price: 25,
    category: "Craft"
  },
  {
    name: "Board Game Tournament",
    image: "board-game-tournament.jpg",
    price: 10,
    category: "Art"
  },
  {
    name: "Barista Basics Course",
    image: "barista-basics.jpg",
    price: 30,
    category: "Bean Special"
  },
  {
    name: "Live Music Night",
    image: "live-music-night.jpg",
    price: 20,
    category: "Art"
  },
  {
    name: "Handmade Jewelry Workshop",
    image: "handmade-jewelry-workshop.jpg",
    price: 35,
    category: "Craft"
  },
  {
    name: "Coffee Brewing Techniques",
    image: "coffee-brewing-techniques.jpg",
    price: 20,
    category: "Bean Special"
  },
  {
    name: "Painting & Sip Night",
    image: "painting-sip-night.jpg",
    price: 25,
    category: "Art"
  },
  {
    name: "Knit & Chat",
    image: "knit-chat.jpg",
    price: 15,
    category: "Textile"
  },
  {
    name: "Craft Beer Tasting",
    image: "craft-beer-tasting.jpg",
    price: 18,
    category: "Bean Special"
  },
  {
    name: "Photography Exhibition",
    image: "photography-exhibition.jpg",
    price: 0,
    category: "Art"
  },
  {
    name: "Ceramic Pottery Class",
    image: "ceramic-pottery-class.jpg",
    price: 40,
    category: "Craft"
  },
  {
    name: "Vintage Clothing Swap",
    image: "vintage-clothing-swap.jpg",
    price: 5,
    category: "Textile"
  },
  {
    name: "Espresso Masterclass",
    image: "espresso-masterclass.jpg",
    price: 30,
    category: "Bean Special"
  },
  {
    name: "Open Mic Night",
    image: "open-mic-night.jpg",
    price: 10,
    category: "Art"
  },
  {
    name: "Macrame Workshop",
    image: "macrame-workshop.jpg",
    price: 20,
    category: "Textile"
  },
  {
    name: "Artisan Chocolate Pairing",
    image: "artisan-chocolate-pairing.jpg",
    price: 22,
    category: "Bean Special"
  },
  {
    name: "Craft & Create",
    image: "craft-create.jpg",
    price: 15,
    category: "Craft"
  },
  {
    name: "Handmade Candle Workshop",
    image: "handmade-candle-workshop.jpg",
    price: 28,
    category: "Craft"
  },
  {
    name: "Sustainable Fashion Talk",
    image: "sustainable-fashion-talk.jpg",
    price: 10,
    category: "Textile"
  }
];

function renderWorkshops() {
  const container = document.querySelector('.content-container');

  const workshopHTML = cafeWorkshops.map(workshop => {
    return `
      <div class="workshop-item">
        <img src="${workshop.image}" alt="${workshop.name}" />
        <h2>${workshop.name}</h2>
        <p>Category: ${workshop.category}</p>
        <p>Price: EUR ${workshop.price}</p>
      </div>
    `;
  }).join(''); 

  container.innerHTML += `<div class="workshops">${workshopHTML}</div>`;
}

document.addEventListener('DOMContentLoaded', renderWorkshops);
