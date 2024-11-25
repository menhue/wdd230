// Declare the URL of the JSON data
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the HTML div element with the ID "cards"
const cards = document.querySelector('#cards');

// Async function to fetch prophet data
const getProphetData = async () => {
  try {
    // Fetch data from the URL
    const response = await fetch(url);

    // Convert response to JSON
    const data = await response.json();

    // Log the data to the console to verify
    console.table(data.prophets);

    // Call the displayProphets function with the prophets array
    displayProphets(data.prophets);
  } catch (error) {
    console.error("Error fetching prophet data:", error);
  }
};

// Function to display prophets
const displayProphets = (prophets) => {
  // Iterate over each prophet in the array
  prophets.forEach((prophet) => {
    // Create card elements
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');

    // Populate the fullName element with the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image element with attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '250');

    // Append elements to the card
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Add the card to the cards div
    cards.appendChild(card);
  });
};

// Call the getProphetData function
getProphetData();
