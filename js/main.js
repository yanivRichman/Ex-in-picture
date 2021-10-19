'use strict'

var gQuests = [];

var gCurrQuestIdx = 0;

function initGame() {
    createQuests();
    renderQuest();
}


function createQuests() {
    gQuests = [
        { id: 1, opts: ['That pup can run!', 'That bug can run!'], correctOptIndex: 0 },
        { id: 2, opts: ['In rome', 'In paris'], correctOptIndex: 1 },
        { id: 3, opts: ['In Tel aviv', 'In Petah tikva'], correctOptIndex: 0 }
    ]
}


function renderQuest() {
    var strHtml = '';
    strHtml = '<img class src="./img/' + (gCurrQuestIdx + 1) + '.jpg"> <div class ="answer1" onclick=checkAnswer(0)></div> <div class ="answer2" onclick=checkAnswer(1)></div>'

    var elBackGround = document.querySelector('.backGround');
    elBackGround.innerHTML += strHtml;

    var elAnswer1 = document.querySelector('.answer1');
    elAnswer1.innerText = gQuests[gCurrQuestIdx].opts[0];

    var elAnswer2 = document.querySelector('.answer2');
    elAnswer2.innerText = gQuests[gCurrQuestIdx].opts[1];

}

function checkAnswer(optIdx) {
    var correctAns = gQuests[gCurrQuestIdx].correctOptIndex;
    if (optIdx === correctAns) {
        gCurrQuestIdx++;
        if (gCurrQuestIdx === 3) {
            console.log('Well Done');
            var audioFinish = new Audio('sound/applause-8.wav');
            audioFinish.play();
            return
        }
        renderQuest();
    } else {
        var audioWrong = new Audio('sound/Nope-Sound-Effect.mp3');
        audioWrong.play();
    }

}