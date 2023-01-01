let homeScore = 0
let guestScore = 0
const homeEl = document.getElementById("home-score")
const guestEl = document.getElementById("guest-score")

const addOneHome = document.getElementById("home-add-one")
const addTwoHome = document.getElementById("home-add-two")
const addThreeHome = document.getElementById("home-add-three")

const addOneGuest = document.getElementById("guest-add-one")
const addTwoGuest = document.getElementById("guest-add-two")
const addThreeGuest = document.getElementById("guest-add-three")

homeEl.textContent = homeScore
guestEl.textContent = guestScore

//HOME
addOneHome.addEventListener("click",()=>{
    homeScore += 1
    homeEl.textContent = homeScore 
})
addTwoHome.addEventListener("click",()=>{
    homeScore += 2
    homeEl.textContent = homeScore 
})
addThreeHome.addEventListener("click",()=>{
    homeScore += 3
    homeEl.textContent = homeScore 
})
// GUEST
addOneGuest.addEventListener("click",()=>{
    guestScore += 1
    guestEl.textContent = guestScore 
})
addTwoGuest.addEventListener("click",()=>{
    guestScore += 2
    guestEl.textContent = guestScore  
})
addThreeGuest.addEventListener("click",()=>{
    guestScore += 3
    guestEl.textContent = guestScore  
})