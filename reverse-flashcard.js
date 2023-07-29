
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