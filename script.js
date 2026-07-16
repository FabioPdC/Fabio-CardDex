const cardContainer = document.getElementById("card-container");
const searchInput = document.getElementById("search");

let cards = [];


async function loadCards() {
    const response = await fetch("cards.json");
    cards = await response.json();

    displayCards(cards);
}


function displayCards(cardsToShow) {

    cardContainer.innerHTML = "";

    cardsToShow.forEach(card => {

        const cardElement = document.createElement("div");

        cardElement.classList.add("card");

        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
            <h2>${card.name}</h2>
            <p>${card.set}</p>
        `;

        cardContainer.appendChild(cardElement);

    });

}


searchInput.addEventListener("input", () => {

    const search = searchInput.value.toLowerCase();

    const filteredCards = cards.filter(card =>
        card.name.toLowerCase().includes(search)
    );

    displayCards(filteredCards);

});


loadCards();
