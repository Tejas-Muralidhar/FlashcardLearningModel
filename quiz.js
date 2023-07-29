/**************************/

//to filter the quiz based on query

function getQueryParam(param) {
    const query = window.location.search;
    const parts = query.split('=');
      if (parts.length === 2) {
        return parts[1];
      }
  }
  function showRelevantQuiz(Subject) {
    const decks = document.querySelectorAll('.Deck');
    decks.forEach((deck) => {
      if (deck.id === Subject) {
        deck.style.display = 'block'; // Show the quiz
      } else {
        deck.style.display = 'none';  // Hide the quiz
      }
    });
  }
  const selectedSubject = getQueryParam('subject');
  if (selectedSubject!=null) {
    showRelevantQuiz(selectedSubject);
  }

/**************************************/

//to change button colors and to disabled them

const containers = document.querySelectorAll(".container");

  containers.forEach(container => {
    const options = container.querySelectorAll(".option");

    options.forEach(option => {
      option.addEventListener("click", () => {
        if (option.classList.contains("correct")) {
          // Correct answer clicked, turn it green
          option.style.backgroundColor = "#7dd87d";
        } else {
          // Incorrect answer clicked, turn it red
          option.style.backgroundColor = "#eb2632";
        }

        // Disable all buttons in the current container
        options.forEach(button => {
          button.disabled = true;
        });
      });
    });
  });

/********************************************/
 
//to print score when submit button is clicked!

function CalculateDeckScore(deck) {
    const containers = deck.querySelectorAll('.container');
    let deckScore = 0;
  
    containers.forEach(container => {
      const options = container.querySelectorAll('.option');
  
      options.forEach(option => {
        if (option.style.backgroundColor === 'rgb(125, 216, 125)') {
          deckScore++;
        }
      });
    });
  
    return deckScore;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const decks = document.querySelectorAll('.Deck');
  
    decks.forEach(deck => {
      const submitButton = deck.querySelector('.submit-button');
  
      submitButton.addEventListener('click', () => {
        const score = CalculateDeckScore(deck);
        submitButton.innerHTML = `You have scored ${score} out of 15!`;
        submitButton.disabled = true;
      });
    });
  });
  