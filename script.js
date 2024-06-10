// активация анимаций при нахождении в поле зрения
function onEntry(element) {
    element.forEach((change) => {
        if (change.isIntersecting) {
            document.body.clientWidth < 1024 ?
                change.target.classList.add("appeared") :
                change.target.classList.add("large-appeared");
        }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

// "живой" хедер
document.addEventListener("DOMContentLoaded", () => {
    const onScrollHeader = () => {
        const header = document.querySelector(".navbar");
        let prevScroll = window.pageYOffset,
            currentScroll;

        window.addEventListener("scroll", () => {
            currentScroll = window.pageYOffset;
            const headerHidden = () => header.classList.contains("navbar_hidden");

            if (currentScroll > prevScroll && !headerHidden() && document.body.clientWidth >= 1024) {
                // if (currentScroll > prevScroll && !headerHidden()) {
                header.classList.add("navbar_hidden");
            }
            if (currentScroll < prevScroll && headerHidden() && document.body.clientWidth >= 1024) {

                // if (currentScroll < prevScroll && headerHidden()) {
                header.classList.remove("navbar_hidden");
            }

            prevScroll = currentScroll;
        });
    };
    onScrollHeader();
});

let navbar = document.querySelector(".navbar"),
    navContainer = document.querySelector(".nav-container");


function windowSetting() {
    let aboutMePage = document.getElementById("about-me-page");
    let itemsBefore = document.getElementById("items-before");
    let itemsAfter = document.getElementById("items-after");
    let width = (aboutMePage.offsetHeight - 5) * 9 + 10;
    let pageWidth = document.body.clientWidth;
    let count = Math.round(pageWidth / width);

    itemsBefore.innerHTML = "";
    itemsAfter.innerHTML = "";

    for (let i = 0; i < count - 1; i++) {
        let p = document.createElement("p");
        p.className = "item";
        p.innerHTML = "perpetuumm0bi1e";
        itemsBefore.append(p);
        let p2 = document.createElement("p");
        p2.className = "item";
        p2.innerHTML = "peretuumm0bi1e";
        itemsAfter.append(p2);
    }

    if (document.body.clientWidth >= 1024) {
        navbar.style.position = "sticky";
    } else {
        navbar.style.position = "relative";
    }

    if (location.pathname.includes("about")) {
        let engBlock = document.getElementById('english-block');
        let gerBlock = document.getElementById('german-block');
        let langGroups = document.getElementsByClassName('language-group');
        let langGroupsCont = document.getElementById('language-groups');

        gerBlock.style.width = engBlock.offsetWidth + 'px';

        if (document.body.clientWidth > 600) {
            for (let group of langGroups) {
                group.style.width = '100%';
                group.style.maxWidth = '44%';
                langGroupsCont.style.gap = '6rem';
            }
        } else {
            for (let group of langGroups) {
                group.style.maxWidth = '100%';
                langGroupsCont.style.gap = '3rem';
            }
        }
    }
}

window.onload = function() {

    let wrapLine = document.getElementById("wrap-line");
    wrapLine.onclick = function() {
        window.location.href = "./index.html";
    };

    let bottomAppearedElements = document.querySelectorAll(".bottom-appearance"),
        bottomMobileAppearedElements = document.querySelectorAll(".bottom-mobile-appearance"),
        topAppearedElements = document.querySelectorAll(".top-appearance"),
        topMobileAppearedElements = document.querySelectorAll(".top-mobile-appearance"),
        leftAppearedElements = document.querySelectorAll(".left-large-appearance"),
        rightAppearedElements = document.querySelectorAll(".right-large-appearance");

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

    windowSetting();

    if (location.pathname.includes("index") || location.pathname.split("").pop() == "/") {

        let typingText = document.getElementsByClassName('typing-text');

        for (text of typingText) {
            text.style.width = '0rem';
        }

        typingText[0].style.width = '10ch';
        typingText[0].style.borderRight = '.4rem solid';

        setTimeout(function() {
            typingText[0].style.borderRight = 'none';
            typingText[1].style.width = '5ch';
            typingText[1].style.borderRight = '.4rem solid';

            setTimeout(function() {
                typingText[1].style.borderRight = 'none';
                typingText[2].style.width = '10ch';
                typingText[2].style.borderRight = '.4rem solid';

                setTimeout(function() {
                    typingText[2].style.borderRight = 'none';
                    typingText[3].style.width = '5ch';
                    typingText[3].style.borderRight = '.4rem solid';

                    setTimeout(function() {
                        typingText[3].style.borderRight = 'none';
                        typingText[4].style.width = '9ch';
                        typingText[4].style.borderRight = '.4rem solid';

                        setTimeout(function() {
                            typingText[4].style.borderRight = 'none';
                            typingText[5].style.width = '11ch';
                            typingText[5].style.borderRight = '.4rem solid';

                        }, 1300);
                    }, 1300);
                }, 1300);
            }, 1300);
        }, 1300);

    } else if (location.pathname.includes("projects")) {
        document.getElementById("works-page").style.textDecoration = "underline";
        document.getElementById("works-page").style.fontWeight = "500";

        let allProjectsCategory = document.getElementById('category-all-projects'),
            designCategory = document.getElementById('category-design'),
            desktopCategory = document.getElementById('category-desktop'),
            webCategory = document.getElementById('category-web'),
            androidCategory = document.getElementById('category-android'),
            allCatgories = document.getElementsByClassName('project-category');

        let activeCategory = 0,
            activeCategoryName;

        let projectsContainer = document.getElementsByClassName('projects-container'),
            nodesArr = projectsContainer[0].children;

        for (category of allCatgories) {
            for (categoryClass of category.classList) {
                if (categoryClass == 'active') {
                    activeCategory++;
                }
            }
        }

        if (activeCategory == 0) {
            for (category of allCatgories) {
                (category == allProjectsCategory) ?
                category.classList.add('active'):
                    category.classList.add('inactive');
            }
            activeCategoryName = allProjectsCategory.id;
        }

        let changeCategoriesOrder = function(elem) {
            let order = 0;
            elem.style.order = `${order}`;
            order++;

            for (category of allCatgories) {
                if (category != elem) {
                    category.style.order = `${order}`;
                    order++;
                }
            }
        }

        let changeVisibility = function() {
            if (activeCategoryName == 'category-all-projects') {
                for (child of nodesArr) {
                    console.log(child);
                    child.style.display = 'block';
                }
            } else {
                for (child of nodesArr) {
                    child.style.display = (child.classList.contains(`${activeCategoryName}`)) ? 'block' : 'none';
                }
            }
        }

        let changeCategory = function(elem) {
            activeCategoryName = elem.id;

            for (category of allCatgories) {
                if (category == elem) {
                    try {
                        category.classList.remove('inactive');
                        category.classList.add('active');
                    } catch {
                        break;
                    }
                } else {
                    try {
                        category.classList.remove('active');
                        category.classList.add('inactive');
                    } catch {

                    }
                }
            }
            changeCategoriesOrder(elem);
            changeVisibility();
        }

        allProjectsCategory.onclick = function() {
            changeCategory(allProjectsCategory);
        }

        designCategory.onclick = function() {
            changeCategory(designCategory);
        }

        desktopCategory.onclick = function() {
            changeCategory(desktopCategory);
        }

        webCategory.onclick = function() {
            changeCategory(webCategory);
        }

        androidCategory.onclick = function() {
            changeCategory(androidCategory);
        }
    } else if (location.pathname.includes("contacts")) {
        document.getElementById("contacts-page").style.textDecoration = "underline";
        document.getElementById("contacts-page").style.fontWeight = "500";


        let typingText = document.getElementsByClassName('typing-text');

        for (text of typingText) {
            text.style.width = '0rem';
        }

        typingText[0].style.width = '9ch';
        typingText[0].style.borderRight = '.4rem solid';

        setTimeout(function() {
            typingText[0].style.borderRight = 'none';
            typingText[1].style.width = '11ch';
            typingText[1].style.borderRight = '.4rem solid';

            setTimeout(function() {
                typingText[1].style.borderRight = 'none';
                typingText[2].style.width = '10ch';
                typingText[2].style.borderRight = '.4rem solid';

            }, 1300);
        }, 1300);

    } else if (location.pathname.includes("about")) {
        document.getElementById("about-me-page").style.textDecoration = "underline";
        document.getElementById("about-me-page").style.fontWeight = "500";

        let engBlock = document.getElementById('english-block');
        let gerBlock = document.getElementById('german-block');
        let langGroups = document.getElementsByClassName('language-group');
        let langGroupsCont = document.getElementById('language-groups');

        gerBlock.style.width = engBlock.offsetWidth + 'px';

        if (document.body.clientWidth > 600) {
            for (let group of langGroups) {
                group.style.width = '100%';
                group.style.maxWidth = '44%';
                langGroupsCont.style.gap = '6rem';
            }
        } else {
            for (let group of langGroups) {
                group.style.maxWidth = '100%';
                langGroupsCont.style.gap = '3rem';
            }
        }

    } else if (location.pathname.includes("worterbuch")) {
        let worterbuchButton = document.getElementById('worterbuch-figma');

        worterbuchButton.onclick = function() {
            window.location.href = "https://www.figma.com/proto/RveA3fRKOUjhkkb0ifM75q/W%C3%B6rterbuch?page-id=0%3A1&type=design&node-id=298-1556&viewport=2005%2C1058%2C0.19&t=XfE9TT8cst7rFkqG-1&scaling=min-zoom&starting-point-node-id=3%3A7&mode=design";
        }
    }
};
window.addEventListener("resize", function(event) {
    windowSetting();
});