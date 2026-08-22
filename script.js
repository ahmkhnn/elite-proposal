/* =========================================================
   ELITE PROPOSAL
   CLEAN COMPLETE SCRIPT
========================================================= */


/* =========================================================
   SCREEN SYSTEM
========================================================= */

const screens = {
  login: document.getElementById("loginScreen"),
  questions: document.getElementById("questionScreen"),
  chosen: document.getElementById("chosenScreen"),
  letter: document.getElementById("letterScreen"),
  gallery: document.getElementById("galleryScreen"),
  dating: document.getElementById("datingScreen"),
  final: document.getElementById("finalScreen")
};


function showScreen(screen) {

  Object.values(screens).forEach(screenItem => {
    if (screenItem) {
      screenItem.classList.remove("active");
    }
  });

  if (screen) {
    screen.classList.add("active");
  }

  createHearts(18);
}


/* =========================================================
   PASSWORD / LOGIN
========================================================= */

const password = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const loginError = document.getElementById("loginError");


function unlock() {

  const value = password.value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");


  const validPasswords = [
    "2606",
    "26june"
  ];


  if (validPasswords.includes(value)) {

    loginError.innerText = "";

    createHearts(60);

    unlockBtn.innerText = "Unlocked ❤️";
    unlockBtn.disabled = true;


    setTimeout(() => {

      showScreen(screens.questions);

      questionIndex = 0;
      noIndex = 0;

      loadQuestion();

      unlockBtn.disabled = false;

    }, 900);


  } else {

    loginError.innerText =
      "Hmm... that's not the right date 🥺";


    password.animate(
      [
        {
          transform: "translateX(0)"
        },
        {
          transform: "translateX(-8px)"
        },
        {
          transform: "translateX(8px)"
        },
        {
          transform: "translateX(-5px)"
        },
        {
          transform: "translateX(0)"
        }
      ],
      {
        duration: 450
      }
    );

  }
}


if (unlockBtn) {

  unlockBtn.addEventListener(
    "click",
    unlock
  );

}


if (password) {

  password.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {
        unlock();
      }

    }
  );

}


/* =========================================================
   FIVE QUESTIONS
========================================================= */

const questions = [

  {
    title: "Inshaal...",

    text:
      "Who makes your ordinary days feel a little more special?",

    yes:
      "Ahmie ❤️"
  },


  {
    title: "One more thing... 👀",

    text:
      "Who should get your random late-night messages?",

    yes:
      "Ahmie 📱❤️"
  },


  {
    title: "Be honest with me 🥺",

    text:
      "Who is secretly one of your favourite people?",

    yes:
      "Ahmie 😭❤️"
  },


  {
    title: "Almost there ✨",

    text:
      "If Ahmie asked you to stay by his side, what would you say?",

    yes:
      "I'd stay ❤️"
  },


  {
    title: "The final question...",

    text:
      "Will you choose Ahmie and make this little story ours?",

    yes:
      "YES, ALWAYS 💍"
  }

];


let questionIndex = 0;
let noIndex = 0;


const questionTitle =
  document.getElementById("questionTitle");

const questionText =
  document.getElementById("questionText");

const yesButton =
  document.getElementById("yesButton");

const noButton =
  document.getElementById("noButton");

const noReaction =
  document.getElementById("noReaction");

const questionNumber =
  document.getElementById("questionNumber");

const smallNumber =
  document.getElementById("smallNumber");

const progress =
  document.getElementById("progress");


const noMessages = [

  "Arey nhi 🥺",

  "Ho hi nahi sakta 😭",

  "Again think about me 👀❤️",

  "Ab tou haan kar dy 😭",

  "Pleaseee? 🥹❤️",

  "You know the answer already 😭💗"

];


function loadQuestion() {

  if (!questions.length) {
    return;
  }


  const question =
    questions[questionIndex];


  questionTitle.innerText =
    question.title;


  questionText.innerText =
    question.text;


  yesButton.innerText =
    question.yes;


  const number =
    String(questionIndex + 1)
      .padStart(2, "0");


  questionNumber.innerText =
    `${number} / 05`;


  smallNumber.innerText =
    number;


  progress.style.width =
    `${((questionIndex + 1) / questions.length) * 100}%`;


  noButton.style.position =
    "relative";

  noButton.style.left =
    "auto";

  noButton.style.top =
    "auto";


  noReaction.innerText =
    "";


  questionTitle.animate(

    [
      {
        opacity: 0,
        transform: "translateY(30px)",
        filter: "blur(10px)"
      },

      {
        opacity: 1,
        transform: "translateY(0)",
        filter: "blur(0)"
      }
    ],

    {
      duration: 900,
      easing: "cubic-bezier(.16,1,.3,1)"
    }

  );

}


