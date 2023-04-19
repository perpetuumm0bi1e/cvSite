function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('appeared');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let bottomAppearedElements = document.querySelectorAll('.bottom-appearance-animation'),
    leftAppearedElements = document.querySelectorAll('.left-appearance-animation'),
    rightAppearedElements = document.querySelectorAll('.right-appearance-animation');
for (let elm of bottomAppearedElements) {
    observer.observe(elm);
}for (let elm of leftAppearedElements) {
    observer.observe(elm);
}for (let elm of rightAppearedElements) {
    observer.observe(elm);
}
document.addEventListener('DOMContentLoaded', () => {
    const onScrollHeader = () => {
        const header = document.querySelector('.header');
        let prevScroll = window.pageYOffset;
        let currentScroll;

        window.addEventListener('scroll', () => {
            currentScroll = window.pageYOffset;

            const headerHidden = () => header.classList.contains('header_hidden');

            if (currentScroll > prevScroll && !headerHidden()) {
                header.classList.add('header_hidden');
            }
            if (currentScroll < prevScroll && headerHidden()) {
                header.classList.remove('header_hidden');
            }

            prevScroll = currentScroll;
        })
    }
    onScrollHeader();
});

let worksCardFirst = document.getElementsByClassName('works-card-first');

let firstWorkMain = document.getElementById('first-work-main');
let firstWorkProfile = document.getElementById('first-work-profile');
let firstWorkSettings = document.getElementById('first-work-settings');
let firstWorkStatisticsDay = document.getElementById('first-work-statistics-day');
let firstWorkStatisticsWeek = document.getElementById('first-work-statistics-week');
let firstWorkStatisticsCourse = document.getElementById('first-work-statistics-course');
let telegramButtonMain = document.getElementById('telegram-button');
let mobilePhoneCard = document.getElementById('mobile-phone-card');
let mobilePhoneCardCoord = mobilePhoneCard.getBoundingClientRect();
let mobilePhoneScreenShots = ['./img/perfectPosture/main.svg',
    './img/perfectPosture/profile.svg',
    './img/perfectPosture/settings.svg',
    './img/perfectPosture/statisticsDay.svg',
    './img/perfectPosture/statisticsWeek.svg',
    './img/perfectPosture/statisticsCourse.svg'
];

let kasumiFirstBoxImages = ['./img/kasumi/kasumiEncryption.svg',
    './img/kasumi/kasumiDecryption.svg'
];
let kasumiSecondBoxImages = ['./img/kasumi/kasumiAlgorithm.svg',
    './img/kasumi/kasumiFI.svg',
    './img/kasumi/kasumiFO.svg',
    './img/kasumi/kasumiFL.svg'
];

let firstKasumiBoxNavigationLeft = document.getElementById('first-kasumi-box-navigation-left');
let firstKasumiBoxNavigationRight = document.getElementById('first-kasumi-box-navigation-right');
let firstKasumiBoxNavigationClickCounter = 0;

let secondKasumiBoxNavigationLeft = document.getElementById('second-kasumi-box-navigation-left');
let secondKasumiBoxNavigationRight = document.getElementById('second-kasumi-box-navigation-right');
let secondKasumiBoxNavigationClickCounter = 0;

let fourthWorkEncryptionDecryption = document.getElementById('kasumi-encryption-decryption-image');
let fourthWorkAlgorithmImages = document.getElementById('kasumi-algorithm-image');

let proCreditBoxNavigationLeft = document.getElementById('pro-credit-box-navigation-left');
let proCreditBoxNavigationRight = document.getElementById('pro-credit-box-navigation-right');
let proCreditBoxNavigationClickCounter = 0;

let proCreditImage = document.getElementById('pro-credit-image');

let proCreditBoxImages = ['./img/proCredit/proCredit1.svg',
    './img/proCredit/proCredit2.svg',
    './img/proCredit/proCredit3.svg',
    './img/proCredit/proCredit4.svg',
    './img/proCredit/proCredit5.svg',
    './img/proCredit/proCredit6.svg',
    './img/proCredit/proCredit7.svg',
    './img/proCredit/proCredit8.svg'
];

let basketballFlightModelingBoxImages = ['./img/basketballFlightModeling/basketballFlightModeling1.svg',
    './img/basketballFlightModeling/basketballFlightModeling2.svg',
    './img/basketballFlightModeling/basketballFlightModeling3.svg',
    './img/basketballFlightModeling/basketballFlightModeling4.svg',
    './img/basketballFlightModeling/basketballFlightModeling5.svg',
    './img/basketballFlightModeling/basketballFlightModeling6.svg',
    './img/basketballFlightModeling/basketballFlightModeling7.svg',
    './img/basketballFlightModeling/basketballFlightModeling8.svg',
    './img/basketballFlightModeling/basketballFlightModeling9.svg',
    './img/basketballFlightModeling/basketballFlightModeling10.svg'
];

let basketballFlightModelingBoxNavigationLeft = document.getElementById('basketball-flight-modeling-box-navigation-left');
let basketballFlightModelingBoxNavigationRight = document.getElementById('basketball-flight-modeling-box-navigation-right');
let basketballFlightModelingNavigationClickCounter = 0;

let basketballFlightModelingImage = document.getElementById('basketball-flight-modeling-image');

let studentsKnowledgeControlBoxImages = ['./img/studentsKnowledgeControl/studentsKnowledgeControl1.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl2.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl3.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl4.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl5.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl6.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl7.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl8.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl9.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl10.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl11.svg',
    './img/studentsKnowledgeControl/studentsKnowledgeControl12.svg',
];

