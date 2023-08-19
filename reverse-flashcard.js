// *********************************************************



// Function to get query parameters from the URL
function getQueryParam(param) {
    const query = window.location.search;
    const parts = query.split('=');
      if (parts.length === 2) {
        return parts[1];
      }
  }

  // Function to filter and display relevant flashcards based on the topic
  function showRelevantReverseFlashcards(topic) {
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
    showRelevantReverseFlashcards(selectedTopic);
  }

  if (window.location.pathname.includes("reverse-flashcard.html")) {

  fetch("Flashcards.cards.json")
  .then(response => response.json())
  .then(jsonData => {
    // Loop through the flashcards in jsonData
    jsonData.forEach(reverseFlashcard => {
      const topic = reverseFlashcard.topic;
      const deck = document.getElementById(topic); // Get the deck element for the current topic
     
      if(deck!==null){
      // Create HTML elements for the flashcard
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
  
      const flipCardDiv = document.createElement('div');
      flipCardDiv.classList.add('reverse-flip-card');
  
      // ... Create and append other elements ...
  
      const innerFlipCardDiv = document.createElement('div');
      innerFlipCardDiv.classList.add('reverse-flip-card-inner');
  
      const flipCardFront = document.createElement('div');
      flipCardFront.classList.add('reverse-flip-card-front');
  
      const flipCardBack = document.createElement('div');
      flipCardBack.classList.add('reverse-flip-card-back');
  
      const question = document.createElement('h3');
      question.classList.add('question');
      question.textContent = reverseFlashcard.question;

      const answer = document.createElement('h3');
      answer.classList.add('answer');
      answer.textContent = reverseFlashcard.answer;

      // ...

      // Append the flashcard elements to the deck
      flipCardFront.appendChild(question);
      flipCardBack.appendChild(answer);
      innerFlipCardDiv.appendChild(flipCardFront);
      innerFlipCardDiv.appendChild(flipCardBack);
      flipCardDiv.appendChild(innerFlipCardDiv);
      cardDiv.appendChild(flipCardDiv);
      deck.appendChild(cardDiv);
      }
    });
  })
  .catch(error => {
    console.error("Error fetching or processing JSON data:", error);
  });
}