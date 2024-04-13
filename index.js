const homePointOne = document.getElementById('add-1-home')
const homePointTwo = document.getElementById('add-2-home')
const homePointThree = document.getElementById('add-3-home')
const guestPointOne = document.getElementById('add-1-guest')
const guestPointTwo = document.getElementById('add-2-guest')
const guestPointThree = document.getElementById('add-3-guest')
const newGame = document.getElementById('new-game')
const timerText = document.getElementById('timer-text')
const timerButtons = document.querySelectorAll('.timer-btn')

let homeScoreText = document.getElementById('home-score')
let guestScoreText = document.getElementById('guest-score')
let homeScore = 0
let guestScore = 0
let countdownTimer  

homePointOne.addEventListener('click', ()=>{
    homeScore += 1
    homeScoreText.innerText = homeScore
    winningTeam()
})

homePointTwo.addEventListener('click', ()=>{
    homeScore += 2
    homeScoreText.innerText = homeScore
    winningTeam()
})

homePointThree.addEventListener('click', ()=>{
    homeScore += 3
    homeScoreText.innerText = homeScore
    winningTeam()
})

guestPointOne.addEventListener('click', ()=>{
    guestScore += 1
    guestScoreText.innerText = guestScore
    winningTeam()
})

guestPointTwo.addEventListener('click', ()=>{
    guestScore += 2
    guestScoreText.innerText = guestScore
    winningTeam()
})

guestPointThree.addEventListener('click', ()=>{
    guestScore += 3
    guestScoreText.innerText = guestScore
    winningTeam()
})

newGame.addEventListener('click', () =>{
    homeScore = 0
    guestScore = 0
    homeScoreText.textContent = homeScore
    guestScoreText.textContent = guestScore
    timerText.textContent = '00:00'
    clearInterval(countdownTimer)
    winningTeam()
})

function startTimer(duration){
    const startTime = Date.now()
    const endTime = startTime + duration * 1000
    
    countdownTimer = setInterval(() =>{
        const currentTime = Date.now()
        const timeRemaining = endTime - currentTime
        
        if(timeRemaining < 0 ){
            clearInterval(countdownTimer)
            timerText.textContent = endTime - currentTime
        }else{
            const minutes = Math.floor((timeRemaining / 1000) / 60)
            const seconds = Math.floor((timeRemaining / 1000) % 60)
            
            const minutesStr = String(minutes).padStart(2, '0')
            const secondsStr = String(seconds).padStart(2, '0')
            
            timerText.textContent = `${minutesStr}:${secondsStr}`
        }
    }, 1000)
}

timerButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        clearInterval(countdownTimer)
        
        const duration = parseInt(button.id.split('-')[0])
        startTimer(duration);
    })
})
const homeTeamWinning = document.getElementById('home-team')
const guestTeamWinning = document.getElementById('guest-team')

function winningTeam(){
    if(homeScore > guestScore){
        homeTeamWinning.classList.add('winning-team')
        guestTeamWinning.classList.remove('winning-team')
    }else if(guestScore > homeScore){
        guestTeamWinning.classList.add('winning-team')
        homeTeamWinning.classList.remove('winning-team')
        
    }else{
        guestTeamWinning.classList.remove('winning-team')
        homeTeamWinning.classList.remove('winning-team')
    }
}