let studentsKnowledgeControlBoxNavigationLeft = document.getElementById('students-knowledge-control-box-navigation-left');
let studentsKnowledgeControlBoxNavigationRight = document.getElementById('students-knowledge-control-box-navigation-right');
let studentsKnowledgeControlClickCounter = 0;

let studentsKnowledgeControlImage = document.getElementById('students-knowledge-control-image');

let interactiveLayoutButton1 = document.getElementById('interactive-layout-button-1');
let gitButton1 = document.getElementById('git-button-1');
let gitButton2 = document.getElementById('git-button-2');
let gitButton3 = document.getElementById('git-button-3');
let gitButton4 = document.getElementById('git-button-4');


for (let i = 0; i < worksCardFirst.length; i++) {
    worksCardFirst[i].onmouseover = function() {
        mobilePhoneCard.style.backgroundImage = `url(${mobilePhoneScreenShots[i]})`;
    }
    worksCardFirst[i].onmouseleave = function() {}
}
interactiveLayoutButton1.onclick = function() {
    window.location = "https://www.figma.com/proto/1l01NZ1BpN7Q5N1txMbLT4/PerfectPosture?page-id=0%3A1&node-id=202-344&viewport=-269%2C450%2C0.07&scaling=scale-down&starting-point-node-id=202%3A344";
}
gitButton1.onclick = function() {
    window.location = "https://github.com/perpetuumm0bi1e/StudentsKnowledgeControl";
}
gitButton2.onclick = function() {
    window.location = "https://github.com/perpetuumm0bi1e/ProCredit";
}
gitButton3.onclick = function() {
    window.location = "https://github.com/perpetuumm0bi1e/Kasumi";
}
gitButton4.onclick = function() {
    window.location = "https://github.com/perpetuumm0bi1e/BasketballFlightModeling";
}

function boxImageChanger(clickCounter, imageBox, imagesArray) {
    if (clickCounter < 0) {
        imageBox.style.backgroundImage = `url(${imagesArray[imagesArray.length - 1 + (clickCounter % imagesArray.length)]})`;
    } else {
        imageBox.style.backgroundImage = `url(${imagesArray[clickCounter % imagesArray.length]})`;
    }
}
firstKasumiBoxNavigationLeft.onclick = function() {
    firstKasumiBoxNavigationClickCounter--;
    boxImageChanger(firstKasumiBoxNavigationClickCounter, fourthWorkEncryptionDecryption, kasumiFirstBoxImages);
}
firstKasumiBoxNavigationRight.onclick = function() {
    firstKasumiBoxNavigationClickCounter++;
    boxImageChanger(firstKasumiBoxNavigationClickCounter, fourthWorkEncryptionDecryption, kasumiFirstBoxImages);
}
secondKasumiBoxNavigationLeft.onclick = function() {
    secondKasumiBoxNavigationClickCounter--;
    boxImageChanger(secondKasumiBoxNavigationClickCounter, fourthWorkAlgorithmImages, kasumiSecondBoxImages);
}
secondKasumiBoxNavigationRight.onclick = function() {
    secondKasumiBoxNavigationClickCounter++;
    boxImageChanger(secondKasumiBoxNavigationClickCounter, fourthWorkAlgorithmImages, kasumiSecondBoxImages);
}
basketballFlightModelingBoxNavigationLeft.onclick = function() {
    basketballFlightModelingNavigationClickCounter--;
    boxImageChanger(basketballFlightModelingNavigationClickCounter, basketballFlightModelingImage, basketballFlightModelingBoxImages);
}
basketballFlightModelingBoxNavigationRight.onclick = function() {
    basketballFlightModelingNavigationClickCounter++;
    boxImageChanger(basketballFlightModelingNavigationClickCounter, basketballFlightModelingImage, basketballFlightModelingBoxImages);
}
studentsKnowledgeControlBoxNavigationLeft.onclick = function() {
    studentsKnowledgeControlClickCounter--;
    boxImageChanger(studentsKnowledgeControlClickCounter, studentsKnowledgeControlImage, studentsKnowledgeControlBoxImages);
}
studentsKnowledgeControlBoxNavigationRight.onclick = function() {
    studentsKnowledgeControlClickCounter++;
    boxImageChanger(studentsKnowledgeControlClickCounter, studentsKnowledgeControlImage, studentsKnowledgeControlBoxImages);
}
proCreditBoxNavigationLeft.onclick = function() {
    proCreditBoxNavigationClickCounter--;
    boxImageChanger(proCreditBoxNavigationClickCounter, proCreditImage, proCreditBoxImages);
}
proCreditBoxNavigationRight.onclick = function() {
    proCreditBoxNavigationClickCounter++;
    boxImageChanger(proCreditBoxNavigationClickCounter, proCreditImage, proCreditBoxImages);
}
let telegramButton = document.getElementById('telegram');
let instagramButton = document.getElementById('instagram');
let githubButton = document.getElementById('github');
telegramButtonMain.onclick = function() {
    window.location = "https://t.me/perpetuumm0bi1e";
}
telegramButton.onclick = function() {
    window.location = "https://t.me/perpetuumm0bi1e";
}
instagramButton.onclick = function() {
    window.location = "https://instagram.com/perpetuumm0bi1e";
}
githubButton.onclick = function() {
    window.location = "https://github.com/perpetuumm0bi1e";
}