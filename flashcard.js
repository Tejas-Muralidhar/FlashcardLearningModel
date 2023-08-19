// // *********************************************************


// // Function to get query parameters from the URL
// function getQueryParam(param) {
//   if (typeof window !== 'undefined') {
//       const query = window.location.search;
//       const parts = query.split('=');
//       if (parts.length === 2) {
//           return parts[1];
//       }
//   }
// }


//   // Function to filter and display relevant flashcards based on the topic
//   function showRelevantFlashcards(topic) {
//     // Get all flashcard divs
//     const decks = document.querySelectorAll('.Deck');

//     // Loop through each flashcard div and hide/show based on the topic
//     decks.forEach((deck) => {
//       if (deck.id === topic) {
//         deck.style.display = 'flex'; // Show the flashcard
//       } else {
//         deck.style.display = 'none';  // Hide the flashcard
//       }
//     });
//   }

//   // Get the selected topic from the query parameter
//   const selectedTopic = getQueryParam('topic');

//   // If a topic is selected, show relevant flashcards
//   if (selectedTopic!=null) {
//     showRelevantFlashcards(selectedTopic);
//   }

  
//   fetch("Flashcards.cards.json")
//   .then(response => response.json())
//   .then(jsonData => {
//       //use jsonData as the array of objects and implement everything. We need to create tags and add appropriate data inside them. Then capture the elements using the DOM and place them there.
//       // Loop through the topics in jsonData
//       for (const topicObject of jsonData) {
//         if (topicObject.hasOwnProperty("topic")) {
//           const topic = topicObject.topic;
      
//           // Get the deck element for the current topic
//           const deck = document.getElementById(topic);
      
//           if (deck) {
//             // Get the flashcards for the current topic
//             const flashcards = topicObject.flashcards;
      
//             // Loop through the flashcards for the current topic
//             for (const flashcard of flashcards) {
//             // Create HTML elements for the flashcard
//             const cardDiv = document.createElement('div');
//             cardDiv.classList.add('card');

//             const flipCardDiv = document.createElement('div');
//             flipCardDiv.classList.add('flip-card');

//             const innerFlipCardDiv = document.createElement('div');
//             innerFlipCardDiv.classList.add('flip-card-inner');

//             const flipCardFront = document.createElement('div');
//             flipCardFront.classList.add('flip-card-front');

//             const flipCardBack = document.createElement('div');
//             flipCardBack.classList.add('flip-card-back');

//             const question = document.createElement('h3');
//             question.classList.add('question');
//             question.textContent = flashcard.question;

//             const answer = document.createElement('h3');
//             answer.classList.add('answer');
//             answer.textContent = flashcard.answer;

//             // ... Continue creating and appending elements for the flashcard
//             // Populate question and answer, etc.

//             // Append the flashcard elements to the deck
//             flipCardFront.appendChild(question);
//             flipCardBack.appendChild(answer);
//             innerFlipCardDiv.appendChild(flipCardFront);
//             innerFlipCardDiv.appendChild(flipCardBack);
//             flipCardDiv.appendChild(innerFlipCardDiv);
//             cardDiv.appendChild(flipCardDiv);
//             deck.appendChild(cardDiv);
//           }
//         }
//       }
//     }
//   })
//   .catch(error => {

//       console.error("ollla", error);
//   });






// Function to get query parameters from the URL
// function getQueryParam(param) {
//   if (typeof window !== 'undefined') {
//     const query = window.location.search;
//     const parts = query.split('=');
//     if (parts.length === 2) {
//       return parts[1];
//     }
//   }
// }

// // Function to filter and display relevant flashcards based on the topic
// function showRelevantFlashcards(topic) {
//   const decks = document.querySelectorAll('.Deck');
  
//   decks.forEach((deck) => {
//     if (deck.id === topic) {
//       deck.style.display = 'flex';
//     } else {
//       deck.style.display = 'none';
//     }
//   });
// }

// const selectedTopic = getQueryParam('topic');

// if (selectedTopic !== null) {
//   showRelevantFlashcards(selectedTopic);
// }

