document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
      <nav>
        <ul>
          <li><a href="/pages/coffee.html">Coffee</a></li>
          <li><a href="/pages/cubs.html">Cubs</a></li>
          <li><a href="/pages/accessories.html">Accessories</a></li>
        </ul>
      </nav>
    `;

  document.querySelector(".dynamic-nav").innerHTML = navHTML;

   
   const adviceList = [
    {
      title: "Buy certified coffee",
      advice: "Look out for certificates such as Fair Trade, Rainforest Alliance or organic to ensure that the coffee has been grown in a resource-friendly way."
    },
    {
      title: "Avoid disposable cups",
      advice: "Use reusable coffee cups to reduce waste and protect the environment"
    },
    {
      title: "Choose local roasters",
      advice: "Support local coffee roasters who are committed to sustainable cultivation and fair working conditions"
    }
  ];

  const container = document.getElementById('advice-container');

  adviceList.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = item.title;
    card.appendChild(cardTitle);

    const cardAdvice = document.createElement('p');
    cardAdvice.textContent = item.advice;
    card.appendChild(cardAdvice);

    container.appendChild(card); 
  });
});
