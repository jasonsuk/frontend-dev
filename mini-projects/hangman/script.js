const figParts = document.querySelectorAll('.figure-part');
const wrongLetterBox = document.getElementById('wrong-letter-box');
const words = document.getElementById('words');
const message = document.getElementById('message');
const playBtn = document.getElementById('playBtn');
const popup = document.getElementById('popup');

const wordList = ['javascript', 'programming', 'application', 'network', 'security'];
const selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(selectedWord);

const correctLetters = ['a','e','o','i','u'];
const wrongLetters = [];
