/* ==========================================
   TBR SPINNER
   ========================================== */


/* ------------------------------------------
   PROMPT BANK
   ------------------------------------------ */

const prompts = [

    // ORIGINAL PROMPTS

    "Free pick",
    "Grönt omslag",
    "Romance",
    "Snurra igen",
    "2 word title",
    "Thriller",
    "Blommigt omslag",
    "Fantasy",
    "Jämnt antal sidor",
    "Vampyrer",
    "400–500 sidor",
    "Sci-fi",
    "Romantasy",
    "Dark romance",
    "Före år 2020",
    "No people on the cover",
    "TBR jar/lista",
    "Fake dating",
    "Seasonal read",
    "3 word title",
    "Duology",
    "Varulvar",
    "Under 300 sidor",
    "Högt betyg på Goodreads",
    "Partner pick",
    "Age gap",

    "🎨 Color generator",

    "Publicerad i år",
    "Vitt omslag",
    "Dual POV",
    "Reptil på omslaget",
    "Djur på omslaget",
    "Udda antal sidor",
    "Blått omslag",
    "500+ sidor",
    "People on the cover",
    "Rött omslag",
    "Enemies to lovers",
    "Längsta boken på din TBR",
    "1 word title",
    "Grumpy / sunshine",
    "Rosa omslag",
    "Drakar",
    "6+ word title",
    "New author",
    "Gult omslag",
    "Orange omslag",
    "4 word title",
    "Plats i titel",
    "Deckare",
    "Svart omslag",
    "Nummer i titel",
    "Cowboyromance",
    "Under 200 sidor",
    "Nyast på din TBR",
    "Trollkarlar / häxor",
    "Dystopi",
    "Kortaste boken på din TBR",
    "Movie / TV adaptation",

    "🎭 Genre generator",

    "Morally grey character",
    "Sports romance",
    "Första bokstaven i ditt namn",
    "Skräck",
    "Prinsar / prinsessor",
    "Första boken i en serie",
    "Fortsätt en serie",
    "Natur på omslaget",
    "Slow burn",

    "🛍️ KÖP EN NY BOK",

    "Första boken du ser",
    "200–300 sidor",
    "Korta kapitel",
    "Fairies",
    "Standalone",
    "Vatten på omslaget",
    "Fågel på omslaget",
    "Någon annan väljer",
    "Klassiker",
    "En kvinna på omslaget",
    "Fairytale retelling",
    "Fordon på omslaget",
    "Man på omslaget",
    "Publicerad mellan 2010–2020",
    "Namn i titel",
    "Mermaids",

    "💘 Trope generator",

    "Färg i titeln",
    "Single POV",
    "Sista ordet i ditt senaste SMS",
    "Grått omslag",
    "War setting",
    "Sorglig bok",
    "Eld på omslaget",
    "Självbiografi",


    // EXTRA PROMPTS

    "First person POV",
    "Third person POV",

    "5 word title",
    "Lila omslag",
    "Beige / brunt omslag",
    "Måne eller stjärnor på omslaget",
    "Byggnad på omslaget",
    "Mat eller dryck på omslaget",
    "Illustrerat omslag",

    "300–400 sidor",
    "600+ sidor",

    "Äldre än dig",
    "Glömd TBR-bok",

    "Physical TBR",
    "Kindle / eBook",

    "BookTok made me do it",
    "Debut novel",

    "Historical fiction",
    "Psychological thriller",
    "Murder mystery",

    "Small town romance",
    "Second chance romance",
    "Friends to lovers",
    "Forced proximity",
    "Marriage of convenience",
    "Found family",
    "He falls first",
    "Only one bed",
    "Royal romance",
    "Mafia romance",

    "Serial killer",
    "Unreliable narrator",
    "Missing person",

    "Witches",
    "Ghosts",
    "Demons",
    "Gods / goddesses",
    "Magic school",
    "Zombies",
    "Time travel",

    "Snowy setting",
    "Beach setting",
    "Forest setting",
    "Small town setting",
    "Road trip",
    "Island setting",

    "Family secrets",
    "Antihero",
    "Villain POV",
    "Morally grey love interest",

    "🔤 Letter generator",
    "🔢 Number generator",
    "🎲 Blind pick",

    "🔥 SPIN TWICE"
];


/* ------------------------------------------
   ELEMENTS
   ------------------------------------------ */

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinButton = document.getElementById("spinButton");

const resultOverlay =
    document.getElementById("resultOverlay");

const resultText =
    document.getElementById("resultText");

const closeResultButton =
    document.getElementById("closeResult");

const spinAgainButton =
    document.getElementById("spinAgain");

const spinningMessage =
    document.getElementById("spinningMessage");


/* ------------------------------------------
   WHEEL COLORS
   ------------------------------------------ */

const wheelColors = [
    "#9b82c4",
    "#cf8eaa",
    "#7299b7",
    "#c18d72",
    "#789580",
    "#b66f76",
    "#8878ae",
    "#b29a63"
];


/* ------------------------------------------
   WHEEL STATE
   ------------------------------------------ */

let rotation = 0;
let spinning = false;


/* ------------------------------------------
   DRAW WHEEL
   ------------------------------------------ */

