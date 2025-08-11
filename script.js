
const questions = [
  { q: "What does HTML stand for?", a: "HyperText Markup Language" },
  { q: "Which language is used for styling web pages?", a: "CSS" },
  { q: "What does JS stand for?", a: "JavaScript" }
];

let index = 0, score = 0;

function loadQuestion() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = `
    <div class="question">${questions[index].q}</div>
    <input type="text" id="answer" placeholder="Type your answer">
  `;
}

function nextQuestion() {
  const answer = document.getElementById("answer").value.trim();
  if (answer.toLowerCase() === questions[index].a.toLowerCase()) score++;
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").innerText = `You scored ${score} out of ${questions.length}`;
  }
}

document.getElementById("nextBtn").addEventListener("click", nextQuestion);
loadQuestion();


document.getElementById("jokeBtn").addEventListener("click", fetchJoke);

async function fetchJoke() {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await res.json();
  document.getElementById('output').innerHTML = `
    <strong>${data.setup}</strong><br>${data.punchline}
  `;
}


