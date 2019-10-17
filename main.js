var studyBtn = document.querySelector('.study-btn')
var meditateBtn = document.querySelector('.meditate-btn')
var exerciseBtn = document.querySelector('.exercise-btn')
var startBtn = document.querySelector('.start-btn')

studyBtn.addEventListener('click', handleBtn);
meditateBtn.addEventListener('click', handleBtn);
exerciseBtn.addEventListener('click', handleBtn);
startBtn.addEventListener('click', handleBtn)


function handleBtn() {
  if(event.target.className.includes('study-btn')) {
    handleStudyBtn();
  } else if(event.target.className.includes('meditate-btn')) {
    handleMeditateBtn();
  } else if (event.target.className.includes('exercise-btn')) {
    handleExerciseBtn();
  } else if (event.target.className.includes('start-btn')) {
    handleStartBtn();
  }
}

function handleStudyBtn() {
  studyBtn.classList.add('clicked');
  meditateBtn.classList.remove('clicked');
  exerciseBtn.classList.remove('clicked');
}

function handleMeditateBtn() {
  meditateBtn.classList.add('clicked');
  studyBtn.classList.remove('clicked');
  exerciseBtn.classList.remove('clicked');
}


function handleExerciseBtn() {
  exerciseBtn.classList.add('clicked');
  studyBtn.classList.remove('clicked');
  meditateBtn.classList.remove('clicked');
}

function handleStartBtn() {
  startBtn.classList.add('clicked')
}