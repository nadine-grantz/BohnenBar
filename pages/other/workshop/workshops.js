
const cafeWorkshops = [
  {
    id: 1,
    name: "Coffee Tasting",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    price: 15,
    category: "Bean Special",
    details: "Workshop",
    duration: "2,5h",
  },
  {
    id: 2,
    name: "Latte Art Workshop",
    image: "https://images.unsplash.com/photo-1551266681-ba5f0b95e2e5?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 25,
    category: "Bean Special",
    details: "Workshop",
    duration: "2h",
  },
  {
    id: 3,
    name: "Board Game Tournament",
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10,
    category: "Art", 
    details: "Event",
    duration: "3h",
  },
  {
    id: 4,
    name: "Barista Basics Course",
    image: "https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 30,
    category: "Bean Special",
    details: "Workshop",
    duration: "3,5h",
  },
  {
    id: 5,
    name: "Handmade Bracelet Workshop",
    image: "https://images.unsplash.com/photo-1690962661052-4345d872ff21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmRhbWRlJTIwYnJhY2VsZXR8ZW58MHx8MHx8fDI%3D",
    price: 35,
    category: "Craft",
    details: "Workshop",
    duration: "2,5h",
  },
  {
    id: 6,
    name: "Painting Night",
    image: "https://images.unsplash.com/photo-1615339725569-80172615f345?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhaW50aW5nJTIwZ2lybHxlbnwwfHwwfHx8Mg%3D%3D",
    price: 25,
    category: "Art",
    details: "Workshop",
    duration: "2,5h",
  },
  {
    id: 7,
    name: "Knit & Chat",
    image: "https://images.unsplash.com/photo-1641060889144-1cc91e6871ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGtuaXR8ZW58MHx8MHx8fDI%3D",
    price: 15,
    category: "Textile",
    details: "Workshop",
    duration: "3,5h",
  },
  {
    id: 8,
    name: "Photography Exhibition",
    image: "https://images.unsplash.com/photo-1614447413359-5f87a652a269?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlsZGVyJTIwYXVzc3RlbGx1bmd8ZW58MHx8MHx8fDI%3D",
    price: 11,
    category: "Art",
    details: "Event",
    duration: "till Closing",
  },
  {
    id: 9,
    name: "Espresso Masterclass",
    image: "https://images.unsplash.com/photo-1644326646187-b6dbeea5cf62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXNwcmVzc298ZW58MHx8MHx8fDI%3D",
    price: 26,
    category: "Bean Special",
    details: "Workshop",
    duration: "2,5h",
  },
  {
    id: 10,
    name: "Macrame Workshop",
    image: "https://images.unsplash.com/photo-1590494075205-9d76c8784f11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hY3JhbWV8ZW58MHx8MHx8fDI%3D",
    price: 20,
    category: "Textile",
    details: "Workshop",
    duration: "5h",
  },
  {
    id: 11,
    name: "Sustainable Fashion Talk",
    image: "https://images.unsplash.com/photo-1596097198305-e4844a56ddb8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzdGFpbmFibGUlMjBmYXNoaW9ufGVufDB8fDB8fHwy",
    price: 0,
    category: "Textile",
    details: "Event",
    duration: "2,5h",
  }
];

function applyFilters() {
  const categoryFilter = document.getElementById('filter-category').value;
  const detailsFilter = document.getElementById('filter-details').value;
  const durationFilter = document.getElementById('filter-duration').value;
  const priceFilter = document.getElementById('filter-price').value;


  const filteredWorkshops = cafeWorkshops.filter(workshop => {
    const matchesCategory = categoryFilter === "" || workshop.category === categoryFilter;
    const matchesDetails = detailsFilter === "" || workshop.details === detailsFilter;
    const matchesDuration = durationFilter === "" || workshop.duration === durationFilter;
    const matchesPrice = priceFilter === "" || workshop.price;

    return matchesCategory && matchesDetails && matchesDuration && matchesPrice;
  });

  renderWorkshops(filteredWorkshops);
}

function showAllWorkshops() {
  document.getElementById('filter-category').value = '';
  document.getElementById('filter-details').value = '';
  document.getElementById('filter-duration').value = '';
  document.getElementById('filter-price').value = '';

  renderWorkshops(cafeWorkshops);
}

function renderWorkshops(workshops = cafeWorkshops) {
  const container = document.querySelector('.text-container');

  const existingWorkshops = container.querySelector('.workshops');
  if (existingWorkshops) existingWorkshops.remove();

  if (workshops.length === 0) {
    container.innerHTML += `
      <div>
        <p>No matches,so sorry!</p>
      </div>
    `;
    return;
  } else {
    container.innerHTML = ""
  }

  const workshopHTML = workshops.map(workshop => {
    return `
      <div class="workshop-card">  
        <p class="workshop-category">${workshop.category}</p>
        <img class="workshop-image" src="${workshop.image}" alt="${workshop.name}" />
        <p class="workshop-name">${workshop.name}</p>
       <div class="details-container">
        <div class="info-box">${workshop.details}</div>
        <div class="info-box">${workshop.duration}</div>
      </div>
         <p class="workshop-price">EUR ${workshop.price}</p>
    </div>
    `;
  }).join('');

  container.innerHTML += `<div class="workshops">${workshopHTML}</div>`;
}

window.addEventListener('DOMContentLoaded', () => {
  renderWorkshops();

  document.getElementById('filter-button').addEventListener('click', applyFilters);
  document.getElementById('show-all-button').addEventListener('click', showAllWorkshops);
});
