const data = [
    {
        image: 'img/angry.jpg',
        text: 'I am angry',
    },
    {
        image: 'img/drink.jpg',
        text: 'I am thirsty',
    },
    {
        image: 'img/food.jpg',
        text: 'I am hungry',
    },
    {
        image: 'img/grandma.jpg',
        text: 'I love my grandma',
    },
    {
        image: 'img/happy.jpg',
        text: 'I am happy',
    },
    {
        image: 'img/home.jpg',
        text: 'I am home',
    },
    {
        image: 'img/hurt.jpg',
        text: 'It hurts',
    },
    {
        image: 'img/outside.jpg',
        text: 'I am outside',
    },
    {
        image: 'img/sad.jpg',
        text: 'I am sad',
    },
    {
        image: 'img/scared.jpg',
        text: 'I am scared',
    },
    {
        image: 'img/school.jpg',
        text: 'I am at school',
    },
    {
        image: 'img/tired.jpg',
        text: 'I am tired',
    },
];

// Create image box for <main>
data.forEach(createBox);

function createBox(item) {
    const { image, text } = item;

    const box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = `
        <img src=${image} alt=${text}>
        <p>${text}</p>
    `;

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakVoiceText();

        box.classList.add('effect');
        setTimeout(() => {
            box.classList.remove('effect');
        }, 800);
    });

    document.querySelector('main').appendChild(box);
}

const textBox = document.getElementById('textBox');
const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');
const voiceSelect = document.getElementById('voiceSelect');
const text = document.getElementById('text');
const readBtn = document.getElementById('readBtn');

let voices = [];

// Speech API
const populateVoices = () => {
    if (typeof speechSynthesis === 'undefined') {
        console.log('Speech Synthesis API undefined...');
        return;
    }

    voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} (${voice.lang})`;

        if (voice.default) {
            option.innerText += ' -- default';
        }

        voiceSelect.appendChild(option);
    });
};

const utterThis = new SpeechSynthesisUtterance();
const setTextMessage = (text) => (utterThis.text = text);
const speakVoiceText = () => speechSynthesis.speak(utterThis);

const setVoice = (e) => {
    utterThis.voice = voices.find((voice) => voice.name === e.target.value);
};

// Toggle text box
const showTextBox = () => textBox.classList.add('show');
const closeTextBox = () => textBox.classList.remove('show');

toggleBtn.addEventListener('click', showTextBox);
closeBtn.addEventListener('click', closeTextBox);

// Speech API event listner
populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.addEventListener('voiceschanged', populateVoices);
}

// When a different voice is selected
voiceSelect.addEventListener('change', setVoice);

readBtn.addEventListener('click', (e) => {
    if (text.value) {
        setTextMessage(text.value);
        speakVoiceText();
    } else {
        const message = 'Please enter your text...!';
        setTextMessage(message);
        speakVoiceText();
    }
});
