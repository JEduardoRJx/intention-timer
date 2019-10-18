var studyBtn = document.querySelector('.study-btn')
var meditateBtn = document.querySelector('.meditate-btn')
var exerciseBtn = document.querySelector('.exercise-btn')
var startBtn = document.querySelector('.start-btn')
var form = document.querySelector('form')
var timerDiv = document.querySelector('.timer')
var accomplishText = document.querySelector('.accomplish')
var timerBtn = document.querySelector('.timer-btn')
var logBtn = document.querySelector('.log-activity')
var minutes = document.querySelector('.minutes')
var seconds = document.querySelector('.seconds')
var pastActSection = document.querySelector('.new-act-wrapper')
var category = ''
var inputs = document.querySelectorAll('input')


studyBtn.addEventListener('click', handleBtn);
meditateBtn.addEventListener('click', handleBtn);
exerciseBtn.addEventListener('click', handleBtn);
startBtn.addEventListener('click', handleStartBtn)
logBtn.addEventListener('click', handleLogBtn)



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
  category = 'Study'
}

function handleMeditateBtn() {
  meditateBtn.classList.add('clicked');
  studyBtn.classList.remove('clicked');
  exerciseBtn.classList.remove('clicked');
  category = 'Medidate'
}


function handleExerciseBtn() {
  exerciseBtn.classList.add('clicked');
  studyBtn.classList.remove('clicked');
  meditateBtn.classList.remove('clicked');
  category = 'Exercise'
}

function handleStartBtn() {
  startBtn.classList.add('clicked')
  form.classList.add('hide')
  timerDiv.classList.remove('hide')
  let descriptionText = accomplishText.value
  minutes = document.querySelector('.minutes').value
  seconds = document.querySelector('.seconds').value
  console.log(minutes, seconds)
  handleTimer(descriptionText, minutes, seconds)
}

function handleTimer(desText, minutes, seconds) {
  console.log(minutes, seconds)

  timerDiv.insertAdjacentHTML('afterbegin', `<h2 class='time'>${desText}</h2>`);  
  const startTimer = () => {
  console.log(minutes, seconds)
    let totalMinutes = parseInt(minutes) * 60 + parseInt(seconds)
    console.log(totalMinutes)
      setInterval(function() {
        totalMinutes = totalMinutes - 1
        if(totalMinutes >= 0) {
          document.querySelector('.timer-seconds').innerText = totalMinutes || ''
        }
      }, 1000)
  }
  timerBtn.addEventListener('click', startTimer)
}

function handleLogBtn() {
  let description = document.querySelector('.time').innerText
  pastActSection.insertAdjacentHTML('afterbegin', `<article>
    <h3>${category}</h3>
    <h2>${seconds} Seconds</h2>
    <p>${description}</p>
  </article>`); 
  clearData()
}

function clearData() {
  let h2Message = document.querySelector('.you-havent-logged')
  h2Message.classList.add('hide');
  timerDiv.classList.add('hide');
  form.classList.remove('hide');
  studyBtn.classList.remove('clicked');
  meditateBtn.classList.remove('clicked');
  exerciseBtn.classList.remove('clicked');
  startBtn.classList.remove('clicked');
  accomplishText.value = '';
  document.querySelector('.minutes').value = ''
  document.querySelector('.seconds').value = ''
  document.querySelector('.time').remove()
  document.querySelector('.timer-seconds').remove()
  startBtn.addEventListener('click', handleStartBtn)
}

