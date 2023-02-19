const question = document.querySelector(".question");
const explaination = document.querySelector(".explaination");
const trueAns = document.querySelector(".true");
const falseAns = document.querySelector(".false");

const fact = {
  question: "'1' + '1' === '2'",
  answer: "false",
  explanation:
    "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'.",
};

question.textContent = fact.question;
explaination.textContent = fact.explanation;

//check if true of false
function checkAnswer(answer) {
  const status = document.querySelector(".status");
  if (fact.answer === answer) {
    status.textContent = "Correct!";
    status.style.color = "green";
  } else {
    status.textContent = "Incorrect!";
    status.style.color = "red";
  }
  explaination.classList.remove("display");
}

trueAns.addEventListener("click", () => {
  falseAns.setAttribute("disabled", "disabled");
  checkAnswer("true");
  if (fact.answer === "true") trueAns.classList.add("correct");
  else trueAns.classList.add("wrong");
});

falseAns.addEventListener("click", () => {
  checkAnswer("false");
  trueAns.setAttribute("disabled", "disabled");
  if (fact.answer === "false") falseAns.classList.add("correct");
  else falseAns.classList.add("wrong");
});
