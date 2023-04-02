let firstWorkCards = document.getElementsByClassName('worksCard');
let firstWorkMain = document.getElementById('firstWorkMain');
let firstWorkProfile = document.getElementById('firstWorkProfile');
let firstWorkSettings = document.getElementById('firstWorkSettings');
let firstWorkStatisticsDay = document.getElementById('firstWorkStatisticsDay');
let firstWorkStatisticsWeek = document.getElementById('firstWorkStatisticsWeek');
let firstWorkStatisticsCourse = document.getElementById('firstWorkStatisticsCourse');

for(let i = 0; i < firstWorkCards.length; i++){
    firstWorkCards[i].onmouseover  = function() {
        for(let j = i; j < firstWorkCards.length; j++){
            firstWorkCards[j].style.transform = 'rotate(5deg)';
            firstWorkCards[j].style.opacity = '.4';
            firstWorkCards[j].style.zIndex = '0';
        }
        for(let j = 0; j < i; j++){
            firstWorkCards[j].style.transform = 'rotate(-5deg)';
            firstWorkCards[j].style.opacity = '.4';
            firstWorkCards[j].style.zIndex = '0';
        }
        firstWorkCards[i].style.transform = 'scale(1.5)';
        firstWorkCards[i].style.opacity = '1';
        firstWorkCards[i].style.zIndex = '2';
    }
    firstWorkCards[i].onmouseleave  = function() {
        for(let j = 0; j < firstWorkCards.length; j++){
            firstWorkCards[j].style.transform = 'rotate(0deg)';
            firstWorkCards[j].style.transform = 'scale(1)';
            firstWorkCards[j].style.opacity = '1';
            firstWorkCards[j].style.zIndex = '0';
        }
    }
}
