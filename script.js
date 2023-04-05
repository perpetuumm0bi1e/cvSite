let worksCardFirst = document.getElementsByClassName('worksCardFirst');

let firstWorkMain = document.getElementById('firstWorkMain');
let firstWorkProfile = document.getElementById('firstWorkProfile');
let firstWorkSettings = document.getElementById('firstWorkSettings');
let firstWorkStatisticsDay = document.getElementById('firstWorkStatisticsDay');
let firstWorkStatisticsWeek = document.getElementById('firstWorkStatisticsWeek');
let firstWorkStatisticsCourse = document.getElementById('firstWorkStatisticsCourse');

let mobilePhoneCard = document.getElementById('mobilePhoneCard');
let mobilePhoneCardCoord = mobilePhoneCard.getBoundingClientRect();
let mobilePhoneScreenShots = ['main.svg', 'profile.svg', 'settings.svg', 'statisticsDay.svg', 'statisticsWeek.svg', 'statisticsCourse.svg'];


let kasumiFirstBoxImages = ['kasumiEncryption.svg', 'kasumiDecryption.svg'];
let kasumiSecondBoxImages = ['kasumiAlgorithm.svg', 'kasumiFI.svg', 'kasumiFO.svg', 'kasumiFL.svg'];

let firstKasumiBoxNavigationLeft = document.getElementById('firstKasumiBoxNavigationLeft');
let firstKasumiBoxNavigationRight = document.getElementById('firstKasumiBoxNavigationRight');
let firstKasumiBoxNavigationClickCounter = 0;

let secondKasumiBoxNavigationLeft = document.getElementById('secondKasumiBoxNavigationLeft');
let secondKasumiBoxNavigationRight = document.getElementById('secondKasumiBoxNavigationRight');
let secondKasumiBoxNavigationClickCounter = 0;

let fourthWorkEncryptionDecryption = document.getElementById('fourthWorkEncryptionDecryption');
let fourthWorkAlgorithmImages = document.getElementById('fourthWorkAlgorithmImages');

let interactiveLayoutButton1 = document.getElementById('interactiveLayoutButton1');
let gitButton1 = document.getElementById('gitButton1');
let gitButton2 = document.getElementById('gitButton2');
let gitButton3 = document.getElementById('gitButton3');

for (let i = 0; i < worksCardFirst.length; i++) {
    worksCardFirst[i].onmouseover = function() {
        mobilePhoneCard.style.backgroundImage = `url(${mobilePhoneScreenShots[i]})`;
    }
    worksCardFirst[i].onmouseleave = function() {}

    interactiveLayoutButton1.onclick = function() {
        window.location = "https://www.figma.com/proto/1l01NZ1BpN7Q5N1txMbLT4/PerfectPosture?page-id=0%3A1&node-id=202-344&viewport=-269%2C450%2C0.07&scaling=scale-down&starting-point-node-id=202%3A344";
    }
    gitButton1.onclick = function() {
        window.location = "https://github.com/perpetuumm0bi1e/StudentsKnowledgeControl";
    }
    gitButton2.onclick = function() {
        window.location = "https://github.com/perpetuumm0bi1e/Kasumi";
    }
    gitButton3.onclick = function() {
        window.location = "https://github.com/perpetuumm0bi1e/BasketballFlightModeling";
    }
}
function kasumiBoxImageChanger(clickCounter, imageBox, imagesArray) {
    if(clickCounter < 0){
        imageBox.style.backgroundImage = `url(${imagesArray[imagesArray.length - 1 + (clickCounter % imagesArray.length)]})`;
    } else {
        imageBox.style.backgroundImage = `url(${imagesArray[clickCounter % imagesArray.length]})`;
    }
}
firstKasumiBoxNavigationLeft.onclick = function() {
    firstKasumiBoxNavigationClickCounter--;
    kasumiBoxImageChanger(firstKasumiBoxNavigationClickCounter, fourthWorkEncryptionDecryption, kasumiFirstBoxImages);
}
firstKasumiBoxNavigationRight.onclick = function() {
    firstKasumiBoxNavigationClickCounter++;
    kasumiBoxImageChanger(firstKasumiBoxNavigationClickCounter, fourthWorkEncryptionDecryption, kasumiFirstBoxImages);
}
secondKasumiBoxNavigationLeft.onclick = function() {
    secondKasumiBoxNavigationClickCounter--;
    kasumiBoxImageChanger(secondKasumiBoxNavigationClickCounter, fourthWorkAlgorithmImages, kasumiSecondBoxImages);
}
secondKasumiBoxNavigationRight.onclick = function() {
    secondKasumiBoxNavigationClickCounter++;
    kasumiBoxImageChanger(secondKasumiBoxNavigationClickCounter, fourthWorkAlgorithmImages, kasumiSecondBoxImages);
}