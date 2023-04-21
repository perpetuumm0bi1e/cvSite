function onEntry(element) {
    element.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('appeared');
        }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

let bottomAppearedElements = document.querySelectorAll('.bottom-appearance-animation'),
    leftAppearedElements = document.querySelectorAll('.left-large-appearance-animation'),
    rightAppearedElements = document.querySelectorAll('.right-large-appearance-animation'),
    topAppearedElements = document.querySelectorAll('.top-appearance-animation'),
    topMobileAppearedElements = document.querySelectorAll('.top-mobile-appearance-animation');

for (let element of bottomAppearedElements) {
    observer.observe(element);
}
for (let element of topAppearedElements) {
    observer.observe(element);
}
for (let element of topMobileAppearedElements) {
    if(document.body.clientWidth < 1024) {
        observer.observe(element);
    }
}
for (let element of leftAppearedElements) {
    if(document.body.clientWidth >= 1024) {
        observer.observe(element);
    }
}
for (let element of rightAppearedElements) {
    if(document.body.clientWidth >= 1024) {
        observer.observe(element);
    }
}
let navbar = document.querySelector('.navbar');

let checkboxNavBar = document.querySelector('#checkbox-nav-bar'),
    logoNavBar = document.querySelector('#logo'),
    menuNavBar = document.querySelector('.menu'),
    linksNavBar = document.querySelector('.links'),
    languageGroup1 = document.querySelector('#language-group-1'),
    languageGroup2 = document.querySelector('#language-group-2'),
    mobilePhone = document.querySelector('#mobile-phone'),
    screenshots1 = document.querySelector('#screenshots-1'),
    screenshots2 = document.querySelector('#screenshots-2'),
    largeScreenElements = document.querySelector('.large-screen'),
    firstKasumibox = document.querySelector('#first-kasumi-box'),
    secondKasumibox = document.querySelector('#second-kasumi-box');

let checkboxNavBarCounter = 0;

let linksClone = document.querySelector('#links'),
    menuClone = document.querySelector('#menu'),
    logoClone = logoNavBar;

checkboxNavBar.addEventListener('click', function(){
    checkboxNavBarCounter++;
    (checkboxNavBarCounter % 2 == 1) ? setTimeout(() => logoNavBar.remove(), 200) : setTimeout(() => menuNavBar.parentNode.prepend(logoNavBar), 300);
})

document.addEventListener('DOMContentLoaded', () => {
    const onScrollHeader = () => {
        const header = document.querySelector('.navbar');
        let prevScroll = window.pageYOffset,
            currentScroll;

        window.addEventListener('scroll', () => {
            currentScroll = window.pageYOffset;

            const headerHidden = () => header.classList.contains('navbar_hidden');

            if (currentScroll > prevScroll && !headerHidden() && document.body.clientWidth >= 1024) {
                header.classList.add('navbar_hidden');
            }
            if (currentScroll < prevScroll && headerHidden() && document.body.clientWidth >= 1024) {
                header.classList.remove('navbar_hidden');
            }

            prevScroll = currentScroll;
        })
    }
    onScrollHeader();
});

function windowSetting(){
    let pageAdress = location.pathname;
    if(document.body.clientWidth >= 1024) {
        navbar.style.position = 'sticky';

        menuNavBar.replaceWith(linksClone);

        if (pageAdress.includes('aboutMePage')){

        } else if (pageAdress.includes('worksPage')){
            mobilePhone.parentNode.prepend(screenshots1);
            mobilePhone.parentNode.append(screenshots2);
        }
    } else {
        navbar.style.position = 'relative';
        linksNavBar.replaceWith(menuClone);
        if(document.body.clientWidth < 700){
            if (pageAdress.includes('aboutMePage')){
                
            } else if (pageAdress.includes('worksPage')){
                screenshots1.remove();
                screenshots2.remove();
            }
        }
    }
    if(pageAdress.includes('aboutMePage')){
        languageGroup2.style.width = `${languageGroup1.offsetWidth}px`
    } else if (pageAdress.includes('worksPage')){
        secondKasumibox.style.width =  (firstKasumibox.getBoundingClientRect().top != secondKasumibox.getBoundingClientRect().top) ? `${firstKasumibox.offsetWidth}px` : 'auto';
    }
}
window.onload = function() {
    windowSetting();
}
window.addEventListener('resize', function(event){
    windowSetting();
 });


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
let kasumiFirstBoxImagesSmall = ['https://i.ibb.co/G7vd5KX/kasumi-Encryption-small.png',
    'https://i.ibb.co/pZP4P57/kasumi-Decryption-small.png'
];
let kasumiSecondBoxImagesSmall = ['https://i.ibb.co/dc2WRfm/kasumi-Algorithm-small.png',
    'https://i.ibb.co/Z8yNzR3/kasumi-FI-small.png',
    'https://i.ibb.co/bzs2nnM/kasumi-FO-small.png',
    'https://i.ibb.co/2q9p42x/kasumi-FL-small.png'
];

