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

data.forEach(createBox);

function createBox(item) {
    const { image, text } = item;

    const box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = `
        <img src=${image} alt=${text}>
        <p>${text}</p>
    `;
    document.querySelector('main').appendChild(box);
}
