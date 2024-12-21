// Assuming you have an API endpoint to fetch car data
fetch('https://api.example.com/cars')
  .then(response => response.json())
  .then(cars => {
    const carCardsContainer = document.querySelector('.car-cards');

    cars.forEach(car => {
      const carCard = document.createElement('div');
      carCard.classList.add('car-card');

      carCard.innerHTML = `
        <img src="${car.imageUrl}" alt="${car.model}">
        <h3>${car.model}</h3>
        <p>${car.description}</p>
        <button>Rent Now</button>
      `;

      carCardsContainer.appendChild(carCard);
    });
  })
  .catch(error => {
    console.error('Error fetching car data:', error);
  });