function revealAnswer(event) {
    var card = event.currentTarget;
    var answer = card.querySelector('.answer');
    var question = card.querySelector('.question');

    if (question.style.display === 'block') {
        card.style.backgroundColor = 'black';
        card.style.color = 'whitesmoke';
        answer.style.display = 'block';
        question.style.display = 'none';
    } else {
        card.style.backgroundColor = 'whitesmoke';
        card.style.color = 'black';
        answer.style.display = 'none';
        question.style.display = 'block';
    }
}

// JavaScript function to add event listeners to all card divs within the Deck
function addEventListenersToCards() {
    var deck = document.querySelector('.Deck');
    var cards = deck.querySelectorAll('.card');

    cards.forEach(function (card) {
        card.addEventListener('click', revealAnswer);
    });
}

// Call the function to add event listeners to all card divs within the Deck
addEventListenersToCards();