/* =========================================================
   NO BUTTON
========================================================= */

function dodgeNo() {

  noReaction.innerText =
    noMessages[
      Math.min(
        noIndex,
        noMessages.length - 1
      )
    ];


  noIndex++;


  noButton.style.position =
    "fixed";


  const margin = 20;


  const maxX =
    Math.max(
      margin,
      window.innerWidth -
      noButton.offsetWidth -
      margin
    );


  const maxY =
    Math.max(
      margin,
      window.innerHeight -
      noButton.offsetHeight -
      margin
    );


  const x =
    Math.max(
      margin,
      Math.random() * maxX
    );


  const y =
    Math.max(
      margin,
      Math.random() * maxY
    );


  noButton.style.left =
    `${x}px`;


  noButton.style.top =
    `${y}px`;


  noButton.animate(

    [
      {
        transform: "scale(.8) rotate(-8deg)"
      },

      {
        transform: "scale(1.15) rotate(8deg)"
      },

      {
        transform: "scale(1) rotate(0)"
      }
    ],

    {
      duration: 500,
      easing: "cubic-bezier(.16,1,.3,1)"
    }

  );


  createHearts(6);

}


if (noButton) {

  noButton.addEventListener(
    "mouseenter",
    dodgeNo
  );


  noButton.addEventListener(
    "click",
    dodgeNo
  );

}


/* =========================================================
   YES BUTTON
========================================================= */

if (yesButton) {

  yesButton.addEventListener(
    "click",
    () => {

      createHearts(45);


      yesButton.animate(

        [
          {
            transform: "scale(1)"
          },

          {
            transform: "scale(1.2)"
          },

          {
            transform: "scale(.9)"
          },

          {
            transform: "scale(1)"
          }
        ],

        {
          duration: 700
        }

      );


      if (
        questionIndex <
        questions.length - 1
      ) {

        questionIndex++;

        noIndex = 0;


        setTimeout(
          loadQuestion,
          700
        );


      } else {

        setTimeout(
          () => {

            showScreen(
              screens.chosen
            );

          },
          900
        );

      }

    }
  );

}


/* =========================================================
   CHOICE → LETTER
========================================================= */

const letterButton =
  document.getElementById("letterButton");


if (letterButton) {

  letterButton.addEventListener(
    "click",
    () => {

      createHearts(60);


      setTimeout(
        () => {

          showScreen(
            screens.letter
          );

        },
        400
      );

    }
  );

}


/* =========================================================
   LETTER → GALLERY
========================================================= */

const galleryButton =
  document.getElementById("galleryButton");


if (galleryButton) {

  galleryButton.addEventListener(
    "click",
    () => {

      createGallery();

      showScreen(
        screens.gallery
      );

    }
  );

}


/* =========================================================
   MAIN 30 PHOTO GALLERY
========================================================= */

const photos = [];


for (
  let i = 1;
  i <= 30;
  i++
) {

  photos.push(
    `our-memories/photo${String(i).padStart(2, "0")}.jpg`
  );

}


const galleryGrid =
  document.getElementById("galleryGrid");


const lightbox =
  document.getElementById("lightbox");


const lightboxImage =
  document.getElementById("lightboxImage");


const photoCounter =
  document.getElementById("photoCounter");


let galleryPhotoIndex = 0;


function createGallery() {

  if (!galleryGrid) {
    return;
  }


  galleryGrid.innerHTML = "";


  photos.forEach(
    (photo, index) => {

      const item =
        document.createElement("div");


      item.className =
        "gallery-item";


      item.innerHTML = `

        <img
          src="${photo}"
          alt="Memory ${index + 1}"
          loading="lazy"
        >

        <span class="gallery-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

      `;


      item.addEventListener(
        "click",
        () => {

          openGalleryPhoto(index);

        }
      );


      galleryGrid.appendChild(
        item
      );

    }
  );

}


function openGalleryPhoto(index) {

  galleryPhotoIndex = index;


  if (lightboxImage) {

    lightboxImage.src =
      photos[galleryPhotoIndex];

  }


  if (photoCounter) {

    photoCounter.innerText =
      `${String(galleryPhotoIndex + 1).padStart(2, "0")} / 30`;

  }


  if (lightbox) {

    lightbox.classList.add("active");

  }


  createHearts(8);

}


function closeGalleryPhoto() {

  if (lightbox) {

    lightbox.classList.remove("active");

  }

}


