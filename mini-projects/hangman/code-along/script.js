const figParts = document.querySelectorAll('.figure-part');
const wrongLetterBox = document.getElementById('wrong-letter-box');
const words = document.getElementById('words');
const messageBox = document.getElementById('messageBox');
const message = document.getElementById('message');
const playBtn = document.getElementById('playBtn');
const popup = document.getElementById('popup');

const wordList = ['javascript', 'programming', 'application', 'network', 'security'];
let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];

function showWords() {
   words.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </div>
            `
        )
        .join('')  
    }
    `
    const innerWord = words.innerText.replace(/\n/g, '');
    if(innerWord === selectedWord) {
        message.innerText = 'Congratulations you have won! 🚀'
        messageBox.style.display ='flex';
    } 
}


function showErrorWords() {
    // show wrong-letter-box
    wrongLetterBox.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span> ${letter}</span>`)} `;    

    // show figure
    figParts.forEach((part, index) => {
        const numWrongLetters = wrongLetters.length;
        if(index < numWrongLetters) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    })

    // show message
    if(wrongLetters.length === figParts.length) {
        message.innerText = 'Oh...you have lost 😔'
        messageBox.style.display = 'flex';
    } 
}

function showPopup () {
    popup.classList.add('show');

    // popup to disappear after 3 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

window.addEventListener('keydown', (e) => {
    
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        // console.log(e.key);
        const inputLetter = e.key;
        if(selectedWord.includes(inputLetter)) {
            if (!correctLetters.includes(inputLetter)) {
                correctLetters.push(inputLetter);
                showWords();
            } else {
                showPopup();
            }
        } else {
            if (!wrongLetters.includes(inputLetter)) {
                wrongLetters.push(inputLetter);
                showErrorWords();
            } else {
                showPopup();
            }
        }        
    } 
    
})

playBtn.addEventListener('click', (e) => {

    // Empty correct & wrong letter arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];

    showWords();

    showErrorWords();

    messageBox.style.display = 'none';
});


// Display Words (blanked as default) 
showWords();