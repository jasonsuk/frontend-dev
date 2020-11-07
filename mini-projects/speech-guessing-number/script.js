const msgBox = document.getElementById('msgBox');
const inputEl = document.getElementById('inputEl');
const messageEl = document.getElementById('messageEl');

// Init speechrecognition
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

// Activate speechrecognition
recognition.start();

// Get a random number
const getRandomNumber = () => {
    const randNum = Math.floor(Math.random() * 100 + 1);
    console.log(`Random Number is : ${randNum}`);
    return randNum;
};
const randNum = getRandomNumber();

// Functions
const showMessage = (input) => {
    console.log(input);
    msgBox.innerHTML = `
        <p>You said:</p>
        <div class="input" id="inputEl">${input}</div>
        `;
};

const checkNumber = (input) => {
    // Validate the input
    if (isNaN(input)) {
        msgBox.innerHTML += `            
            <span class="message" id="messageEl">
                It is not a number! <br>Please speak again
            </span>
        `;
        return;
    }

    if (input > 100 || input < 1) {
        msgBox.innerHTML += `
            <span class="message" id="messageEl">
                A number should be between 1 and 100
            </span>
        `;
        return;
    }

    // Check the number

    if (input === randNum) {
        // Overwrite a message
        document.body.innerHTML = `
            <h2>Congratulations! <br><br>You guessed a correct number : 
                <span>${randNum}</span>
            </h2>
            <button class="btn-play-again" id="btn-play-again">Play again</button>
        `;
    } else if (input > randNum) {
        msgBox.innerHTML += `
        <span class="message" id="messageEl">
            Go lower!
        </span>
        `;
    } else {
        msgBox.innerHTML += `
        <span class="message" id="messageEl">
            Go higher!
        </span>
        `;
    }
};

const onSpeak = (e) => {
    const input = e.results[0][0].transcript;

    showMessage(input);
    checkNumber(input);
};

// Event when a speech is input and recognized
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());

// Play again
document.addEventListener('click', (e) => {
    if (e.target.id === 'btn-play-again') {
        window.location.reload();
    }
});
