const username = "admin";
const password = "password123";


const loginForm = document.getElementById("login-form");
const quizContainer = document.getElementById("quiz-container");
const loginContainer = document.getElementById("login-container");


document.getElementById("login-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const userInput = document.getElementById("username").value;
    const passInput = document.getElementById("password").value;

    
    if (userInput === username && passInput === password) {
        
        quizContainer.style.display = "block";
        loginContainer.style.display = "none";
    } else {
        alert("Invalid username or password");
    }
});


const quizData = [
  {
    question: "Who won the 2024 TATA IPL trophy?",
    a: "Mumbai Indians",
    b: "Sunrisers Hyderabad",
    c: "Chennai Super Kings",
    d: "Kolkata Knight Riders",
    correct: "d",
  },
  {
    question: "Which team has the most IPL trophies among the below?",
    a: "Rajasthan Royals",
    b: "Punjab KIngs",
    c: "Gujarat Titans",
    d: "Chennai Super Kings",
    correct: "d",
  },
  {
    question: "Which individual cricketer played most matches as captain in IPL?",
    a: "Sourav Ganguly",
    b: "M S Dhoni",
    c: "Rohit Sharma",
    d: "Virat Kohli",
    correct: "b",
  },
  {
    question: "What does IPL stands for?",
    a: "India Productions Limited",
    b: "International Premiere League",
    c: "Indian Premiere League",
    d: "Inter Program Levels",
    correct: "c",
  },
 {
    question: "What year was IPL launched?",
    a: "2008",
    b: "2014",
    c: "2010",
    d: "2006",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
