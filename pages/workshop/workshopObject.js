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

const cafeWorkshops = [
  {
    name: "Coffee Tasting",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    price: 15,
    category: "Bean Special"
  },
  {
    name: "Latte Art Workshop",
    image: "https://images.unsplash.com/photo-1565842205193-bf2f5b0b3d0e",
    price: 25,
    category: "Craft"
  },
  {
    name: "Board Game Tournament",
    image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5",
    price: 10,
    category: "Art"
  },
  {
    name: "Barista Basics Course",
    image: "https://images.unsplash.com/photo-1516585304945-c5f69961f6a9",
    price: 30,
    category: "Bean Special"
  },
  {
    name: "Live Music Night",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: 20,
    category: "Art"
  },
  {
    name: "Handmade Jewelry Workshop",
    image: "https://images.unsplash.com/photo-1587087810676-4a2039e3d0d5",
    price: 35,
    category: "Craft"
  },
  {
    name: "Coffee Brewing Techniques",
    image: "https://images.unsplash.com/photo-1565905048732-c69b2a82f623",
    price: 20,
    category: "Bean Special"
  },
  {
    name: "Painting & Sip Night",
    image: "https://images.unsplash.com/photo-1578109484517-df5b08ed0630",
    price: 25,
    category: "Art"
  },
  {
    name: "Knit & Chat",
    image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
    price: 15,
    category: "Textile"
  },
  {
    name: "Craft Beer Tasting",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
    price: 18,
    category: "Bean Special"
  },
  {
    name: "Photography Exhibition",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
    price: 0,
    category: "Art"
  },
  {
    name: "Ceramic Pottery Class",
    image: "https://images.unsplash.com/photo-1592194996308-ded55a4e30b7",
    price: 40,
    category: "Craft"
  },
  {
    name: "Vintage Clothing Swap",
    image: "https://images.unsplash.com/photo-1596301153655-4356e6dd7da3",
    price: 5,
    category: "Textile"
  },
  {
    name: "Espresso Masterclass",
    image: "https://images.unsplash.com/photo-1550476738-4f03b30607a6",
    price: 30,
    category: "Bean Special"
  },
  {
    name: "Open Mic Night",
    image: "https://images.unsplash.com/photo-1485462930954-2a2b15c1629c",
    price: 10,
    category: "Art"
  },
  {
    name: "Macrame Workshop",
    image: "https://images.unsplash.com/photo-1607290817803-ffd1be2f9d12",
    price: 20,
    category: "Textile"
  },
  {
    name: "Artisan Chocolate Pairing",
    image: "https://images.unsplash.com/photo-1598514989334-2a768fc37e0b",
    price: 22,
    category: "Bean Special"
  },
  {
    name: "Craft & Create",
    image: "https://images.unsplash.com/photo-1586044307804-6173a2ab8a6b",
    price: 15,
    category: "Craft"
  },
  {
    name: "Handmade Candle Workshop",
    image: "https://images.unsplash.com/photo-1567460017248-65685a72d8a1",
    price: 28,
    category: "Craft"
  },
  {
    name: "Sustainable Fashion Talk",
    image: "https://images.unsplash.com/photo-1592878849129-15c7be4b1053",
    price: 10,
    category: "Textile"
  }
];


