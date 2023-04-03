let firstWorkCards = document.getElementsByClassName('worksCard');
let firstWorkMain = document.getElementById('firstWorkMain');
let firstWorkProfile = document.getElementById('firstWorkProfile');
let firstWorkSettings = document.getElementById('firstWorkSettings');
let firstWorkStatisticsDay = document.getElementById('firstWorkStatisticsDay');
let firstWorkStatisticsWeek = document.getElementById('firstWorkStatisticsWeek');
let firstWorkStatisticsCourse = document.getElementById('firstWorkStatisticsCourse');
let mobilePhoneCard = document.getElementById('mobilePhoneCard');
let mobilePhoneCardCoord = mobilePhoneCard.getBoundingClientRect();
let mobilePhoneScreenShots = ['main.svg', 'profile.svg', 'settings.svg', 'statisticsDay.svg', 'statisticsWeek.svg', 'statisticsCourse.svg'];
let oldZIndex;

for (let i = 0; i < firstWorkCards.length; i++) {
    firstWorkCards[i].onmouseover = function() {
        mobilePhoneCard.style.backgroundImage = `url(${mobilePhoneScreenShots[i]})`;
        for (let j = 0; j < firstWorkCards.length; j++) {
            firstWorkCards[j].style.opacity = '1';
        }
        firstWorkCards[i].style.opacity = '1';
    }
    firstWorkCards[i].onmouseleave = function() {
        for (let j = 0; j < firstWorkCards.length; j++) {
            firstWorkCards[j].style.opacity = '1';
        }
    }
}