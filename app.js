
const summary = document.getElementById('summary');

const jsonUrl = './data.json';


const makeSummaryBars = (data) => {
    data.forEach((el) => {
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('block')
        containerDiv.classList.add(el.category);
        const titleDiv = document.createElement('Div')
        titleDiv.classList.add('title');
        const icon = document.createElement('IMG');
        icon.src = el.icon;
        titleDiv.append(icon);
        const titleText = document.createElement('p');
        titleText.innerText = el.category;
        titleDiv.append(titleText);
        containerDiv.append(titleDiv);
        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('score');
        const scoreText = document.createElement('p');
        scoreText.innerText = el.score;
        scoreDiv.append(scoreText);
        const totalSpan = document.createElement('span')
        totalSpan.classList.add('total');
        totalSpan.innerText = ' / 100';
        scoreDiv.append(totalSpan);
        containerDiv.append(scoreDiv);
        summary.append(containerDiv);
    })
}

function getData() {
    fetch(jsonUrl)
        .then(res => res.json())
        .then(data => makeSummaryBars(data))

}
getData(); 
