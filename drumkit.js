document.addEventListener('keydown', (event) => {
    makeSound(event.key)

    if(event.key == "1") {
        document.getElementById('1pad').classList.remove('pad')
        document.getElementById('1pad').classList.add('active')
    }
    if(event.key == "2") {
        document.getElementById('2pad').classList.remove('pad')
        document.getElementById('2pad').classList.add('active')
    }
    if(event.key == "3") {
        document.getElementById('3pad').classList.remove('pad')
        document.getElementById('3pad').classList.add('active')
    }
    if(event.key == "4") {
        document.getElementById('4pad').classList.remove('pad')
        document.getElementById('4pad').classList.add('active')
    }
    if(event.key == "5") {
        document.getElementById('5pad').classList.remove('pad')
        document.getElementById('5pad').classList.add('active')
    }
    if(event.key == "6") {
        document.getElementById('6pad').classList.remove('pad')
        document.getElementById('6pad').classList.add('active')
    }
    if(event.key == "7") {
        document.getElementById('7pad').classList.remove('pad')
        document.getElementById('7pad').classList.add('active')
    }
    if(event.key == "8") {
        document.getElementById('8pad').classList.remove('pad')
        document.getElementById('8pad').classList.add('active')
    }
    if(event.key == "9") {
        document.getElementById('9pad').classList.remove('pad')
        document.getElementById('9pad').classList.add('active')
    }
    
    
})

document.addEventListener('keyup', (event) => {
    if (event.key == "1") {
        document.getElementById('1pad').classList.remove('active')
        document.getElementById('1pad').classList.add('pad')
    } if (event.key == "2") {
        document.getElementById('2pad').classList.remove('active')
        document.getElementById('2pad').classList.add('pad')
    }
    if (event.key == "3") {
        document.getElementById('3pad').classList.remove('active')
        document.getElementById('3pad').classList.add('pad')
    }
    if (event.key == "4") {
        document.getElementById('4pad').classList.remove('active')
        document.getElementById('4pad').classList.add('pad')
    }
    if (event.key == "5") {
        document.getElementById('5pad').classList.remove('active')
        document.getElementById('5pad').classList.add('pad')
    }
    if (event.key == "6") {
        document.getElementById('6pad').classList.remove('active')
        document.getElementById('6pad').classList.add('pad')
    }
    if (event.key == "7") {
        document.getElementById('7pad').classList.remove('active')
        document.getElementById('7pad').classList.add('pad')
    }
    if (event.key == "8") {
        document.getElementById('8pad').classList.remove('active')
        document.getElementById('8pad').classList.add('pad')
    }
    if (event.key == "9") {
        document.getElementById('9pad').classList.remove('active')
        document.getElementById('9pad').classList.add('pad')
    }
})



let padArray = document.getElementsByClassName('pad')
for (pad of padArray) {
    pad.addEventListener('click', clickPad)
}

function clickPad(event) {
    makeSound(event.target.textContent)
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