let proCreditBoxImages = ['./img/proCredit/proCredit1.svg',
    './img/proCredit/proCredit2.svg',
    './img/proCredit/proCredit3.svg',
    './img/proCredit/proCredit4.svg',
    './img/proCredit/proCredit5.svg',
    './img/proCredit/proCredit6.svg',
    './img/proCredit/proCredit7.svg',
    './img/proCredit/proCredit8.svg'
];

let proCreditBoxImagesSmall = ['./img/proCredit/proCredit1-small.png',
    './img/proCredit/proCredit2-small.png',
    './img/proCredit/proCredit3-small.png',
    './img/proCredit/proCredit4-small.png',
    './img/proCredit/proCredit5-small.png',
    './img/proCredit/proCredit6-small.png',
    './img/proCredit/proCredit7-small.png',
    './img/proCredit/proCredit8-small.png'
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

let basketballFlightModelingBoxImagesSmall = ['./img/basketballFlightModeling/basketballFlightModeling1-small.png',
    './img/basketballFlightModeling/basketballFlightModeling2-small.png',
    './img/basketballFlightModeling/basketballFlightModeling3-small.png',
    './img/basketballFlightModeling/basketballFlightModeling4-small.png',
    './img/basketballFlightModeling/basketballFlightModeling5-small.png',
    './img/basketballFlightModeling/basketballFlightModeling6-small.png',
    './img/basketballFlightModeling/basketballFlightModeling7-small.png',
    './img/basketballFlightModeling/basketballFlightModeling8-small.png',
    './img/basketballFlightModeling/basketballFlightModeling9-small.png',
    './img/basketballFlightModeling/basketballFlightModeling10-small.png'
];

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

let studentsKnowledgeControlBoxImagesSmall = ['./img/studentsKnowledgeControl/studentsKnowledgeControl1-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl2-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl3-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl4-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl5-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl6-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl7-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl8-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl9-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl10-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl11-small.png',
    './img/studentsKnowledgeControl/studentsKnowledgeControl12-small.png',
];

let worksCardFirst = document.getElementsByClassName('works-card-first'),
    firstWorkMain = document.getElementById('first-work-main'),
    firstWorkProfile = document.getElementById('first-work-profile'),
    firstWorkSettings = document.getElementById('first-work-settings'),
    firstWorkStatisticsDay = document.getElementById('first-work-statistics-day'),
    firstWorkStatisticsWeek = document.getElementById('first-work-statistics-week'),
    firstWorkStatisticsCourse = document.getElementById('first-work-statistics-course'),
    telegramButtonMain = document.getElementById('telegram-button'),
    mobilePhoneCard = document.getElementById('mobile-phone-card');
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
let basketballFlightModelingBoxNavigationLeft = document.getElementById('basketball-flight-modeling-box-navigation-left');
let basketballFlightModelingBoxNavigationRight = document.getElementById('basketball-flight-modeling-box-navigation-right');
let basketballFlightModelingNavigationClickCounter = 0;

let basketballFlightModelingImage = document.getElementById('basketball-flight-modeling-image');
let studentsKnowledgeControlBoxNavigationLeft = document.getElementById('students-knowledge-control-box-navigation-left');
let studentsKnowledgeControlBoxNavigationRight = document.getElementById('students-knowledge-control-box-navigation-right');
let studentsKnowledgeControlClickCounter = 0;

let studentsKnowledgeControlImage = document.getElementById('students-knowledge-control-image');

let interactiveLayoutButton1 = document.getElementById('interactive-layout-button-1'),
    gitButton1 = document.getElementById('git-button-1'),
    gitButton2 = document.getElementById('git-button-2'),
    gitButton3 = document.getElementById('git-button-3'),
    gitButton4 = document.getElementById('git-button-4');


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

function boxImageChanger(clickCounter, imageBox, imagesArray, smallImagesArray) {
    imageBox.style.backgroundImage = (clickCounter < 0) ? 
    ((document.body.clientWidth >= 1024) ? `url(${imagesArray[imagesArray.length - 1 + (clickCounter % imagesArray.length)]})` :  `url(${smallImagesArray[smallImagesArray.length - 1 + (clickCounter % smallImagesArray.length)]})`) : 
    ((document.body.clientWidth >= 1024) ? `url(${imagesArray[clickCounter % smallImagesArray.length]})` : `url(${smallImagesArray[clickCounter % smallImagesArray.length]})`);
   
}

firstKasumiBoxNavigationLeft.onclick = function() {
    firstKasumiBoxNavigationClickCounter--;
    boxImageChanger(firstKasumiBoxNavigationClickCounter, fourthWorkEncryptionDecryption, kasumiFirstBoxImages, kasumiFirstBoxImagesSmall);
}
firstKasumiBoxNavigationRight.onclick = function() {
    firstKasumiBoxNavigationClickCounter++;
    boxImageChanger(firstKasumiBoxNavigationClickCounter, fourthWorkEncryptionDecryption, kasumiFirstBoxImages, kasumiFirstBoxImagesSmall);
}
secondKasumiBoxNavigationLeft.onclick = function() {
    secondKasumiBoxNavigationClickCounter--;
    boxImageChanger(secondKasumiBoxNavigationClickCounter, fourthWorkAlgorithmImages, kasumiSecondBoxImages, kasumiSecondBoxImagesSmall);
}
secondKasumiBoxNavigationRight.onclick = function() {
    secondKasumiBoxNavigationClickCounter++;
    boxImageChanger(secondKasumiBoxNavigationClickCounter, fourthWorkAlgorithmImages, kasumiSecondBoxImages, kasumiSecondBoxImagesSmall);
}
basketballFlightModelingBoxNavigationLeft.onclick = function() {
    basketballFlightModelingNavigationClickCounter--;
    boxImageChanger(basketballFlightModelingNavigationClickCounter, basketballFlightModelingImage, basketballFlightModelingBoxImages, basketballFlightModelingBoxImagesSmall);
}
basketballFlightModelingBoxNavigationRight.onclick = function() {
    basketballFlightModelingNavigationClickCounter++;
    boxImageChanger(basketballFlightModelingNavigationClickCounter, basketballFlightModelingImage, basketballFlightModelingBoxImages, basketballFlightModelingBoxImagesSmall);
}
studentsKnowledgeControlBoxNavigationLeft.onclick = function() {
    studentsKnowledgeControlClickCounter--;
    boxImageChanger(studentsKnowledgeControlClickCounter, studentsKnowledgeControlImage, studentsKnowledgeControlBoxImages, studentsKnowledgeControlBoxImagesSmall);
}
studentsKnowledgeControlBoxNavigationRight.onclick = function() {
    studentsKnowledgeControlClickCounter++;
    boxImageChanger(studentsKnowledgeControlClickCounter, studentsKnowledgeControlImage, studentsKnowledgeControlBoxImages, studentsKnowledgeControlBoxImagesSmall);
}
proCreditBoxNavigationLeft.onclick = function() {
    proCreditBoxNavigationClickCounter--;
    boxImageChanger(proCreditBoxNavigationClickCounter, proCreditImage, proCreditBoxImages, proCreditBoxImagesSmall);
}
proCreditBoxNavigationRight.onclick = function() {
    proCreditBoxNavigationClickCounter++;
    boxImageChanger(proCreditBoxNavigationClickCounter, proCreditImage, proCreditBoxImages, proCreditBoxImagesSmall);
}
let telegramButton = document.getElementById('telegram'),
    instagramButton = document.getElementById('instagram'),
    githubButton = document.getElementById('github');

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