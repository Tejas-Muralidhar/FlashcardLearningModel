// *********************************************************
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
    var deck = document.querySelectorAll('.Deck');
    deck.forEach(function (DECK){
        var cards = DECK.querySelectorAll('.card');
        cards.forEach(function (card) {
        card.addEventListener('click', revealAnswer);
    });
    })
}

// Call the function to add event listeners to all card divs within the Deck
addEventListenersToCards();



// Function to get query parameters from the URL
function getQueryParam(param) {
    const query = window.location.search;
    const parts = query.split('=');
      if (parts.length === 2) {
        return parts[1];
      }
  }

  // Function to filter and display relevant flashcards based on the topic
  function showRelevantFlashcards(topic) {
    // Get all flashcard divs
    const decks = document.querySelectorAll('.Deck');

    // Loop through each flashcard div and hide/show based on the topic
    decks.forEach((deck) => {
      if (deck.id === topic) {
        deck.style.display = 'flex'; // Show the flashcard
      } else {
        deck.style.display = 'none';  // Hide the flashcard
      }
    });
  }

  // Get the selected topic from the query parameter
  const selectedTopic = getQueryParam('topic');

  // If a topic is selected, show relevant flashcards
  if (selectedTopic!=null) {
    showRelevantFlashcards(selectedTopic);
  }