// // Fetch and populate flashcards
// fetch("Flashcards.cards.json")
//   .then(response => response.json())
//   .then(jsonData => {
//     // console.log("Fetch successful!", jsonData);
//     jsonData.forEach(topicObject => {
//       // console.log("Fetch successful!", topicObject);
//       const topic = topicObject.topic;
//       console.log("Fetch successful!", topic); 
//       const flashcards = topicObject.flashcards;
//       console.log("Fetch successful!", flashcards);
//       const deck = document.getElementById(topic);

//       if (deck && flashcards) {
//         flashcards.forEach(flashcard => {
//           const cardDiv = document.createElement('div');
//           cardDiv.classList.add('card');

//           const flipCardDiv = document.createElement('div');
//           flipCardDiv.classList.add('flip-card');

//           const innerFlipCardDiv = document.createElement('div');
//           innerFlipCardDiv.classList.add('flip-card-inner');

//           const flipCardFront = document.createElement('div');
//           flipCardFront.classList.add('flip-card-front');

//           const flipCardBack = document.createElement('div');
//           flipCardBack.classList.add('flip-card-back');

//           const question = document.createElement('h3');
//           question.classList.add('question');
//           question.textContent = flashcard.question;

//           const answer = document.createElement('h3');
//           answer.classList.add('answer');
//           answer.textContent = flashcard.answer;

//           // ... Continue creating and appending elements for the flashcard
//           // Populate question and answer, etc.

//           flipCardFront.appendChild(question);
//           flipCardBack.appendChild(answer);
//           innerFlipCardDiv.appendChild(flipCardFront);
//           innerFlipCardDiv.appendChild(flipCardBack);
//           flipCardDiv.appendChild(innerFlipCardDiv);
//           cardDiv.appendChild(flipCardDiv);
//           deck.appendChild(cardDiv);
//         });
//       }
//     });
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });


  // ... Your existing code ...


// Function to get query parameters from the URL
function getQueryParam(param) {
  if (typeof window !== 'undefined') {
    const query = window.location.search;
    const parts = query.split('=');
    if (parts.length === 2) {
      return parts[1];
    }
  }
}

// Function to filter and display relevant flashcards based on the topic
function showRelevantFlashcards(topic) {
  const decks = document.querySelectorAll('.Deck');
  
  decks.forEach((deck) => {
    if (deck.id === topic) {
      deck.style.display = 'flex';
    } else {
      deck.style.display = 'none';
    }
  });
}  

// Get the selected topic from the query parameter
const selectedTopic = getQueryParam('topic');

// If a topic is selected, show relevant flashcards
if (selectedTopic != null) {
  showRelevantFlashcards(selectedTopic);
}
if (window.location.pathname.includes("flashcard.html")) {
// Fetch the JSON data
fetch("Flashcards.cards.json")
  .then(response => response.json())
  .then(jsonData => {
    // Loop through the flashcards in jsonData
    jsonData.forEach(flashcard => {
      const topic = flashcard.topic;
      const deck = document.getElementById(topic); // Get the deck element for the current topic
      
      // Create HTML elements for the flashcard
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

      const flipCardDiv = document.createElement('div');
      flipCardDiv.classList.add('flip-card');

      // ... Create and append other elements ...

      const innerFlipCardDiv = document.createElement('div');
      innerFlipCardDiv.classList.add('flip-card-inner');

      const flipCardFront = document.createElement('div');
      flipCardFront.classList.add('flip-card-front');

      const flipCardBack = document.createElement('div');
      flipCardBack.classList.add('flip-card-back');

      const question = document.createElement('h3');
      question.classList.add('question');
      question.textContent = flashcard.question;

      const answer = document.createElement('h3');
      answer.classList.add('answer');
      answer.textContent = flashcard.answer;

      // Append the flashcard elements to the deck
      flipCardFront.appendChild(question);
      flipCardBack.appendChild(answer);
      innerFlipCardDiv.appendChild(flipCardFront);
      innerFlipCardDiv.appendChild(flipCardBack);
      flipCardDiv.appendChild(innerFlipCardDiv);
      cardDiv.appendChild(flipCardDiv);
      deck.appendChild(cardDiv);
    });
  })
  .catch(error => {
    console.error("Error fetching or processing JSON data:", error);
  });
}