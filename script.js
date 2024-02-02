var keys = document.querySelectorAll(".drum-sound")

document.addEventListener('keydown', function(event){
    var drumPlayed = document.querySelector(`.drum-sound[data-key="${event.keyCode}"]`)
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0
    audio.play()
    drumPlayed.classList.add("played")
})

function styleTransition(){
    event.target.classList.remove("played")
}

keys.forEach(function(key){
    key.addEventListener("transitionend", styleTransition)
})

