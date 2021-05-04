const win = new Audio('win.mp3')
const lost = new Audio('aww.mp3')
const tie = new Audio('Witch_Laugh.mp3')

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const plays = ['rock.png', 'paper.png', 'scissors.webp'];
    let number = Math.floor(Math.random() * plays.length);
    const play = plays[number]
    let img = document.querySelector('.return');
    img.innerHTML = `<img src="${play}" width="150px" height="150px">`;

    let content;
    let element = document.createElement('h1')
    if (number === 0) {
		tie.play()
        content = document.createTextNode('Tie!');
        element.appendChild(content);
        img.appendChild(element).style.color = 'gold';
    }

    if (number === 1) {
        lost.play()
        content = document.createTextNode('You Lose!');
        element.appendChild(content);
        img.appendChild(element).style.color = 'red';
    }

    if (number === 2) {
        win.play()
        content = document.createTextNode('You Win!');
        element.appendChild(content);
        img.appendChild(element).style.color = 'blue';
    }
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const plays = ['rock.png', 'paper.png', 'scissors.webp'];
    let number = Math.floor(Math.random() * plays.length);
    const play = plays[number]
    let img = document.querySelector('.return');
    img.innerHTML = `<img src="${play}" width="150px" height="150px">`;

    let content;
    let element = document.createElement('h1')
    if (number === 0) {
        win.play()
        content = document.createTextNode('You Win!');
        element.appendChild(content);
        img.appendChild(element).style.color = 'blue';
    }

    if (number === 1) {
        content = document.createTextNode('Tie!');
        element.appendChild(content);
        img.appendChild(element).style.color = 'gold';
    }

    if (number === 2) {
        lost.play()
        content = document.createTextNode('You Lose!');
        element.appendChild(content);
        img.appendChild(element).style.color = 'red';
    }
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const plays = ['rock.png', 'paper.png', 'scissors.webp'];
    let number = Math.floor(Math.random() * plays.length);
    const play = plays[number]
    let img = document.querySelector('.return');
    img.innerHTML = `<img src="${play}" width="150px" height="150px">`;

    let content;
    let element = document.createElement('h1')
    if (number === 0) {
        lost.play()
        content = document.createTextNode('You Lose!');
        element.appendChild(content);
        img.appendChild(element).style.color = 'red';
    }

    if (number === 1) {
        win.play()
        content = document.createTextNode('You Win!');
        element.appendChild(content);
        img.appendChild(element).style.color = 'blue';
    }

    if (number === 2) {
        content = document.createTextNode('Tie!');
        element.appendChild(content);
        img.appendChild(element).style.color = 'gold';
    }
})