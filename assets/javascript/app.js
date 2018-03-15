//quiz questions structured in an array
var allQuestions = [{

  question: "What is the airspeed velocity of an unladen swallow?",
    choices: ["Whats a swallow?", "35 mph", "10 knots", "What do you mean? An African or European swallow?"],
    correctAnswer: 3
  },

  {
    question: "Hold your hand up to your face. Is your hand bigger than your face?",
    choices: ["You poor fool", "Yes", "No", "I don't know"],
    correctAnswer: 0
  },

  {
    question: "What is 1 + 1?",
    choices: ["Not this one", "Not this one either", "2", "You went too far. Go back to C"],
    correctAnswer: 2
  },

  {
    question: "When the moon hits your eye like a big pizza pie...",
    choices: ["That's amore", "That's a foray", "That's uhh...for Ray", "Supper"],
    correctAnswer: 0
  },
];


for (let i = 0; i < allQuestions.length; i++) {
  var currentQ = allQuestions[i]
  var answer = prompt(currentQ.question)
  if (answer == currentQ.choices[currentQ.correctAnswer]) {
    alert("NICE!")
  } else {
    alert("FAIL!")
  }
}
// here is where i am trying to get the questions from my array above to display in my html
$("#quiz").append(allQuestions);


//here is wher i'm adding a timer to countdown from 45 seconds
window.setTimeout(yourfunction, 20000);