function nextGalleryPhoto() {

  galleryPhotoIndex++;


  if (
    galleryPhotoIndex >=
    photos.length
  ) {

    galleryPhotoIndex = 0;

  }


  openGalleryPhoto(
    galleryPhotoIndex
  );

}


function previousGalleryPhoto() {

  galleryPhotoIndex--;


  if (
    galleryPhotoIndex < 0
  ) {

    galleryPhotoIndex =
      photos.length - 1;

  }


  openGalleryPhoto(
    galleryPhotoIndex
  );

}


/* =========================================================
   LIGHTBOX BUTTONS
========================================================= */

const closeLightbox =
  document.getElementById("closeLightbox");

const nextPhotoButton =
  document.getElementById("nextPhoto");

const previousPhotoButton =
  document.getElementById("previousPhoto");


if (closeLightbox) {

  closeLightbox.addEventListener(
    "click",
    closeGalleryPhoto
  );

}


if (nextPhotoButton) {

  nextPhotoButton.addEventListener(
    "click",
    nextGalleryPhoto
  );

}


if (previousPhotoButton) {

  previousPhotoButton.addEventListener(
    "click",
    previousGalleryPhoto
  );

}


/* =========================================================
   GALLERY → DATING
========================================================= */

const datingButton =
  document.getElementById("datingButton");


if (datingButton) {

  datingButton.addEventListener(
    "click",
    () => {

      datingIndex = 0;

      showScreen(
        screens.dating
      );

      loadDatingQuestion();

    }
  );

}


/* =========================================================
   DATING QUESTIONS
========================================================= */

const datingQuestions = [

  {
    icon: "🎨",

    title:
      "What's your favourite colour?",

    text:
      "Pick the colour you'd love to see around our little world.",

    options: [
      "Pink 🌸",
      "Black 🖤",
      "White 🤍",
      "Purple 💜"
    ]
  },


  {
    icon: "🌙",

    title:
      "What's your perfect vibe?",

    text:
      "Imagine the two of us with nowhere else to be.",

    options: [
      "Late night 🌙",
      "Sunset 🌅",
      "Rainy day 🌧️",
      "Starry night ✨"
    ]
  },


  {
    icon: "🌹",

    title:
      "What's your idea of a cute date?",

    text:
      "Choose the one that sounds most like you.",

    options: [
      "Dinner together 🍝",
      "Long drive 🚗",
      "Movie night 🎬",
      "Walk & talks 🌆"
    ]
  },


  {
    icon: "🎵",

    title:
      "What should our soundtrack feel like?",

    text:
      "Pick the mood.",

    options: [
      "Soft & romantic 🎶",
      "Happy & crazy 🎉",
      "Calm & dreamy 🌙",
      "A little of everything ❤️"
    ]
  },


  {
    icon: "🍿",

    title:
      "Perfect evening?",

    text:
      "No pressure. Just choose what feels nicest.",

    options: [
      "Food & movies 🍿",
      "Talking for hours 💬",
      "Going somewhere new 🗺️",
      "Staying cozy 🧸"
    ]
  },


  {
    icon: "💌",

    title:
      "One last thing...",

    text:
      "What matters most in a beautiful relationship?",

    options: [
      "Trust 🤍",
      "Respect 🌹",
      "Understanding 🫶",
      "All of them ❤️"
    ]
  }

];


let datingIndex = 0;

let selectedColour =
  "❤️";


const datingIcon =
  document.getElementById("datingIcon");

const datingTitle =
  document.getElementById("datingTitle");

const datingText =
  document.getElementById("datingText");

const datingOptions =
  document.getElementById("datingOptions");

const datingNumber =
  document.getElementById("datingNumber");

const datingProgress =
  document.getElementById("datingProgress");


