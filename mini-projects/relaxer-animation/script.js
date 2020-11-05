const text = document.querySelector('.text');
const container = document.querySelector('.container');

const totalTime = 19000; // 19 sec : 4-7-8
const breathInTime = 4000;
const holdTime = 7000;

const breathCycle = () => {
    console.log('Breath In');
    text.innerText = 'Breath In';
    container.className = 'container grow';

    setTimeout(() => {
        console.log('Hold');
        text.innerText = 'Hold';

        setTimeout(() => {
            console.log('Breath Out');
            text.innerText = 'Breath Out';
            container.className = 'container shrink';
        }, holdTime);
    }, breathInTime);
};

setInterval(breathCycle, totalTime);

breathCycle();
