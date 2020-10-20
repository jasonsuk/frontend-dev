const figures = document.querySelectorAll('.figure-part');
const wrongLetterBox = document.getElementById('wrong-letter-box');
const words = document.getElementById('words');
const messageBox = document.getElementById('messageBox');
const message = document.getElementById('message');
const playBtn = document.getElementById('playBtn');
const popup = document.getElementById('popup');

// Set up
const randomWords = ['programming', 'iphone', 'icecream', 'oriental', 'peninsula', 'korea']
let selectedWord = shuffle(randomWords[Math.floor(Math.random() * randomWords.length)]);
console.log(selectedWord);
const correctLetters = [];
const wrongLetters = [];

// Shuffle array for better randomness
function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// Display words
function displayWords() {
    // <span class="letter"><span>
    words.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => 
                `<div class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </div>`
            )
            .join('')
        }
    `
    // console.log(words.innerHTML);
    const innerText = words.innerText.replace(/\n/g, '');
    if(innerText === selectedWord) {
        messageBox.style.display = 'flex';
        message.innerText = 'Congrats! Your guess is correct! 🚀';
    }

}

// Display wrong letters & figure
function displayWrongLetters() {
    // Show wrong letter box when there is any
    wrongLetterBox.innerHTML = `
        ${wrongLetters.length > 0 ? `<p>Wrong</p>`: ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `
    // Show figures
    const numWrong = wrongLetters.length;

    figures.forEach((part, index) => {
        if(index < numWrong) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    })
    // Show message
    if(numWrong === figures.length) {
        message.innerText = 'Hmmm...you have lost 😭';
        messageBox.style.display = 'flex';
    }
}

// Show pop up when keydown duplicates (same letter)
function showPopup() {
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

// Event Lister - keydown input
window.addEventListener('keydown', (e) => {
    if(e.keyCode >= 65 && e.keyCode <=90) {
        const input = e.key;
        if (selectedWord.includes(input)) {
            if(!correctLetters.includes(input)) {
                correctLetters.push(input);
                displayWords();
            } else {
                showPopup();
            }
        } else {
            if(!wrongLetters.includes(input)) {
                wrongLetters.push(input);
                displayWrongLetters();
            } else {
                showPopup();
            }
        }
    }
})

// Event listener - play again
playBtn.addEventListener('click', (e) => {

    // Empty arrays 
    correctLetters.splice(0);
    wrongLetters.splice(0);

    // Random select a word again
    selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)];

    displayWords();

    displayWrongLetters();
    // console.log(wrongLetters);

    messageBox.style.display = 'none';
})

// Default display
displayWords();