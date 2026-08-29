document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       TBR SPINNER
       ========================================== */

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


    /* ==========================================
       COLOR GENERATOR DATA
       ========================================== */

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


    /* ==========================================
       GENRE GENERATOR DATA
       ========================================== */

    const genreChoices = [
        "Romance",
        "Fantasy",
        "Thriller",
        "Mystery",
        "Horror",
        "Romantasy",
        "Sci-fi",
        "Historical fiction",
        "Contemporary",
        "Dark romance",
        "Dystopian",
        "Crime"
    ];


    /* ==========================================
       ELEMENTS
       ========================================== */

    const canvas =
        document.getElementById("wheel");

    const spinButton =
        document.getElementById("spinButton");

    const spinningMessage =
        document.getElementById("spinningMessage");


    const testColorButton =
        document.getElementById("testColorButton");

    const testGenreButton =
        document.getElementById("testGenreButton");


    const resultOverlay =
        document.getElementById("resultOverlay");

    const resultIcon =
        document.getElementById("resultIcon");

    const resultLabel =
        document.getElementById("resultLabel");

    const resultText =
        document.getElementById("resultText");

    const resultDescription =
        document.getElementById("resultDescription");

    const closeResultButton =
        document.getElementById("closeResult");

    const spinAgainButton =
        document.getElementById("spinAgain");


    /* COLOR */

    const colorGeneratorOverlay =
        document.getElementById("colorGeneratorOverlay");

    const colorCanvas =
        document.getElementById("colorWheel");

    const colorResult =
        document.getElementById("colorResult");

    const spinColorButton =
        document.getElementById("spinColorButton");

    const closeColorGeneratorButton =
        document.getElementById("closeColorGenerator");


    /* GENRE */

    const genreGeneratorOverlay =
        document.getElementById("genreGeneratorOverlay");

    const genreCanvas =
        document.getElementById("genreWheel");

    const genreResult =
        document.getElementById("genreResult");

    const spinGenreButton =
        document.getElementById("spinGenreButton");

    const closeGenreGeneratorButton =
        document.getElementById("closeGenreGenerator");


    /* ==========================================
       CANVAS CONTEXTS
       ========================================== */

    if (!canvas) {
        console.error("Main wheel canvas not found.");
        return;
    }

    const ctx =
        canvas.getContext("2d");

    const colorCtx =
        colorCanvas
            ? colorCanvas.getContext("2d")
            : null;

    const genreCtx =
        genreCanvas
            ? genreCanvas.getContext("2d")
            : null;


    /* ==========================================
       COLORS
       ========================================== */

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

    const genreWheelColors = [
        "#f6a9cf",
        "#c7b6ff",
        "#a9d6f5",
        "#b9e6d1",
        "#ffc6a8",
        "#ffe5a6",
        "#ffbdd5",
        "#d8c8ff",
        "#bfe7ff",
        "#c8efd8",
        "#f3b9e4",
        "#b8d7ef"
    ];


    /* ==========================================
       STATE
       ========================================== */

    let rotation = 0;
    let spinning = false;

    let colorRotation = 0;
    let colorSpinning = false;

    let genreRotation = 0;
    let genreSpinning = false;


    /* ==========================================
       HELPERS
       ========================================== */

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


    /* ==========================================
       DRAW MAIN WHEEL
       ========================================== */

    function drawWheel() {

        const size =
            canvas.width;

        const center =
            size / 2;

        const radius =
            center - 12;

        ctx.clearRect(
            0,
            0,
            size,
            size
        );

        const slice =
            (Math.PI * 2) /
            prompts.length;


        prompts.forEach(
            (prompt, index) => {

                const start =
                    index * slice +
                    rotation;

                const end =
                    start + slice;


                ctx.beginPath();

                ctx.moveTo(
                    center,
                    center
                );

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
                        index %
                        wheelColors.length
                    ];

                ctx.fill();


                ctx.strokeStyle =
                    "rgba(74, 55, 91, 0.18)";

                ctx.lineWidth = 1;

                ctx.stroke();


                ctx.save();

                ctx.translate(
                    center,
                    center
                );

                ctx.rotate(
                    start +
                    slice / 2
                );

                ctx.textAlign =
                    "right";

                ctx.textBaseline =
                    "middle";

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
            }
        );


        /* OUTER RING */

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


        /* CENTER */

        ctx.beginPath();

        ctx.arc(
            center,
            center,
            67,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "#fffafd";

        ctx.fill();

        ctx.strokeStyle =
            "#b998e5";

        ctx.lineWidth = 4;

        ctx.stroke();


        ctx.fillStyle =
            "#6f4da2";

        ctx.textAlign =
            "center";

        ctx.textBaseline =
            "middle";

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


    /* ==========================================
       MAIN RESULT
       ========================================== */

    function getSelectedPrompt() {

        const slice =
            (Math.PI * 2) /
            prompts.length;

        const pointerAngle =
            Math.PI * 1.5;

        const wheelAngle =
            normalizeAngle(
                pointerAngle -
                rotation
            );

        const index =
            Math.floor(
                wheelAngle /
                slice
            ) %
            prompts.length;

        return prompts[index];
    }


    function closeResult() {

        if (!resultOverlay) {
            return;
        }

        resultOverlay
            .classList
            .remove("show");

        resultOverlay
            .setAttribute(
                "aria-hidden",
                "true"
            );
    }


    function showResult(
        prompt,
        icon = "📖",
        label = "YOUR PROMPT",
        description = ""
    ) {

        if (!resultOverlay) {
            return;
        }

        if (resultIcon) {
            resultIcon.textContent =
                icon;
        }

        if (resultLabel) {
            resultLabel.textContent =
                label;
        }

        if (resultText) {
            resultText.textContent =
                prompt;
        }

        if (resultDescription) {
            resultDescription.textContent =
                description;
        }

        resultOverlay
            .classList
            .add("show");

        resultOverlay
            .setAttribute(
                "aria-hidden",
                "false"
            );
    }


    /* ==========================================
       SPECIAL PROMPTS
       ========================================== */

    function handleSelectedPrompt(prompt) {

        if (
            prompt ===
            "🎨 Color generator"
        ) {

            openColorGenerator();
            return;
        }


        if (
            prompt ===
            "🎭 Genre generator"
        ) {

            openGenreGenerator();
            return;
        }


        if (
            prompt ===
            "Snurra igen"
        ) {

            showResult(
                "Snurra igen!",
                "🔄",
                "CHAOS!",
                "The wheel has spoken. Spin again."
            );

            return;
        }


        if (
            prompt ===
            "🔥 SPIN TWICE"
        ) {

            showResult(
                "SPIN TWICE",
                "🔥",
                "DOUBLE TROUBLE",
                "Spin the main wheel two more times and combine both prompts."
            );

            return;
        }


        showResult(prompt);
    }


    /* ==========================================
       MAIN SPIN
       ========================================== */

    function spin() {

        if (spinning) {
            return;
        }

        closeResult();

        spinning = true;

        if (spinButton) {
            spinButton.disabled = true;
        }

        if (spinningMessage) {

            spinningMessage.textContent =
                "The wheel is choosing your fate…";
        }


        const startRotation =
            rotation;

        const extraTurns =
            7 + Math.random() * 4;

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
            4500;

        const startTime =
            performance.now();


        function animate(currentTime) {

            const elapsed =
                currentTime -
                startTime;

            const progress =
                Math.min(
                    elapsed /
                    duration,
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

                return;
            }


            rotation =
                normalizeAngle(
                    rotation
                );

            drawWheel();

            const selected =
                getSelectedPrompt();

            spinning = false;


            if (spinButton) {
                spinButton.disabled = false;
            }

            if (spinningMessage) {
                spinningMessage.textContent = "";
            }


            setTimeout(() => {

                handleSelectedPrompt(
                    selected
                );

            }, 250);
        }


        requestAnimationFrame(
            animate
        );
    }


    /* ==========================================
       COLOR WHEEL
       ========================================== */

    function drawColorWheel() {

        if (
            !colorCanvas ||
            !colorCtx
        ) {
            return;
        }

        const size =
            colorCanvas.width;

        const center =
            size / 2;

        const radius =
            center - 10;

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


        drawMiniWheelCenter(
            colorCtx,
            center,
            "COLOR",
            "WHEEL"
        );
    }


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
                wheelAngle /
                slice
            ) %
            colorChoices.length;

        return colorChoices[index];
    }


    function openColorGenerator() {

        closeResult();
        closeGenreGenerator();

        if (!colorGeneratorOverlay) {
            return;
        }

        if (colorResult) {

            colorResult.textContent =
                "Ready to spin 🎨";
        }

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

        if (!colorGeneratorOverlay) {
            return;
        }

        colorGeneratorOverlay
            .classList
            .remove("show");

        colorGeneratorOverlay
            .setAttribute(
                "aria-hidden",
                "true"
            );
    }


    function spinColorWheel() {

        if (
            colorSpinning ||
            !colorCanvas ||
            !colorCtx
        ) {
            return;
        }

        colorSpinning = true;

        if (spinColorButton) {
            spinColorButton.disabled = true;
        }

        if (colorResult) {

            colorResult.textContent =
                "Choosing a color…";
        }


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
                    elapsed /
                    duration,
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

                return;
            }


            colorRotation =
                normalizeAngle(
                    colorRotation
                );

            drawColorWheel();


            const selected =
                getSelectedColor();

            colorSpinning = false;


            if (spinColorButton) {

                spinColorButton.disabled =
                    false;
            }


            if (colorResult) {

                colorResult.textContent =
                    `${selected.emoji} ${selected.name} cover`;
            }
        }


        requestAnimationFrame(
            animate
        );
    }


    /* ==========================================
       GENRE WHEEL
       ========================================== */

    function drawGenreWheel() {

        if (
            !genreCanvas ||
            !genreCtx
        ) {
            return;
        }

        const size =
            genreCanvas.width;

        const center =
            size / 2;

        const radius =
            center - 10;

        genreCtx.clearRect(
            0,
            0,
            size,
            size
        );

        const slice =
            (Math.PI * 2) /
            genreChoices.length;


        genreChoices.forEach(
            (genre, index) => {

                const start =
                    index * slice +
                    genreRotation;

                const end =
                    start + slice;


                genreCtx.beginPath();

                genreCtx.moveTo(
                    center,
                    center
                );

                genreCtx.arc(
                    center,
                    center,
                    radius,
                    start,
                    end
                );

                genreCtx.closePath();

                genreCtx.fillStyle =
                    genreWheelColors[
                        index %
                        genreWheelColors.length
                    ];

                genreCtx.fill();


                genreCtx.strokeStyle =
                    "rgba(67, 50, 75, 0.18)";

                genreCtx.lineWidth = 2;

                genreCtx.stroke();


                /* GENRE TEXT */

                genreCtx.save();

                genreCtx.translate(
                    center,
                    center
                );

                genreCtx.rotate(
                    start +
                    slice / 2
                );

                genreCtx.textAlign =
                    "right";

                genreCtx.textBaseline =
                    "middle";

                genreCtx.fillStyle =
                    "#3f3048";

                genreCtx.font =
                    "800 16px -apple-system, BlinkMacSystemFont, sans-serif";

                genreCtx.fillText(
                    genre,
                    radius - 22,
                    0
                );

                genreCtx.restore();
            }
        );


        drawMiniWheelCenter(
            genreCtx,
            center,
            "GENRE",
            "WHEEL"
        );
    }


    function getSelectedGenre() {

        const slice =
            (Math.PI * 2) /
            genreChoices.length;

        const pointerAngle =
            Math.PI * 1.5;

        const wheelAngle =
            normalizeAngle(
                pointerAngle -
                genreRotation
            );

        const index =
            Math.floor(
                wheelAngle /
                slice
            ) %
            genreChoices.length;

        return genreChoices[index];
    }


    function openGenreGenerator() {

        closeResult();
        closeColorGenerator();

        if (!genreGeneratorOverlay) {
            return;
        }

        if (genreResult) {

            genreResult.textContent =
                "Ready to spin 🎭";
        }

        genreGeneratorOverlay
            .classList
            .add("show");

        genreGeneratorOverlay
            .setAttribute(
                "aria-hidden",
                "false"
            );

        drawGenreWheel();
    }


    function closeGenreGenerator() {

        if (!genreGeneratorOverlay) {
            return;
        }

        genreGeneratorOverlay
            .classList
            .remove("show");

        genreGeneratorOverlay
            .setAttribute(
                "aria-hidden",
                "true"
            );
    }


    function spinGenreWheel() {

        if (
            genreSpinning ||
            !genreCanvas ||
            !genreCtx
        ) {
            return;
        }


        genreSpinning = true;


        if (spinGenreButton) {

            spinGenreButton.disabled =
                true;
        }


        if (genreResult) {

            genreResult.textContent =
                "Choosing a genre…";
        }


        const startRotation =
            genreRotation;

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
                    elapsed /
                    duration,
                    1
                );

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    4
                );

            genreRotation =
                startRotation +
                totalRotation *
                eased;

            drawGenreWheel();


            if (progress < 1) {

                requestAnimationFrame(
                    animate
                );

                return;
            }


            genreRotation =
                normalizeAngle(
                    genreRotation
                );

            drawGenreWheel();


            const selected =
                getSelectedGenre();

            genreSpinning = false;


            if (spinGenreButton) {

                spinGenreButton.disabled =
                    false;
            }


            if (genreResult) {

                genreResult.textContent =
                    `📚 ${selected}`;
            }
        }


        requestAnimationFrame(
            animate
        );
    }


    /* ==========================================
       MINI WHEEL CENTER
       ========================================== */

    function drawMiniWheelCenter(
        context,
        center,
        topText,
        bottomText
    ) {

        context.beginPath();

        context.arc(
            center,
            center,
            58,
            0,
            Math.PI * 2
        );

        context.fillStyle =
            "#fffafd";

        context.fill();

        context.strokeStyle =
            "#a78bd0";

        context.lineWidth = 4;

        context.stroke();


        context.fillStyle =
            "#6f4da2";

        context.textAlign =
            "center";

        context.textBaseline =
            "middle";

        context.font =
            "900 15px -apple-system, BlinkMacSystemFont, sans-serif";

        context.fillText(
            topText,
            center,
            center - 6
        );

        context.font =
            "700 10px -apple-system, BlinkMacSystemFont, sans-serif";

        context.fillText(
            bottomText,
            center,
            center + 13
        );
    }


    /* ==========================================
       EVENTS
       ========================================== */

    if (spinButton) {

        spinButton.addEventListener(
            "click",
            spin
        );
    }


    if (testColorButton) {

        testColorButton.addEventListener(
            "click",
            openColorGenerator
        );
    }


    if (testGenreButton) {

        testGenreButton.addEventListener(
            "click",
            openGenreGenerator
        );
    }


    if (spinColorButton) {

        spinColorButton.addEventListener(
            "click",
            spinColorWheel
        );
    }


    if (spinGenreButton) {

        spinGenreButton.addEventListener(
            "click",
            spinGenreWheel
        );
    }


    if (closeColorGeneratorButton) {

        closeColorGeneratorButton
            .addEventListener(
                "click",
                closeColorGenerator
            );
    }


    if (closeGenreGeneratorButton) {

        closeGenreGeneratorButton
            .addEventListener(
                "click",
                closeGenreGenerator
            );
    }


    if (closeResultButton) {

        closeResultButton.addEventListener(
            "click",
            closeResult
        );
    }


    if (spinAgainButton) {

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
    }


    /* ==========================================
       CLICK OUTSIDE
       ========================================== */

    if (resultOverlay) {

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
    }


    if (colorGeneratorOverlay) {

        colorGeneratorOverlay
            .addEventListener(
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
    }


    if (genreGeneratorOverlay) {

        genreGeneratorOverlay
            .addEventListener(
                "click",
                event => {

                    if (
                        event.target ===
                        genreGeneratorOverlay
                    ) {

                        closeGenreGenerator();
                    }
                }
            );
    }


    /* ==========================================
       ESC
       ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) {
                return;
            }


            if (
                genreGeneratorOverlay &&
                genreGeneratorOverlay
                    .classList
                    .contains("show")
            ) {

                closeGenreGenerator();
                return;
            }


            if (
                colorGeneratorOverlay &&
                colorGeneratorOverlay
                    .classList
                    .contains("show")
            ) {

                closeColorGenerator();
                return;
            }


            if (
                resultOverlay &&
                resultOverlay
                    .classList
                    .contains("show")
            ) {

                closeResult();
            }
        }
    );


    /* ==========================================
       START
       ========================================== */

    drawWheel();
    drawColorWheel();
    drawGenreWheel();

});
