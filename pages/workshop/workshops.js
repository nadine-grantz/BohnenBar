function renderWorkshops() {
  const container = document.querySelector('.content-container');

  const workshopHTML = cafeWorkshops.map(workshop => {
    return `
      <div class="workshop-card">
        <img class="workshop-image" src="${workshop.image}" alt="${workshop.name}" />
        <h2 class="product-name" >${workshop.name}</h2>
        <p class="workshop-category" >${workshop.category}</p>
        <p class="workshop-price" >EUR ${workshop.price}</p>
    </div>
    `;
  }).join('');

  container.innerHTML += `<div class="workshops">${workshopHTML}</div>`;
}

window.addEventListener('DOMContentLoaded', renderWorkshops);

const cafeWorkshops = [
  {
    name: "Coffee Tasting",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    price: 15,
    category: "Bean Special"
  },
  {
    name: "Latte Art Workshop",
    image: "https://images.unsplash.com/photo-1551266681-ba5f0b95e2e5?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 25,
    category: "Craft"
  },
  {
    name: "Board Game Tournament",
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10,
    category: "Art"
  },
  {
    name: "Barista Basics Course",
    image: "https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 30,
    category: "Bean Special"
  },
  {
    name: "Karaoke Night",
    image: "https://images.unsplash.com/photo-1693835843843-82f691094f59?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 12,
    category: "Art"
  },
  {
    name: "Handmade Bracelet Workshop",
    image: "https://images.unsplash.com/photo-1690962661052-4345d872ff21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmRhbWRlJTIwYnJhY2VsZXR8ZW58MHx8MHx8fDI%3D",
    price: 35,
    category: "Craft"
  },
  {
    name: "Painting Night",
    image: "https://images.unsplash.com/photo-1615339725569-80172615f345?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhaW50aW5nJTIwZ2lybHxlbnwwfHwwfHx8Mg%3D%3D",
    price: 25,
    category: "Art"
  },
  {
    name: "Knit & Chat",
    image: "https://images.unsplash.com/photo-1641060889144-1cc91e6871ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGtuaXR8ZW58MHx8MHx8fDI%3D",
    price: 15,
    category: "Textile"
  },
  {
    name: "Photography Exhibition",
    image: "https://images.unsplash.com/photo-1614447413359-5f87a652a269?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlsZGVyJTIwYXVzc3RlbGx1bmd8ZW58MHx8MHx8fDI%3D",
    price: 11,
    category: "Art"
  },
  {
    name: "Vintage Clothing Swap",
    image: "https://images.unsplash.com/photo-1518719161176-290f990bf5b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmludGFnZSUyMGZsb2htYXJrdHxlbnwwfHwwfHx8Mg%3D%3D",
    price: 5,
    category: "Textile"
  },
  {
    name: "Espresso Masterclass",
    image: "https://images.unsplash.com/photo-1644326646187-b6dbeea5cf62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXNwcmVzc298ZW58MHx8MHx8fDI%3D",
    price: 26,
    category: "Bean Special"
  },
  {
    name: "Open Mic Night",
    image: "https://images.unsplash.com/photo-1648808678096-18f488fd6858?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3BlbiUyMG1pY3xlbnwwfHwwfHx8Mg%3D%3D",
    price: 10,
    category: "Art"
  },
  {
    name: "Macrame Workshop",
    image: "https://images.unsplash.com/photo-1590494075205-9d76c8784f11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hY3JhbWV8ZW58MHx8MHx8fDI%3D",
    price: 20,
    category: "Textile"
  },
  {
    name: "Handmade Candle Workshop",
    image: "https://images.unsplash.com/photo-1643625668608-6e135f415c2a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 28,
    category: "Craft"
  },
  {
    name: "Sustainable Fashion Talk",
    image: "https://images.unsplash.com/photo-1596097198305-e4844a56ddb8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzdGFpbmFibGUlMjBmYXNoaW9ufGVufDB8fDB8fHwy",
    price: 10,
    category: "Textile"
  }
];