function loadDatingQuestion() {

  if (!datingQuestions.length) {
    return;
  }


  const dating =
    datingQuestions[datingIndex];


  datingIcon.innerText =
    dating.icon;


  datingTitle.innerText =
    dating.title;


  datingText.innerText =
    dating.text;


  datingNumber.innerText =
    `${String(datingIndex + 1).padStart(2, "0")} / 06`;


  datingProgress.style.width =
    `${((datingIndex + 1) / datingQuestions.length) * 100}%`;


  datingOptions.innerHTML =
    "";


  dating.options.forEach(
    option => {

      const button =
        document.createElement("button");


      button.className =
        "option";


      button.innerText =
        option;


      button.addEventListener(
        "click",
        () => {

          if (
            datingIndex === 0
          ) {

            selectedColour =
              option;

          }


          button.animate(

            [
              {
                transform: "scale(1)"
              },

              {
                transform: "scale(1.08)"
              },

              {
                transform: "scale(1)"
              }
            ],

            {
              duration: 450
            }

          );


          createHearts(20);


          setTimeout(
            () => {

              if (
                datingIndex <
                datingQuestions.length - 1
              ) {

                datingIndex++;

                loadDatingQuestion();

              } else {

                const chosenColour =
                  document.getElementById(
                    "chosenColour"
                  );


                if (chosenColour) {

                  chosenColour.innerText =
                    selectedColour;

                }


                showScreen(
                  screens.final
                );


                createHearts(100);

              }

            },
            650
          );

        }
      );


      datingOptions.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   HEART PARTICLES
========================================================= */

function createHearts(amount) {

  const particles =
    document.getElementById("particles");


  if (!particles) {
    return;
  }


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const heart =
      document.createElement("div");


    heart.className =
      "float-heart";


    heart.innerText =
      Math.random() > 0.3
        ? "♥"
        : "✦";


    heart.style.left =
      Math.random() * 100 + "vw";


    heart.style.top =
      Math.random() * 100 + "vh";


    heart.style.fontSize =
      10 +
      Math.random() * 22 +
      "px";


    heart.style.setProperty(
      "--x",
      Math.random() * 160 - 80
    );


    heart.style.setProperty(
      "--y",
      Math.random() * 160 - 80
    );


    particles.appendChild(
      heart
    );


    setTimeout(
      () => {

        heart.remove();

      },
      3000
    );

  }

}


/* =========================================================
   SECOND MEMORIES GALLERY
   For your memories-stage section
========================================================= */

const memoryGallery =
  document.getElementById("memoryGallery");


const memoryFiles = [];


for (
  let i = 1;
  i <= 30;
  i++
) {

  memoryFiles.push(
    `our memories/Photo01_(${i})_11zon.jpg`
  );

}


/* CREATE SECOND MEMORY GALLERY */

if (memoryGallery) {

  memoryFiles.forEach(
    (file, index) => {

      const card =
        document.createElement("div");


      card.className =
        "memory-card";


      card.style.animationDelay =
        `${index * 0.06}s`;


      const img =
        document.createElement("img");


      img.src =
        file;


      img.alt =
        `Our Memory ${index + 1}`;


      img.loading =
        "lazy";


      img.onclick =
        function () {

          openMemoryViewer(index);

        };


      img.onerror =
        function () {

          console.log(
            "Photo not found:",
            file
          );

        };


      card.appendChild(
        img
      );


      memoryGallery.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   SECOND FULLSCREEN MEMORY VIEWER
========================================================= */

let memoryPhotoIndex = 0;


function openMemoryViewer(index) {

  memoryPhotoIndex =
    index;


  const viewer =
    document.getElementById(
      "photoViewer"
    );


  const image =
    document.getElementById(
      "viewerImage"
    );


  if (!viewer || !image) {
    return;
  }


  image.src =
    memoryFiles[memoryPhotoIndex];


  viewer.classList.add(
    "active"
  );

}


function closePhoto() {

  const viewer =
    document.getElementById(
      "photoViewer"
    );


  if (viewer) {

    viewer.classList.remove(
      "active"
    );

  }

}


function nextPhoto() {

  memoryPhotoIndex++;


  if (
    memoryPhotoIndex >=
    memoryFiles.length
  ) {

    memoryPhotoIndex = 0;

  }


  const image =
    document.getElementById(
      "viewerImage"
    );


  if (image) {

    image.src =
      memoryFiles[memoryPhotoIndex];

  }

}


function previousPhoto() {

  memoryPhotoIndex--;


  if (
    memoryPhotoIndex < 0
  ) {

    memoryPhotoIndex =
      memoryFiles.length - 1;

  }


  const image =
    document.getElementById(
      "viewerImage"
    );


  if (image) {

    image.src =
      memoryFiles[memoryPhotoIndex];

  }

}


/* =========================================================
   SECOND MEMORY VIEWER BUTTONS
========================================================= */

const photoViewer =
  document.getElementById(
    "photoViewer"
  );


const viewerPrev =
  document.querySelector(
    ".viewer-prev"
  );


const viewerNext =
  document.querySelector(
    ".viewer-next"
  );


const closeViewer =
  document.querySelector(
    ".close-viewer"
  );


if (viewerPrev) {

  viewerPrev.addEventListener(
    "click",
    previousPhoto
  );

}


if (viewerNext) {

  viewerNext.addEventListener(
    "click",
    nextPhoto
  );

}


if (closeViewer) {

  closeViewer.addEventListener(
    "click",
    closePhoto
  );

}


/* CLICK OUTSIDE IMAGE = CLOSE */

if (photoViewer) {

  photoViewer.addEventListener(
    "click",
    function(ev
