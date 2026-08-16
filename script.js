// =============================
// PASSWORD
// =============================

const correctPassword = "UK"; // Change your password here

// =============================
// PASSWORD CHECK
// =============================

function checkPassword() {

    const password =
        document.getElementById("password").value;

    if (password === correctPassword) {

        // Open Page 2
        openPage(2);

        // 🎵 Start music on Page 2
        const music =
            document.getElementById("music");

        if (music) {
            music.currentTime = 0;

            music.play().catch(function() {
                console.log("Click the play button to start music.");
            });
        }

    } else {

        alert("❌ Wrong Password! Try Again ❤️");

        document.getElementById("password").value = "";
    }
}

// =============================
// PAGE CHANGE
// =============================

function openPage(number){

    document.querySelectorAll(".page").forEach(function(page){

        page.classList.remove("active");

    });

    document.getElementById("page"+number).classList.add("active");

}

function nextPage(pageNumber) {

    const music = document.getElementById("music");

    // Stop music when leaving Page 2
    if (music && pageNumber !== 2) {
        music.pause();
        music.currentTime = 0;
    }

    // Open requested page
    openPage(pageNumber);
}
// =============================
// SHOW FINAL GIFT
// =============================

function showGift() {

    // Stop music when leaving Page 2
    const music =
        document.getElementById("music");

    if (music) {
        music.pause();
        music.currentTime = 0;
    }

    // Open Page 5
    openPage(5);

    // Confetti
    createConfetti();
}

// =============================
// PHOTO SLIDESHOW
// =============================

const photos=[

"images/birthdayphoto.jpeg"

];

let current=0;

setInterval(function(){

let img=document.getElementById("slideImage");

if(img){

current++;

if(current>=photos.length){

current=0;

}

img.src=photos[current];

}

},3000);

// =============================
// ENTER KEY
// =============================

document.addEventListener("DOMContentLoaded",function(){

let input=document.getElementById("password");

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

checkPassword();

}

});

});

// =============================
// NO BUTTON RUN AWAY
// =============================

const noBtn = document.getElementById("noBtn");

function moveNoButton(){

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

if(noBtn){

    noBtn.addEventListener("mouseover", moveNoButton);

    noBtn.addEventListener("click", moveNoButton);

}

// =============================
// FLOATING HEARTS
// =============================

function createHeart(){

    const hearts = document.getElementById("hearts");

    if(!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },9000);

}

setInterval(createHeart,500);

// =============================
// CONFETTI EFFECT
// =============================

function confetti(){

    for(let i=0;i<80;i++){

        let c=document.createElement("div");

        c.innerHTML="🎉";

        c.style.position="fixed";

        c.style.left=Math.random()*100+"%";

        c.style.top="-50px";

        c.style.fontSize=(20+Math.random()*20)+"px";

        c.style.transition="4s linear";

        document.body.appendChild(c);

        setTimeout(function(){

            c.style.top="110%";

        },100);

        setTimeout(function(){

            c.remove();

        },4500);

    }

}

// =============================
// FIRE CONFETTI
// =============================

const oldShowGift = showGift;

showGift = function(){

    oldShowGift();

    confetti();

};

// =============================
// END
// =============================