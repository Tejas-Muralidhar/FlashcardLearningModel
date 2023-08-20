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

// /********************************************/

if (window.location.pathname.includes("quiz.html")) {

  fetch("quiz.quizqna.json")
  .then(response => response.json())
  .then(jsonData => {
    const allquestions = document.createElement('div');
    allquestions.classList.add('allquestions');  
    jsonData.forEach(quiz => {
      
      console.log(allquestions);
      const topic = quiz.topic;
      const deck = document.getElementById(topic);

      if(deck !== null && quiz.topic === selectedSubject){
        const container = document.createElement('div');
        container.classList.add('container');
  
        const question = document.createElement('h3');
        question.classList.add('question');
        question.setAttribute("align", "center");
        question.textContent = quiz.question;
  
        const alloptions = document.createElement('div');
        alloptions.classList.add('alloptions');
  
        const button0 = document.createElement('button');
        button0.classList.add('option');
        button0.textContent = "A. " + quiz.options[0];
        const button1 = document.createElement('button');
        button1.classList.add('option');
        button1.textContent = "B. " + quiz.options[1];
        const button2 = document.createElement('button');
        button2.classList.add('option');
        button2.textContent = "C. " + quiz.options[2];
        const button3 = document.createElement('button');
        button3.classList.add('option');
        button3.textContent = "D. " + quiz.options[3];
  
        var correctbutton = "button" + quiz.correct;
  
        switch(correctbutton){
            case "button0": button0.classList.add('correct');
            break;
            case "button1": button1.classList.add('correct');
            break;
            case "button2": button2.classList.add('correct');
            break;
            case "button3": button3.classList.add('correct');
            break;
        }
        
        // Append the flashcard elements to the deck
        alloptions.appendChild(button0);
        alloptions.appendChild(button1);
        alloptions.appendChild(button2);
        alloptions.appendChild(button3);
        container.appendChild(question);
        container.appendChild(alloptions);
        allquestions.appendChild(container);
        deck.insertBefore(allquestions,deck.children[1]);
      }  
    });

    // Add event listeners after all elements are created and added
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
  })
  .catch(error => {
    console.error("Error fetching or processing JSON data:", error);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const decks = document.querySelectorAll('.Deck');

  decks.forEach(deck => {
    const submitButton = deck.querySelector('.submit-button');
    console.log(submitButton);

    submitButton.addEventListener('click', () => {
      const score = CalculateDeckScore(deck);
      submitButton.innerHTML = `You have scored ${score} out of 15!`;
      submitButton.disabled = true;
    });
  });
});
