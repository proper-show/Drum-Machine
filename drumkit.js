document.addEventListener('keydown', (event) => {
    makeSound(event.key)
    getKeydownAnimation(event.key)
})    

document.addEventListener('keyup', (event) => {
    getKeyupAnimation(event.key)
})
    

let padArray = document.getElementsByClassName('pad')
for (pad of padArray) {
    pad.addEventListener('click', clickPad)
}

function clickPad(event) {
    makeSound(event.target.textContent)
}

function getKeydownAnimation(key) {
    document.getElementById(`${key}pad`).classList.remove('pad')
    document.getElementById(`${key}pad`).classList.add('active')
}

function getKeyupAnimation(key) {
    document.getElementById(`${key}pad`).classList.remove('active')
    document.getElementById(`${key}pad`).classList.add('pad')
}
  
function makeSound(key) {
    switch (key) {
        case "1": {
            let kick1 = new Audio('Sounds/Kick1.wav')
            kick1.play()
            break;
        }
        case "2": {
            let kick2 = new Audio('Sounds/Kick2.wav')
            kick2.play()
            break;
        }
        case "3": {
            let tom1 = new Audio('Sounds/Tom1.wav')
            tom1.play()
            break;
        }
        case "4": {
            let tom2 = new Audio('Sounds/Tom2.wav')
            tom2.play()
            break;
        }
        case "5": {
            let snare1 = new Audio ('Sounds/Snare1.wav')
            snare1.play()
            break;
        }
        case "6": {
            let snare2 = new Audio ('Sounds/Snare2.wav')
            snare2.play()
            break;
        }
        case "7": {
            let sideStick = new Audio('Sounds/SideStick.wav')
            sideStick.play()
            break;
        }
        case "8": {
            let hh1 = new Audio('Sounds/HH1.wav')
            hh1.play()
            break;
        }
        case "9": {
            let hh2 = new Audio('Sounds/HH2.wav')
            hh2.play()
            break;
        }
    }
}