function drawWheel() {

    const size = canvas.width;
    const center = size / 2;
    const radius = center - 12;

    ctx.clearRect(0, 0, size, size);

    const slice =
        (Math.PI * 2) / prompts.length;


    prompts.forEach((prompt, index) => {

        const start =
            index * slice + rotation;

        const end =
            start + slice;


        /* Slice */

        ctx.beginPath();

        ctx.moveTo(center, center);

        ctx.arc(
            center,
            center,
            radius,
            start,
            end
        );

        ctx.closePath();

        ctx.fillStyle =
            wheelColors[
                index % wheelColors.length
            ];

        ctx.fill();


        /* Separator */

        ctx.strokeStyle =
            "rgba(20, 18, 25, 0.75)";

        ctx.lineWidth = 1;

        ctx.stroke();


        /* Number */

        ctx.save();

        ctx.translate(center, center);

        ctx.rotate(
            start + slice / 2
        );

        ctx.textAlign = "right";

        ctx.textBaseline = "middle";

        ctx.fillStyle =
            "rgba(255,255,255,0.95)";

        ctx.font =
            "bold 11px -apple-system, BlinkMacSystemFont, sans-serif";

        ctx.fillText(
            index + 1,
            radius - 14,
            0
        );

        ctx.restore();

    });


    /* Outer ring */

    ctx.beginPath();

    ctx.arc(
        center,
        center,
        radius,
        0,
        Math.PI * 2
    );

    ctx.strokeStyle =
        "rgba(255,255,255,0.45)";

    ctx.lineWidth = 3;

    ctx.stroke();


    /* Center circle */

    ctx.beginPath();

    ctx.arc(
        center,
        center,
        66,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#18151e";

    ctx.fill();

    ctx.strokeStyle =
        "rgba(255,255,255,0.85)";

    ctx.lineWidth = 4;

    ctx.stroke();


    /* Center text */

    ctx.fillStyle = "#ffffff";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.font =
        "800 20px -apple-system, BlinkMacSystemFont, sans-serif";

    ctx.fillText(
        "TBR",
        center,
        center - 8
    );


    ctx.fillStyle =
        "rgba(255,255,255,0.55)";

    ctx.font =
        "600 10px -apple-system, BlinkMacSystemFont, sans-serif";

    ctx.fillText(
        "SPINNER",
        center,
        center + 15
    );
}


/* ------------------------------------------
   ANGLES
   ------------------------------------------ */

function normalizeAngle(angle) {

    const fullCircle =
        Math.PI * 2;

    angle =
        angle % fullCircle;

    if (angle < 0) {

        angle += fullCircle;
    }

    return angle;
}


/* ------------------------------------------
   FIND WINNING PROMPT
   ------------------------------------------ */

function getSelectedPrompt() {

    const slice =
        (Math.PI * 2) / prompts.length;

    /*
       Pointer sits at 12 o'clock.
       Canvas angle there is 3π / 2.
    */

    const pointerAngle =
        Math.PI * 1.5;

    const wheelAngle =
        normalizeAngle(
            pointerAngle - rotation
        );

    const index =
        Math.floor(
            wheelAngle / slice
        ) % prompts.length;

    return prompts[index];
}


/* ------------------------------------------
   SHOW RESULT
   ------------------------------------------ */

function showResult(prompt) {

    resultText.textContent = prompt;

    resultOverlay.classList.add("show");

    resultOverlay.setAttribute(
        "aria-hidden",
        "false"
    );
}


/* ------------------------------------------
   CLOSE RESULT
   ------------------------------------------ */

function closeResult() {

    resultOverlay.classList.remove("show");

    resultOverlay.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* ------------------------------------------
   SPIN
   ------------------------------------------ */

function spin() {

    if (spinning) {
        return;
    }

    closeResult();

    spinning = true;

    spinButton.disabled = true;

    spinningMessage.textContent =
        "The wheel is choosing your fate…";


    const startRotation =
        rotation;


    /*
       Random number of complete turns.
    */

    const extraTurns =
        7 + Math.random() * 4;


    /*
       Random final position.
    */

    const randomLanding =
        Math.random() * Math.PI * 2;


    const totalRotation =
        extraTurns *
        Math.PI *
        2 +
        randomLanding;


    const duration = 4500;

    const startTime =
        performance.now();


    function animate(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        /*
           Ease-out quart:
           fast beginning,
           slow dramatic ending.
        */

        const eased =
            1 -
            Math.pow(
                1 - progress,
                4
            );


        rotation =
            startRotation +
            totalRotation *
            eased;


        drawWheel();


        if (progress < 1) {

            requestAnimationFrame(
                animate
            );

        } else {

            rotation =
                normalizeAngle(
                    rotation
                );

            drawWheel();


            const selected =
                getSelectedPrompt();


            spinning = false;

            spinButton.disabled = false;

            spinningMessage.textContent =
                "";


            /*
               Tiny delay before popup.
               Makes the landing feel nicer.
            */

            setTimeout(() => {

                showResult(selected);

            }, 250);
        }
    }


    requestAnimationFrame(
        animate
    );
}


/* ------------------------------------------
   BUTTON EVENTS
   ------------------------------------------ */

spinButton.addEventListener(
    "click",
    spin
);


closeResultButton.addEventListener(
    "click",
    closeResult
);


spinAgainButton.addEventListener(
    "click",
    () => {

        closeResult();

        setTimeout(
            spin,
            180
        );
    }
);


/* ------------------------------------------
   CLOSE BY CLICKING BACKGROUND
   ------------------------------------------ */

resultOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            resultOverlay
        ) {

            closeResult();
        }
    }
);


/* ------------------------------------------
   ESC KEY
   ------------------------------------------ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            resultOverlay.classList.contains(
                "show"
            )
        ) {

            closeResult();
        }
    }
);


/* ------------------------------------------
   FIRST DRAW
   ------------------------------------------ */

drawWheel();
