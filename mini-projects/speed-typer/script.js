const input = document.getElementById('input');
const word = document.getElementById('word');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const result = document.getElementById('result');
const settingBtn = document.getElementById('settingBtn');
const settingForm = document.getElementById('settingForm');
const settingContainer = document.getElementById('settingContainer');
const difficultyEl = document.getElementById('difficulty');

let time = 10;
let score = 0;

// Save it to local storage
// so difficulty stays same after reloading
let difficulty =
    localStorage.getItem('difficulty') === null
        ? 'moderate'
        : localStorage.getItem('difficulty');

// Display the difficulty
difficultyEl.value =
    localStorage.getItem('difficulty') === null
        ? 'moderate'
        : localStorage.getItem('difficulty');

const fetchWords = () => {
    const reader = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        reader.open('get', 'data/words_alpha.txt', 'utf-8');
        reader.onload = function () {
            if (this.status === 200) {
                // console.log(reader);
                resolve(this.responseText);
            }
        };
        reader.onerror = function () {
            console.log('Reqest Error!');
            reject(this.statusText);
        };
        reader.send();
    });
};

const wordLists = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving',
];

const renderWord = async () => {
    let data = await fetchWords();
    data = data.split('\n');

    const words = data !== null ? data : wordLists;

    const randIdx = Math.floor(Math.random() * words.length);

    word.innerText = String(words[randIdx]);
    // console.log(randomWord);
};

const addScore = () => {
    score++;
    scoreEl.innerText = score;
};

const gameover = () => {
    result.innerHTML = `
        <h1>Time ran out...</h1>
        <p>Your final score is ${score}</p>
        <button onclick=location.reload()>Reload</button>
    `;

    result.style.display = 'flex';
};

const updateTime = () => {
    time--;
    timeEl.innerText = `${time}s`;

    if (time === 0) {
        clearInterval(timeInterval);
        gameover();
    }
};

const timeInterval = setInterval(updateTime, 1000);

input.focus();

input.addEventListener('input', (e) => {
    const insertedText = e.target.value.trim();
    const renderedText = word.innerText.trim();

    if (insertedText === renderedText) {
        renderWord();
        addScore();

        e.target.value = '';

        if (difficulty === 'easy') {
            time += 7;
        } else if (difficulty === 'moderate') {
            time += 5;
        } else if (difficulty == 'difficulty') {
            time += 3;
        } else {
            time += 2;
        }

        updateTime();
    }
});

settingBtn.addEventListener('click', (e) => {
    settingContainer.classList.toggle('hide');
});

settingForm.addEventListener('change', (e) => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});

renderWord();
