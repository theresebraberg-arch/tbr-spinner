/* ==========================================
   TBR SPINNER
   ========================================== */


/* ------------------------------------------
   MAIN PROMPT BANK
   ------------------------------------------ */

const prompts = [

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
   COLOR GENERATOR DATA
   ------------------------------------------ */

const colorChoices = [
    { name: "Red", color: "#f28b82", emoji: "❤️" },
    { name: "Orange", color: "#f6b26b", emoji: "🧡" },
    { name: "Yellow", color: "#f7dc6f", emoji: "💛" },
    { name: "Green", color: "#9fd3a7", emoji: "💚" },
    { name: "Blue", color: "#9ec5f8", emoji: "💙" },
    { name: "Purple", color: "#c9b2f4", emoji: "💜" },
    { name: "Pink", color: "#f6b6d2", emoji: "🩷" },
    { name: "White", color: "#f7f7f7", emoji: "🤍" },
    { name: "Black", color: "#3a3540", emoji: "🖤" },
    { name: "Gray", color: "#c9c9cf", emoji: "🩶" },
    { name: "Brown", color: "#b98b73", emoji: "🤎" },
    { name: "Beige", color: "#e5d4b8", emoji: "🤎" }
];


/* ------------------------------------------
   MAIN ELEMENTS
   ------------------------------------------ */

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinButton = document.getElementById("spinButton");
const spinningMessage = document.getElementById("spinningMessage");

const resultOverlay = document.getElementById("resultOverlay");
const resultIcon = document.getElementById("resultIcon");
const resultLabel = document.getElementById("resultLabel");
const resultText = document.getElementById("resultText");
const resultDescription = document.getElementById("resultDescription");

const closeResultButton = document.getElementById("closeResult");
const spinAgainButton = document.getElementById("spinAgain");


/* ------------------------------------------
   COLOR GENERATOR ELEMENTS
   ------------------------------------------ */

const colorGeneratorOverlay =
    document.getElementById("colorGeneratorOverlay");

const colorCanvas =
    document.getElementById("colorWheel");

const colorCtx =
    colorCanvas.getContext("2d");

const colorResult =
    document.getElementById("colorResult");

const spinColorButton =
    document.getElementById("spinColorButton");

const closeColorGeneratorButton =
    document.getElementById("closeColorGenerator");


/* ------------------------------------------
   MAIN WHEEL COLORS
   ------------------------------------------ */

const wheelColors = [
    "#f6a9cf",
    "#c7b6ff",
    "#a9d6f5",
    "#b9e6d1",
    "#ffc6a8",
    "#ffe5a6",
    "#ffbdd5",
    "#d8c8ff",
    "#bfe7ff",
    "#c8efd8"
];


/* ------------------------------------------
   STATE
   ------------------------------------------ */

let rotation = 0;
let spinning = false;

let colorRotation = 0;
let colorSpinning = false;


/* ==========================================
   MAIN WHEEL
   ========================================== */

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
            wheelColors[index % wheelColors.length];

        ctx.fill();

        ctx.strokeStyle =
            "rgba(74, 55, 91, 0.18)";

        ctx.lineWidth = 1;

        ctx.stroke();


        ctx.save();

        ctx.translate(center, center);

        ctx.rotate(
            start + slice / 2
        );

        ctx.textAlign = "right";
        ctx.textBaseline = "middle";

        ctx.fillStyle =
            "rgba(73, 51, 84, 0.9)";

        ctx.font =
            "800 11px -apple-system, BlinkMacSystemFont, sans-serif";

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
        "rgba(127, 98, 200, 0.5)";

    ctx.lineWidth = 4;

    ctx.stroke();


    /* Center */

    ctx.beginPath();

    ctx.arc(
        center,
        center,
        67,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#fffafd";
    ctx.fill();

    ctx.strokeStyle = "#b998e5";
    ctx.lineWidth = 4;
    ctx.stroke();


    ctx.fillStyle = "#6f4da2";

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font =
        "900 21px -apple-system, BlinkMacSystemFont, sans-serif";

    ctx.fillText(
        "TBR",
        center,
        center - 7
    );


    ctx.fillStyle =
        "rgba(111, 77, 162, 0.65)";

    ctx.font =
        "700 10px -apple-system, BlinkMacSystemFont, sans-serif";

    ctx.fillText(
        "SPINNER",
        center,
        center + 16
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
   MAIN WINNER
   ------------------------------------------ */

function getSelectedPrompt() {

    const slice =
        (Math.PI * 2) / prompts.length;

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
   MAIN RESULT
   ------------------------------------------ */

function showResult(prompt) {

    resultIcon.textContent = "📖";
    resultLabel.textContent = "YOUR PROMPT";
    resultText.textContent = prompt;
    resultDescription.textContent = "";

    resultOverlay.classList.add("show");

    resultOverlay.setAttribute(
        "aria-hidden",
        "false"
    );
}


function closeResult() {

    resultOverlay.classList.remove("show");

    resultOverlay.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* ------------------------------------------
   SPECIAL PROMPTS
   ------------------------------------------ */

function handleSelectedPrompt(prompt) {

    if (prompt === "🎨 Color generator") {

        openColorGenerator();
        return;
    }


    if (prompt === "Snurra igen") {

        resultIcon.textContent = "🔄";
        resultLabel.textContent = "CHAOS!";
        resultText.textContent = "Snurra igen!";
        resultDescription.textContent =
            "The wheel has spoken. You don't get off that easily.";

        resultOverlay.classList.add("show");
        return;
    }


    if (prompt === "🔥 SPIN TWICE") {

        resultIcon.textContent = "🔥";
        resultLabel.textContent = "DOUBLE TROUBLE";
        resultText.textContent = "SPIN TWICE";
        resultDescription.textContent =
            "Spin the main wheel two more times and find a book that matches both prompts.";

        resultOverlay.classList.add("show");
        return;
    }


    showResult(prompt);
}


/* ------------------------------------------
   MAIN SPIN
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

    const extraTurns =
        7 + Math.random() * 4;

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
                normalizeAngle(rotation);

            drawWheel();

            const selected =
                getSelectedPrompt();

            spinning = false;

            spinButton.disabled = false;

            spinningMessage.textContent =
                "";

            setTimeout(() => {

                handleSelectedPrompt(
                    selected
                );

            }, 250);
        }
    }

    requestAnimationFrame(
        animate
    );
}


/* ==========================================
   COLOR GENERATOR
   ========================================== */

function drawColorWheel() {

    const size = colorCanvas.width;
    const center = size / 2;
    const radius = center - 10;

    colorCtx.clearRect(
        0,
        0,
        size,
        size
    );

    const slice =
        (Math.PI * 2) /
        colorChoices.length;


    colorChoices.forEach(
        (choice, index) => {

            const start =
                index * slice +
                colorRotation;

            const end =
                start + slice;


            colorCtx.beginPath();

            colorCtx.moveTo(
                center,
                center
            );

            colorCtx.arc(
                center,
                center,
                radius,
                start,
                end
            );

            colorCtx.closePath();

            colorCtx.fillStyle =
                choice.color;

            colorCtx.fill();


            colorCtx.strokeStyle =
                "rgba(67, 50, 75, 0.18)";

            colorCtx.lineWidth = 2;

            colorCtx.stroke();


            /* Label */

            colorCtx.save();

            colorCtx.translate(
                center,
                center
            );

            colorCtx.rotate(
                start +
                slice / 2
            );

            colorCtx.textAlign =
                "right";

            colorCtx.textBaseline =
                "middle";

            colorCtx.fillStyle =
                choice.name === "Black"
                    ? "#ffffff"
                    : "#3f3048";

            colorCtx.font =
                "800 18px -apple-system, BlinkMacSystemFont, sans-serif";

            colorCtx.fillText(
                choice.name,
                radius - 24,
                0
            );

            colorCtx.restore();
        }
    );


    /* Outer ring */

    colorCtx.beginPath();

    colorCtx.arc(
        center,
        center,
        radius,
        0,
        Math.PI * 2
    );

    colorCtx.strokeStyle =
        "#8e6bb8";

    colorCtx.lineWidth = 5;

    colorCtx.stroke();


    /* Center */

    colorCtx.beginPath();

    colorCtx.arc(
        center,
        center,
        58,
        0,
        Math.PI * 2
    );

    colorCtx.fillStyle =
        "#fffafd";

    colorCtx.fill();

    colorCtx.strokeStyle =
        "#a78bd0";

    colorCtx.lineWidth = 4;

    colorCtx.stroke();


    colorCtx.fillStyle =
        "#6f4da2";

    colorCtx.textAlign =
        "center";

    colorCtx.textBaseline =
        "middle";

    colorCtx.font =
        "900 15px -apple-system, BlinkMacSystemFont, sans-serif";

    colorCtx.fillText(
        "COLOR",
        center,
        center - 6
    );

    colorCtx.font =
        "700 10px -apple-system, BlinkMacSystemFont, sans-serif";

    colorCtx.fillText(
        "WHEEL",
        center,
        center + 13
    );
}


/* ------------------------------------------
   COLOR WINNER
   ------------------------------------------ */

function getSelectedColor() {

    const slice =
        (Math.PI * 2) /
        colorChoices.length;

    const pointerAngle =
        Math.PI * 1.5;

    const wheelAngle =
        normalizeAngle(
            pointerAngle -
            colorRotation
        );

    const index =
        Math.floor(
            wheelAngle / slice
        ) % colorChoices.length;

    return colorChoices[index];
}


/* ------------------------------------------
   OPEN / CLOSE COLOR GENERATOR
   ------------------------------------------ */

function openColorGenerator() {

    colorResult.textContent =
        "Ready to spin 🎨";

    colorGeneratorOverlay
        .classList
        .add("show");

    colorGeneratorOverlay
        .setAttribute(
            "aria-hidden",
            "false"
        );

    drawColorWheel();
}


function closeColorGenerator() {

    colorGeneratorOverlay
        .classList
        .remove("show");

    colorGeneratorOverlay
        .setAttribute(
            "aria-hidden",
            "true"
        );
}


/* ------------------------------------------
   SPIN COLOR WHEEL
   ------------------------------------------ */

function spinColorWheel() {

    if (colorSpinning) {
        return;
    }

    colorSpinning = true;

    spinColorButton.disabled =
        true;

    colorResult.textContent =
        "Choosing a color…";


    const startRotation =
        colorRotation;

    const extraTurns =
        6 + Math.random() * 4;

    const randomLanding =
        Math.random() *
        Math.PI *
        2;

    const totalRotation =
        extraTurns *
        Math.PI *
        2 +
        randomLanding;

    const duration =
        3500;

    const startTime =
        performance.now();


    function animate(currentTime) {

        const elapsed =
            currentTime -
            startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );

        const eased =
            1 -
            Math.pow(
                1 - progress,
                4
            );

        colorRotation =
            startRotation +
            totalRotation *
            eased;

        drawColorWheel();


        if (progress < 1) {

            requestAnimationFrame(
                animate
            );

        } else {

            colorRotation =
                normalizeAngle(
                    colorRotation
                );

            drawColorWheel();

            const selected =
                getSelectedColor();

            colorSpinning =
                false;

            spinColorButton.disabled =
                false;

            colorResult.textContent =
                `${selected.emoji} ${selected.name} cover`;
        }
    }


    requestAnimationFrame(
        animate
    );
}


/* ==========================================
   EVENTS
   ========================================== */

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


spinColorButton.addEventListener(
    "click",
    spinColorWheel
);


closeColorGeneratorButton.addEventListener(
    "click",
    closeColorGenerator
);


/* ------------------------------------------
   CLICK OUTSIDE POPUPS
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


colorGeneratorOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            colorGeneratorOverlay
        ) {

            closeColorGenerator();
        }
    }
);


/* ------------------------------------------
   ESC KEY
   ------------------------------------------ */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        if (
            colorGeneratorOverlay
                .classList
                .contains("show")
        ) {

            closeColorGenerator();
            return;
        }

        if (
            resultOverlay
                .classList
                .contains("show")
        ) {

            closeResult();
        }
    }
);


/* ==========================================
   FIRST DRAW
   ========================================== */

drawWheel();
drawColorWheel();    "Age gap",

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
   MINI GENERATORS
   ------------------------------------------ */

const colorChoices = [
    "Röd",
    "Orange",
    "Gul",
    "Grön",
    "Blå",
    "Lila",
    "Rosa",
    "Vit",
    "Svart",
    "Grå",
    "Brun",
    "Beige"
];


/* ------------------------------------------
   ELEMENTS
   ------------------------------------------ */

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinButton = document.getElementById("spinButton");

const resultOverlay = document.getElementById("resultOverlay");
const resultText = document.getElementById("resultText");

const closeResultButton = document.getElementById("closeResult");
const spinAgainButton = document.getElementById("spinAgain");

const spinningMessage = document.getElementById("spinningMessage");


/* ------------------------------------------
   WHEEL COLORS
   ------------------------------------------ */

const wheelColors = [
    "#f6a9cf",
    "#c7b6ff",
    "#a9d6f5",
    "#b9e6d1",
    "#ffc6a8",
    "#ffe5a6",
    "#ffbdd5",
    "#d8c8ff",
    "#bfe7ff",
    "#c8efd8"
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
            "rgba(74, 55, 91, 0.18)";

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
            "rgba(73, 51, 84, 0.9)";

        ctx.font =
            "800 11px -apple-system, BlinkMacSystemFont, sans-serif";

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
        "rgba(127, 98, 200, 0.5)";

    ctx.lineWidth = 4;

    ctx.stroke();


    /* Center circle */

    ctx.beginPath();

    ctx.arc(
        center,
        center,
        67,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#fffafd";

    ctx.fill();

    ctx.strokeStyle =
        "#b998e5";

    ctx.lineWidth = 4;

    ctx.stroke();


    /* Center text */

    ctx.fillStyle = "#6f4da2";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.font =
        "900 21px -apple-system, BlinkMacSystemFont, sans-serif";

    ctx.fillText(
        "TBR",
        center,
        center - 7
    );


    ctx.fillStyle =
        "rgba(111, 77, 162, 0.65)";

    ctx.font =
        "700 10px -apple-system, BlinkMacSystemFont, sans-serif";

    ctx.fillText(
        "SPINNER",
        center,
        center + 16
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
   RANDOM CHOICE
   ------------------------------------------ */

function randomChoice(list) {

    const index =
        Math.floor(
            Math.random() * list.length
        );

    return list[index];
}


/* ------------------------------------------
   SPECIAL PROMPTS
   ------------------------------------------ */

function resolveSpecialPrompt(prompt) {

    if (prompt === "🎨 Color generator") {

        const color =
            randomChoice(colorChoices);

        return `🎨 Color generator: ${color}`;
    }


    if (prompt === "Snurra igen") {

        return "🔄 Snurra igen!";
    }


    if (prompt === "🔥 SPIN TWICE") {

        return "🔥 SPIN TWICE – snurra två gånger och kombinera båda resultaten!";
    }


    return prompt;
}


/* ------------------------------------------
   SHOW RESULT
   ------------------------------------------ */

function showResult(prompt) {

    const finalPrompt =
        resolveSpecialPrompt(prompt);

    resultText.textContent =
        finalPrompt;

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


    const extraTurns =
        7 + Math.random() * 4;


    const randomLanding =
        Math.random() * Math.PI * 2;


    const totalRotation =
        extraTurns *
        Math.PI *
        2 +
        randomLanding;


    const duration =
        4500;


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
   CLICK OUTSIDE POPUP
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
