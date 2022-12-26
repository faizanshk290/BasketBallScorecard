let homeScore = 0
let guestScore = 0
let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
homeEl.textContent = homeScore
guestEl.textContent = guestScore
//HOME
function addOneHome()
{
    homeScore += 1
    homeEl.textContent = homeScore        
}
function addTwoHome()
{
    homeScore += 2
    homeEl.textContent = homeScore        
}
function addThreeHome()
{
    homeScore += 3
    homeEl.textContent = homeScore        
}
// GUEST
function addOneGuest()
{
    guestScore += 1
    guestEl.textContent = guestScore        
}
function addTwoGuest()
{
    guestScore += 2
    guestEl.textContent = guestScore        
}
function addThreeGuest()
{
    guestScore += 3
    guestEl.textContent = guestScore        
}