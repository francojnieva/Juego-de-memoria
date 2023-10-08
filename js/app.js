let pressedButton = 0
let move = 0
let success = 0

const showMove = document.getElementById('showMove')
const showSuccess = document.getElementById('showSuccess')

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numbers = numbers.sort(() => Math.random() - 0.5)


function showNumber(id) {
    pressedButton++

    if (pressedButton === 1) {
        btn1 = document.getElementById(id) 
        firstResult = numbers[id]  
        btn1.innerHTML = firstResult

        btn1.disabled = true

    } else if (pressedButton === 2) {
        btn2 = document.getElementById(id)
        secondResult = numbers[id]  
        btn2.innerHTML = secondResult  

        btn2.disabled = true

        move++

        showMove.innerHTML = move
        
        if (firstResult === secondResult) {
            pressedButton = 0
            success++

            showSuccess.innerHTML = success

            if (success === 8) {
                alert('FELICIDADES!!!')
                const dataContainer = document.getElementById('data-container')
                const restartButton = document.createElement('button')
                restartButton.classList.add('btn', 'btn-primary')
                restartButton.textContent = 'Reiniciar el juego'

                restartButton.addEventListener('click', () => {
                    window.location.reload()
                })

                dataContainer.appendChild(restartButton);
            }

        }else {
            setTimeout(()=> {
                btn1.innerHTML = ' '
                btn2.innerHTML = ' '
                btn1.disabled = false
                btn2.disabled = false
                pressedButton = 0
            }, 1000)
        }
    }

}
