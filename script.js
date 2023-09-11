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

            // if (currentScroll > prevScroll && !headerHidden() && document.body.clientWidth >= 1024) {
            if (currentScroll > prevScroll && !headerHidden()) {
                header.classList.add("navbar_hidden");
            }
            // if (currentScroll < prevScroll && headerHidden() && document.body.clientWidth >= 1024) {
                
            if (currentScroll < prevScroll && headerHidden()) {
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

    console.log(aboutMePage.style);
    console.log(aboutMePage.offsetHeight);

    let pageWidth = document.body.clientWidth;
    let count = Math.round(pageWidth / width);
    console.log(count);

    itemsBefore.innerHTML = "";
    itemsAfter.innerHTML = "";

    for (let i = 0; i < count - 1; i++) {
        let p = document.createElement("p");
        p.className = "item";
        p.innerHTML = "perpetuumm0bi1e";
        itemsBefore.append(p);
        let p2 = document.createElement("p");
        p2.className = "item";
        p2.innerHTML = "perpetuumm0bi1e";
        itemsAfter.append(p2);
    }

    if (document.body.clientWidth >= 1024) {
        navbar.style.position = "sticky";
        // }
    } else {
        navbar.style.position = "relative";
    }

}

window.onload = function() {
    if (document.body.clientWidth >= 1024) {
        //navbar.style.position = "sticky";
        //navContainer.append(linksElement);
    } else {
        //navbar.style.position = "relative";
        //navContainer.append(menuElement);
    }

    let wrapLine = document.getElementById("wrap-line");
    wrapLine.onclick = function() {
        window.location.href = "./index.html";
    };
    windowSetting();

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

    if (location.pathname.includes("index") || location.pathname.split("").pop() == "/") {
        document.getElementById("telegram-button").onclick = function() {
            window.location.href = "https://t.me/perpetuumm0bi1e";
        };
    } else if (location.pathname.includes("projects")) {
        document.getElementById("works-page").style.textDecoration="underline";
        document.getElementById("works-page").style.fontWeight="500";
       
    } else if (location.pathname.includes("contacts")) {
    document.getElementById("contacts-page").style.textDecoration="underline";
    document.getElementById("contacts-page").style.fontWeight="500";

        document.getElementById("telegram").onclick = function() {
            window.location.href = "https://t.me/perpetuumm0bi1e";
        };

        document.getElementById("instagram").onclick = function() {
            window.location.href = "https://instagram.com/perpetuumm0bi1e";
        };

        document.getElementById("github").onclick = function() {
            window.location.href = "https://github.com/perpetuumm0bi1e";
        };

        document.getElementById("email").onclick = function() {
            window.location.href = "mailto:kat.kus@mail.ru";
        };
    } else if (location.pathname.includes("about")){
        document.getElementById("about-me-page").style.textDecoration="underline";
        document.getElementById("about-me-page").style.fontWeight="500";
    }
};
window.addEventListener("resize", function(event) {
    windowSetting();
});