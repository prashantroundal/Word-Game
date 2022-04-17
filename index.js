
document.getElementById("wordInput").value = "";
let correct = document.getElementById("correctSection");
let wrong = document.getElementById("WrongSection");
let words = ["Laptop", "Hello", "Website", "Hero", "Free", "Google", "essay", "analytic", "interpretative", "critical", "literary", "composition", "usually", "shorter", "systematic", "formal", "dissertation", "thesis", "subject", "limited", "personal"];
let colors = ["#f1bfff", "#b8b5ff", "#fe7e6d", "#fed1ef", "#ddeef2"]
let newWord = "";
let correctCount = 0;
let wrongCount = 0;
let correctCounter = document.getElementById("correct");
let wrongCounter = document.getElementById("wrong");
getWord();


function getWord() {
    document.getElementById('newWord').style.top = "0px";
    let word = words[Math.floor(Math.random() * words.length)];
    newWord = document.getElementById("newWord").innerText = word;

    let color = colors[Math.floor(Math.random() * colors.length)];
    newcolor = document.getElementById("newWord").style.backgroundColor = color;
    
    let topCount = 0;
    animateMe();
    function animateMe() {
        if (topCount == 364) {
            return;
        }
        const element = document.getElementById('newWord');

        element.style.top = `${topCount}px`;
        topCount++;
        requestAnimationFrame(animateMe);
        return;
    }
}


function check() {

    let enteredWord = document.getElementById("wordInput").value;

    if (enteredWord == newWord) {
        correct.innerHTML += `<span class="word">${newWord}</span>`;
        correctCount++;
        incCorrect();
    }
    else {
        wrong.innerHTML += `<span class="word">${enteredWord}</span>`;
        wrongCount++;
        incWrong();
    }
    document.getElementById("wordInput").value = "";
    getWord();
}

function incCorrect(){
    correctCounter.innerText = correctCount;
}

function incWrong(){
    wrongCounter.innerText = wrongCount;
}