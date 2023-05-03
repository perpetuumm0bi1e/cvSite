function onEntry(element) {
    element.forEach(change => {
        if (change.isIntersecting) {
            (document.body.clientWidth < 1024) ? change.target.classList.add('appeared'): change.target.classList.add('large-appeared');
        }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

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

let navbar = document.querySelector('.navbar'),
    checkboxNavBar = document.getElementById('checkbox-nav-bar'),
    logoNavBar = document.getElementById('logo'),
    menuNavBar = document.querySelector('.menu'),
    linksNavBar = document.querySelector('.links'),
    languageGroup1 = document.getElementById('language-group-1'),
    languageGroup2 = document.getElementById('language-group-2'),
    mobilePhone = document.getElementById('mobile-phone'),
    mobilePhoneCard = document.getElementById('mobile-phone-card'),
    mobilePhoneCardNav = document.querySelector('.mobile-nav'),
    screenshots1 = document.getElementById('screenshots-1'),
    screenshots2 = document.getElementById('screenshots-2'),
    kasumiBox1 = document.getElementById('first-kasumi-box'),
    kasumiBox2 = document.getElementById('second-kasumi-box'),
    linksClone = document.getElementById('links'),
    menuClone = document.getElementById('menu'),
    logoClone = logoNavBar;

let checkboxNavBarCounter = 0;

checkboxNavBar.addEventListener('click', function() {
    checkboxNavBarCounter++;
    (checkboxNavBarCounter % 2 == 1) ? setTimeout(() => logoNavBar.remove(), 200):
        setTimeout(() => menuNavBar.parentNode.prepend(logoNavBar), 300);
})

function windowSetting() {
    if (location.pathname.includes('about')) {
        languageGroup2.style.width = `${languageGroup1.offsetWidth}px`
    } else if (location.pathname.includes('projects')) {
        let kasumiBox1Position = kasumiBox1.getBoundingClientRect(),
            kasumiBox2Position = kasumiBox2.getBoundingClientRect(),
            proCreditImage = document.getElementById('pro-credit-image'),
            studentsImage = document.getElementById('students-image'),
            basketballImage = document.getElementById('basketball-image'),
            kasumi1Image = document.getElementById('kasumi-encryption-decryption-image'),
            kasumi2Image = document.getElementById('kasumi-algorithm-image'),
            markVideo = document.getElementById('mark-video');

        proCreditImage.style.height = `${proCreditImage.offsetWidth * 0.626}px`;
        studentsImage.style.height = `${studentsImage.offsetWidth * 0.727}px`;
        basketballImage.style.height = `${basketballImage.offsetWidth * 0.63}px`;
        kasumi1Image.style.height = `${kasumi1Image.offsetWidth * 0.89}px`;
;        kasumi2Image.style.height = `${kasumi2Image.offsetWidth * 1.25}px`;
        markVideo.style.height = `${markVideo.offsetWidth * 0.58}px`;


        kasumiBox2.style.width = (kasumiBox1Position.top > kasumiBox2Position.top) ? `${kasumiBox1.offsetWidth}px` : 'auto';
    }

    if (document.body.clientWidth >= 1024) {
        navbar.style.position = 'sticky';
        menuNavBar.replaceWith(linksClone);

        if (location.pathname.includes('projects')) {
            mobilePhoneCardNav.remove();
            mobilePhone.parentNode.prepend(screenshots1);
            mobilePhone.parentNode.append(screenshots2);
        }
    } else {
        navbar.style.position = 'relative';
        linksNavBar.replaceWith(menuClone);

        if (document.body.clientWidth < 700) {
            if (location.pathname.includes('projects')) {
                mobilePhoneCard.parentNode.append(mobilePhoneCardNav);
                screenshots1.remove();
                screenshots2.remove();
            }
        }
    }
}
window.onload = function() {
    windowSetting();

    let bottomAppearedElements = document.querySelectorAll('.bottom-appearance'),
        bottomMobileAppearedElements = document.querySelectorAll('.bottom-mobile-appearance'),
        topAppearedElements = document.querySelectorAll('.top-appearance'),
        topMobileAppearedElements = document.querySelectorAll('.top-mobile-appearance'),
        leftAppearedElements = document.querySelectorAll('.left-large-appearance'),
        rightAppearedElements = document.querySelectorAll('.right-large-appearance');

    for (let element of bottomAppearedElements) {
        observer.observe(element);
    }

    for (let element of bottomMobileAppearedElements) {
        observer.observe(element);
    }

    for (let element of topAppearedElements) {
        observer.observe(element);
    }

    for (let element of topMobileAppearedElements) {
        observer.observe(element);
    }

    for (let element of rightAppearedElements) {
        observer.observe(element);
    }

    for (let element of leftAppearedElements) {
        observer.observe(element);
    }

    if (location.pathname.includes('index') || location.pathname.split('').pop() == '/') {
        document.getElementById('telegram-button').onclick = function() {
            window.location.href = "https://t.me/perpetuumm0bi1e";
        }
    } else if (location.pathname.includes('projects')) {

        let mobilePhoneImages = ['./img/perfectPosture/main.svg',
            './img/perfectPosture/profile.svg',
            './img/perfectPosture/settings.svg',
            './img/perfectPosture/statisticsDay.svg',
            './img/perfectPosture/statisticsWeek.svg',
            './img/perfectPosture/statisticsCourse.svg'
        ];

        let kasumiImages1 = ['https://i.ibb.co/C5PHd54/kasumi-Encryption.jpg',
            'https://i.ibb.co/njcKYJq/kasumi-Decryption.jpg'
        ];

        let kasumiImages2 = ['https://i.ibb.co/Bnrztbz/kasumi-Algorithm.jpg',
            'https://i.ibb.co/gt20RP4/kasumiFI.jpg',
            'https://i.ibb.co/cC00qZ2/kasumiFO.jpg',
            'https://i.ibb.co/q5r8PXn/kasumiFL.jpg'
        ];

        let kasumiImages1Small = ['https://i.ibb.co/rFMpjmq/kasumi-Encryption-small.jpg',
            'https://i.ibb.co/1bWVNFL/kasumi-Decryption-small.png'
        ];

        let kasumiImages2Small = ['https://i.ibb.co/JQ12ybH/kasumi-Algorithm-small.jpg',
            'https://i.ibb.co/yY6qGDj/kasumi-FI-small.jpg',
            'https://i.ibb.co/r58YBVT/kasumi-FO-small.jpg',
            'https://i.ibb.co/rQYmpmj/kasumi-FL-small.jpg'
        ];

        let proCreditImages = ['https://i.ibb.co/dfpgPhb/pro-Credit1.jpg',
            'https://i.ibb.co/2F92zFb/pro-Credit2.jpg',
            'https://i.ibb.co/XFNQZLN/pro-Credit3.jpg',
            'https://i.ibb.co/HXn2Xw0/pro-Credit4.jpg',
            'https://i.ibb.co/89Xg6TC/pro-Credit5.jpg',
            'https://i.ibb.co/LrJtPHY/pro-Credit6.jpg',
            'https://i.ibb.co/mqsNCmw/pro-Credit7.jpg',
            'https://i.ibb.co/ct33vrS/pro-Credit8.jpg'
        ];

        let proCreditImagesSmall = ['https://i.ibb.co/khp66W5/pro-Credit1-small.jpg',
            'https://i.ibb.co/1JFZ0yM/pro-Credit2-small.jpg',
            'https://i.ibb.co/ZTyXV01/pro-Credit3-small.jpg',
            'https://i.ibb.co/M2cmp03/pro-Credit4-small.jpg',
            'https://i.ibb.co/4Ym7NBx/pro-Credit5-small.jpg',
            'https://i.ibb.co/r66XpF7/pro-Credit6-small.jpg',
            'https://i.ibb.co/6sRp0b4/pro-Credit7-small.jpg',
            'https://i.ibb.co/zQ4XZrj/pro-Credit8-small.jpg'
        ];

        let basketballImages = ['https://i.ibb.co/BjfZZLs/basketball-Flight-Modeling1.jpg',
            'https://i.ibb.co/4mgg66T/basketball-Flight-Modeling2.jpg',
            'https://i.ibb.co/N1s2JRb/basketball-Flight-Modeling3.jpg',
            'https://i.ibb.co/TLvHZxT/basketball-Flight-Modeling4.jpg',
            'https://i.ibb.co/r3DVr7F/basketball-Flight-Modeling5.jpg',
            'https://i.ibb.co/0MtwPQz/basketball-Flight-Modeling6.jpg',
            'https://i.ibb.co/cy6dFs5/basketball-Flight-Modeling7.jpg',
            'https://i.ibb.co/fqNpjpV/basketball-Flight-Modeling8.jpg',
            'https://i.ibb.co/5MWJjXZ/basketball-Flight-Modeling9.jpg',
            'https://i.ibb.co/P1qvzzR/basketball-Flight-Modeling10.jpg'
        ];

        let basketballImagesSmall = ['https://i.ibb.co/hVvGs7z/basketball-Flight-Modeling1-small.jpg',
            'https://i.ibb.co/1Z99hCh/basketball-Flight-Modeling2-small.jpg',
            'https://i.ibb.co/f9nk1R8/basketball-Flight-Modeling3-small.jpg',
            'https://i.ibb.co/gFfw74Z/basketball-Flight-Modeling4-small.jpg',
            'https://i.ibb.co/8NN21KM/basketball-Flight-Modeling5-small.jpg',
            'https://i.ibb.co/cQ1sMbZ/basketball-Flight-Modeling6-small.jpg',
            'https://i.ibb.co/CM6ffjK/basketball-Flight-Modeling7-small.jpg',
            'https://i.ibb.co/BfRhtvL/basketball-Flight-Modeling8-small.jpg',
            'https://i.ibb.co/qnmkQYp/basketball-Flight-Modeling9-small.jpg',
            'https://i.ibb.co/Z2cjG0w/basketball-Flight-Modeling10-small.jpg'
        ];

        let studentsImages = ['https://i.ibb.co/7Cb90C8/students-Knowledge-Control1.jpg',
            'https://i.ibb.co/DKRBDWF/students-Knowledge-Control2.jpg',
            'https://i.ibb.co/Jy29cxR/students-Knowledge-Control3.jpg',
            'https://i.ibb.co/pRMVqd8/students-Knowledge-Control4.jpg',
            'https://i.ibb.co/mT0D3zn/students-Knowledge-Control5.jpg',
            'https://i.ibb.co/RCpZ6Y9/students-Knowledge-Control6.jpg',
            'https://i.ibb.co/rsxVv8P/students-Knowledge-Control7.jpg',
            'https://i.ibb.co/M2VwhFL/students-Knowledge-Control8.jpg',
            'https://i.ibb.co/FHW5WCJ/students-Knowledge-Control9.jpg',
            'https://i.ibb.co/gRCPdFD/students-Knowledge-Control10.jpg',
            'https://i.ibb.co/FwRRNhm/students-Knowledge-Control11.jpg',
            'https://i.ibb.co/z4rHzTD/students-Knowledge-Control12.jpg'
        ];

        let studentsImagesSmall = ['https://i.ibb.co/WkC5YZG/students-Knowledge-Control1-small.jpg',
            'https://i.ibb.co/0Qs9t0s/students-Knowledge-Control2-small.jpg',
            'https://i.ibb.co/YXb2yWg/students-Knowledge-Control3-small.jpg',
            'https://i.ibb.co/C9741Tp/students-Knowledge-Control4-small.jpg',
            'https://i.ibb.co/72vBbhY/students-Knowledge-Control5-small.jpg',
            'https://i.ibb.co/C5td7ZT/students-Knowledge-Control6-small.jpg',
            'https://i.ibb.co/rsWHrdL/students-Knowledge-Control7-small.jpg',
            'https://i.ibb.co/8xJZbxT/students-Knowledge-Control8-small.jpg',
            'https://i.ibb.co/2kjptMg/students-Knowledge-Control9-small.jpg',
            'https://i.ibb.co/kKVZCn5/students-Knowledge-Control10-small.jpg',
            'https://i.ibb.co/2ZYrryR/students-Knowledge-Control11-small.jpg',
            'https://i.ibb.co/r0Kh2Wj/students-Knowledge-Control12-small.jpg'
        ];

        let worksCardFirst = document.getElementsByClassName('works-card-first'),
            kasumiBox1NavLeft = document.getElementById('first-kasumi-navigation-left'),
            kasumiBox1NavRight = document.getElementById('first-kasumi-navigation-right'),
            kasumiBox2NavLeft = document.getElementById('second-kasumi-navigation-left'),
            kasumiBox2NavRight = document.getElementById('second-kasumi-navigation-right'),
            kasumi1Image = document.getElementById('kasumi-encryption-decryption-image'),
            kasumi2Image = document.getElementById('kasumi-algorithm-image'),
            proCreditNavLeft = document.getElementById('pro-credit-navigation-left'),
            proCreditNavRight = document.getElementById('pro-credit-navigation-right'),
            mobilePhoneNavLeft = document.getElementById('mobile-phone-navigation-left'),
            mobilePhoneNavRight = document.getElementById('mobile-phone-navigation-right'),
            proCreditImage = document.getElementById('pro-credit-image'),
            basketballNavLeft = document.getElementById('basketball-navigation-left'),
            basketballNavRight = document.getElementById('basketball-navigation-right'),
            basketballImage = document.getElementById('basketball-image'),
            studentsNavLeft = document.getElementById('students-navigation-left'),
            studentsNavRight = document.getElementById('students-navigation-right'),
            studentsImage = document.getElementById('students-image');

        let kasumiBox1ClickCounter = 0,
            kasumiBox2ClickCounter = 0,
            proCreditClickCounter = 0,
            mobilePhoneClickCounter = 0,
            basketballClickCounter = 0,
            studentsClickCounter = 0;

        for (let i = 0; i < worksCardFirst.length; i++) {
            worksCardFirst[i].onmouseover = function() {
                mobilePhoneCard.style.backgroundImage = `url(${mobilePhoneImages[i]})`;
            }
            worksCardFirst[i].onmouseleave = function() {}
        }

        document.getElementById('interactive-layout-button-1').onclick = function() {
            window.location.href = "https://www.figma.com/proto/1l01NZ1BpN7Q5N1txMbLT4/PerfectPosture?page-id=0%3A1&node-id=202-344&viewport=-269%2C450%2C0.07&scaling=scale-down&starting-point-node-id=202%3A344";
        }

        document.getElementById('git-button-1').onclick = function() {
            window.location.href = "https://github.com/perpetuumm0bi1e/StudentsKnowledgeControl";
        }

        document.getElementById('git-button-2').onclick = function() {
            window.location.href = "https://github.com/perpetuumm0bi1e/ProCredit";
        }

        document.getElementById('git-button-3').onclick = function() {
            window.location.href = "https://github.com/perpetuumm0bi1e/Kasumi";
        }

        document.getElementById('git-button-4').onclick = function() {
            window.location.href = "https://github.com/perpetuumm0bi1e/BasketballFlightModeling";
        }

        document.getElementById('visit-site-1').onclick = function() {
            window.location.href = "https://perpetuumm0bi1e.github.io/Mark/";
        }

        function boxImageChanger(clickCounter, imageBox, imagesArray, smallImagesArray) {
            imageBox.style.backgroundImage = (clickCounter < 0) ?
                ((document.body.clientWidth >= 1024) ?
                    `url(${imagesArray[imagesArray.length - 1 + (clickCounter % imagesArray.length)]})` :
                    `url(${smallImagesArray[smallImagesArray.length - 1 + (clickCounter % smallImagesArray.length)]})`) :

                ((document.body.clientWidth >= 1024) ?
                    `url(${imagesArray[clickCounter % smallImagesArray.length]})` :
                    `url(${smallImagesArray[clickCounter % smallImagesArray.length]})`);
        }

        try {
            mobilePhoneNavLeft.onclick = function() {
                mobilePhoneClickCounter--;
                boxImageChanger(mobilePhoneClickCounter, mobilePhoneCard, mobilePhoneImages, mobilePhoneImages);
            }
            mobilePhoneNavRight.onclick = function() {
                mobilePhoneClickCounter++;
                boxImageChanger(mobilePhoneClickCounter, mobilePhoneCard, mobilePhoneImages, mobilePhoneImages);
            }
        } catch {
            console.log('no navigations buttons;')
        }

        kasumiBox1NavLeft.onclick = function() {
            kasumiBox1ClickCounter--;
            boxImageChanger(kasumiBox1ClickCounter, kasumi1Image, kasumiImages1, kasumiImages1Small);
        }

        kasumiBox1NavRight.onclick = function() {
            kasumiBox1ClickCounter++;
            boxImageChanger(kasumiBox1ClickCounter, kasumi1Image, kasumiImages1, kasumiImages1Small);
        }

        kasumiBox2NavLeft.onclick = function() {
            kasumiBox2ClickCounter--;
            boxImageChanger(kasumiBox2ClickCounter, kasumi2Image, kasumiImages2, kasumiImages2Small);
        }

        kasumiBox2NavRight.onclick = function() {
            kasumiBox2ClickCounter++;
            boxImageChanger(kasumiBox2ClickCounter, kasumi2Image, kasumiImages2, kasumiImages2Small);
        }

        basketballNavLeft.onclick = function() {
            basketballClickCounter--;
            boxImageChanger(basketballClickCounter, basketballImage, basketballImages, basketballImagesSmall);
        }

        basketballNavRight.onclick = function() {
            basketballClickCounter++;
            boxImageChanger(basketballClickCounter, basketballImage, basketballImages, basketballImagesSmall);
        }

        studentsNavLeft.onclick = function() {
            studentsClickCounter--;
            boxImageChanger(studentsClickCounter, studentsImage, studentsImages, studentsImagesSmall);
        }

        studentsNavRight.onclick = function() {
            studentsClickCounter++;
            boxImageChanger(studentsClickCounter, studentsImage, studentsImages, studentsImagesSmall);
        }

        proCreditNavLeft.onclick = function() {
            proCreditClickCounter--;
            boxImageChanger(proCreditClickCounter, proCreditImage, proCreditImages, proCreditImagesSmall);
        }

        proCreditNavRight.onclick = function() {
            proCreditClickCounter++;
            boxImageChanger(proCreditClickCounter, proCreditImage, proCreditImages, proCreditImagesSmall);
        }

    } else if (location.pathname.includes('contacts')) {
        document.getElementById('telegram').onclick = function() {
            window.location.href = "https://t.me/perpetuumm0bi1e";
        }

        document.getElementById('instagram').onclick = function() {
            window.location.href = "https://instagram.com/perpetuumm0bi1e";
        }

        document.getElementById('github').onclick = function() {
            window.location.href = "https://github.com/perpetuumm0bi1e";
        }

        document.getElementById('email').onclick = function() {
            window.location.href = "mailto:kat.kus@mail.ru";
        }
    }
}
window.addEventListener('resize', function(event) {
    windowSetting();
});