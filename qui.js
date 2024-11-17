// let selectedAnswer = document.getElementById('selectedAnswer')
// let inputSelected = document.getElementById('inputSeleted') 

// inputSelected.onclick = function(){
//     selectedAnswer.style.backgroundColor='green'
// }

let localStudent = localStorage.getItem('student')
let localAcademy = localStorage.getItem('academy')
let modalStudent = document.getElementById('academy').innerHTML += localAcademy
let modalAcademy = document.getElementById('student').innerHTML += localStudent


let totalScore = 0
let personScore = 0
let questionCounter = 0

let questions = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 0
      },
      {
        question: 'What is the largest planest in oue solar system',
        answers: ['Mars', 'Earth', 'Jupiter', 'Saturn'],
        correctAnswer: 2
      },
      {
        question: 'Which Planest is closest to the sun',
        answers: ['Pluto', 'Mercury', 'Venus', 'Mars'],
        correctAnswer: 1
      },
      {
        question: 'Which Planet is Known for Having The Most Prominent Rings',
        answers: ['Mars', 'Earth', 'Uranus', 'Saturn'],
        correctAnswer: 3
      },
      {
        question: 'Which planet is the coldest in our solar system',
        answers: ['Uranus', 'Pluto', 'Saturn', 'Earth'],
        correctAnswer: 0
      },
      {
        question: 'Which planet is known for having the most moon',
        answers: ['Jupiter', 'Saturn', 'Neptune', 'Mars'],
        correctAnswer: 1
      },
     
      {
        question: 'Which planet has the longest day',
        answers: ['Venus', 'Mars', 'Earth', 'Pluto'],
        correctAnswer: 0
      },
      {
        question: 'What is the Largest Desert in the world',
        answers: ['Sahara', 'Gobi', 'Mojave', 'Atacama'],
        correctAnswer: 0
      },
      {
        question: 'Which river is the longest in South America?',
        answers: ['Amazon River', 'Parana River', 'Missipi River', 'River Nile'],
        correctAnswer: 0
      },

    { question: 'What is the highest mountain peak in North America?', 
    answers: ['Denali (formerly known as Mount McKinley)', 'Mount Whitney', 'Mount Rainier', 'Mount Hood'], 
    correctAnswer: 0 
    },
    { question: 'Which river forms the border between Argentina and Uruguay?', answers: ['Rio de la Plata', 'Parana River', 'Uruguay River', 'Salado River'], correctAnswer: 0 },
    { question: 'What is the largest island in the Mediterranean Sea?', answers: ['Sicily', 'Sardinia', 'Corsica', 'Crete'], correctAnswer: 0 },
    { question: 'Which mountain range runs along the border between France and Spain?', answers: ['Pyrenees', 'Alps', 'Carpathians', 'Apennines'], correctAnswer: 0 },
    
    { question: 'Which of the following words is a synonym for "happy"?', answers: ['Sad', 'Angry', 'Joyful', 'Depressed'], correctAnswer: 2 },

{ question: 'Which of the following words is a antonym for "hot"?', answers: ['Cold', 'Warm', 'Cool', 'Chilly'], correctAnswer: 0 },

{ question: 'What is the meaning of the word "perspicacious"?', answers: ['Having a keen understanding', 'Having a poor understanding', 'Being very intelligent', 'Being very foolish'], correctAnswer: 0 },
{ question: 'Which of the following words is a synonym for "difficult"?', answers: ['Easy', 'Hard', 'Simple', 'Challenging'], correctAnswer: 3 },

]



// display question 
function displayQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    document.getElementById('question').innerHTML = question.question;
    const answersHTML = question.answers.map((answer, index) => {
      return `<button onclick="checkAnswer(${randomIndex}, ${index})">${answer}</button>`;
    }).join('');
    document.getElementById('answers').innerHTML = answersHTML;
    questionCounter +=1
    if(questionCounter === 10){
      document.getElementById('all').style.display='none'
      document.getElementById('modalTotal').style.display='block'
      displayTotalscore(personScore)
    }
    
  }
  
  

  // check answer
  function checkAnswer(questionIndex, answerIndex) {
      const question = questions[questionIndex];
        if (answerIndex === question.correctAnswer) {
          totalScore ++
          personScore = totalScore * 100 / 10 
          // console.log(personScore)
          displayTotalscore(personScore)
        } else {
            totalScore += 0
        }
        displayQuestion();
    }
      
    displayQuestion();
    
    
    
    
    // timer
    
    let timer = 120; // 2 minutes in seconds
    let intervalId;
function set() {
      intervalId = setInterval(() => {
        timer--;
        document.getElementById('timer').innerHTML = `${Math.floor(timer / 60)}:${timer % 60}`;
        if (timer === 0) {
          clearInterval(intervalId);
          document.getElementById('modalTotal').style.display='block'
          displayTotalscore(personScore);
        }
      }, 1000);
    }
    
set();


function displayTotalscore(personScore){ 
  let modalData = document.getElementById('modalTotal') 
  modalData.innerHTML='' 
  let div = document.createElement('div') 
  div.innerHTML+=` 
    <div class="flexgap-7"> 
      <p>${modalStudent},</p> 
      <p>${modalAcademy},</p> 
      <p>${personScore}%</p> 
    </div> 
    <button class="bg-black p-3 rounded-lg text-white" onclick="saveAndRedirect(${personScore})">Ok</button> 
  ` 
  modalData.appendChild(div) 
} 

function saveAndRedirect(personScore) {
  let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
  let data = {
    Studentname: modalStudent,
    Academyname: modalAcademy,
    personScore: personScore,
  };
  savedData.push(data);
  localStorage.setItem('savedData', JSON.stringify(savedData));
  window.location.href = 'home.html';
}
