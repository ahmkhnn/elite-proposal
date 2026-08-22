/* =========================
   SCREEN SYSTEM
========================= */

const screens = {

  login:
    document.getElementById("loginScreen"),

  questions:
    document.getElementById("questionScreen"),

  chosen:
    document.getElementById("chosenScreen"),

  letter:
    document.getElementById("letterScreen"),

  gallery:
    document.getElementById("galleryScreen"),

  dating:
    document.getElementById("datingScreen"),

  final:
    document.getElementById("finalScreen")

};


function showScreen(screen) {

  Object.values(screens).forEach(screenItem => {

    screenItem.classList.remove("active");

  });

  screen.classList.add("active");

  createHearts(18);
}


/* =========================
   PASSWORD
========================= */

const password =
  document.getElementById("password");

const unlockBtn =
  document.getElementById("unlockBtn");

const loginError =
  document.getElementById("loginError");


function unlock() {

  const value =
    password.value
      .trim()
      .toLowerCase()
      .replace(/\s+/g,"");

  const validPasswords = [

    "2606",
    "26june"

  ];


  if (validPasswords.includes(value)) {

    createHearts(60);

    unlockBtn.innerText =
      "Unlocked ❤️";

    setTimeout(() => {

      showScreen(screens.questions);

      loadQuestion();

    },900);

  } else {

    loginError.innerText =
      "Hmm... that's not the right date 🥺";

    password.animate(

      [
        {
          transform:
            "translateX(0)"
        },

        {
          transform:
            "translateX(-8px)"
        },

        {
          transform:
            "translateX(8px)"
        },

        {
          transform:
            "translateX(0)"
        }
      ],

      {
        duration:
          450
      }

    );

  }

}


unlockBtn.addEventListener(
  "click",
  unlock
);


password.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {

      unlock();

    }

  }
);


/* =========================
   FIVE QUESTIONS
========================= */

const questions = [

  {
    title:
      "Inshaal...",

    text:
      "Who makes your ordinary days feel a little more special?",

    yes:
      "Ahmie ❤️"
  },

  {
    title:
      "One more thing... 👀",

    text:
      "Who should get your random late-night messages?",

    yes:
      "Ahmie 📱❤️"
  },

  {
    title:
      "Be honest with me 🥺",

    text:
      "Who is secretly one of your favourite people?",

    yes:
      "Ahmie 😭❤️"
  },

  {
    title:
      "Almost there ✨",

    text:
      "If Ahmie asked you to stay by his side, what would you say?",

    yes:
      "I'd stay ❤️"
  },

  {
    title:
      "The final question...",

    text:
      "Will you choose Ahmie and make this little story ours?",

    yes:
      "YES, ALWAYS 💍"
  }

];


let questionIndex = 0;

let noIndex = 0;


const questionTitle =
  document.getElementById(
    "questionTitle"
  );

const questionText =
  document.getElementById(
    "questionText"
  );

const yesButton =
  document.getElementById(
    "yesButton"
  );

const noButton =
  document.getElementById(
    "noButton"
  );

const noReaction =
  document.getElementById(
    "noReaction"
  );

const questionNumber =
  document.getElementById(
    "questionNumber"
  );

const smallNumber =
  document.getElementById(
    "smallNumber"
  );

const progress =
  document.getElementById(
    "progress"
  );


const noMessages = [

  "Arey nhi 🥺",

  "Ho hi nahi sakta 😭",

  "Again think about me 👀❤️",

  "Ab tou haan kar dy 😭",

  "Pleaseee? 🥹❤️",

  "You know the answer already 😭💗"

];


function loadQuestion() {

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
      .padStart(2,"0");


  questionNumber.innerText =
    `${number} / 05`;

  smallNumber.innerText =
    number;


  progress.style.width =
    `${((questionIndex + 1) / 5) * 100}%`;


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
        transform:
          "translateY(30px)",
        filter:
          "blur(10px)"
      },

      {
        opacity: 1,
        transform:
          "translateY(0)",
        filter:
          "blur(0)"
      }
    ],

    {
      duration:
        900,

      easing:
        "cubic-bezier(.16,1,.3,1)"
    }

  );

}


/* =========================
   NO BUTTON
========================= */

noButton.addEventListener(
  "mouseenter",
  dodgeNo
);

noButton.addEventListener(
  "click",
  dodgeNo
);


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


  const margin =
    20;


  const maxX =
    window.innerWidth -
    noButton.offsetWidth -
    margin;


  const maxY =
    window.innerHeight -
    noButton.offsetHeight -
    margin;


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
        transform:
          "scale(.8) rotate(-8deg)"
      },

      {
        transform:
          "scale(1.15) rotate(8deg)"
      },

      {
        transform:
          "scale(1) rotate(0)"
      }
    ],

    {
      duration:
        500,

      easing:
        "cubic-bezier(.16,1,.3,1)"
    }

  );


  createHearts(6);

}


/* =========================
   YES
========================= */

yesButton.addEventListener(
  "click",
  () => {

    createHearts(45);


    yesButton.animate(

      [
        {
          transform:
            "scale(1)"
        },

        {
          transform:
            "scale(1.2)"
        },

        {
          transform:
            "scale(.9)"
        },

        {
          transform:
            "scale(1)"
        }
      ],

      {
        duration:
          700
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


/* =========================
   CHOICE → LETTER
========================= */

document
  .getElementById("letterButton")
  .addEventListener(
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


/* =========================
   LETTER → GALLERY
========================= */

document
  .getElementById("galleryButton")
  .addEventListener(
    "click",
    () => {

      createGallery();

      showScreen(
        screens.gallery
      );

    }
  );


/* =========================
   30 PHOTO GALLERY
========================= */

const photos = [];


for (
  let i = 1;
  i <= 30;
  i++
) {

  photos.push(
    `our-memories/photo${String(i).padStart(2,"0")}.jpg`
  );

}


const galleryGrid =
  document.getElementById(
    "galleryGrid"
  );


const lightbox =
  document.getElementById(
    "lightbox"
  );


const lightboxImage =
  document.getElementById(
    "lightboxImage"
  );


const photoCounter =
  document.getElementById(
    "photoCounter"
  );


let currentPhoto = 0;


function createGallery() {

  galleryGrid.innerHTML = "";


  photos.forEach(
    (photo,index) => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "gallery-item";


      item.innerHTML = `

        <img
          src="${photo}"
          alt="Memory ${index + 1}"
          loading="lazy"
        >

        <span class="gallery-number">

          ${String(index + 1).padStart(2,"0")}

        </span>

      `;


      item.addEventListener(
        "click",
        () => {

          openPhoto(index);

        }
      );


      galleryGrid.appendChild(
        item
      );

    }
  );

}


function openPhoto(index) {

  currentPhoto =
    index;


  lightboxImage.src =
    photos[currentPhoto];


  photoCounter.innerText =

    `${String(currentPhoto + 1).padStart(2,"0")} / 30`;


  lightbox.classList.add(
    "active"
  );


  createHearts(8);

}


function closePhoto() {

  lightbox.classList.remove(
    "active"
  );

}


function nextPhoto() {

  currentPhoto++;


  if (
    currentPhoto >=
    photos.length
  ) {

    currentPhoto = 0;

  }


  openPhoto(
    currentPhoto
  );

}


function previousPhoto() {

  currentPhoto--;


  if (
    currentPhoto < 0
  ) {

    currentPhoto =
      photos.length - 1;

  }


  openPhoto(
    currentPhoto
  );

}


document
  .getElementById("closeLightbox")
  .addEventListener(
    "click",
    closePhoto
  );


document
  .getElementById("nextPhoto")
  .addEventListener(
    "click",
    nextPhoto
  );


document
  .getElementById("previousPhoto")
  .addEventListener(
    "click",
    previousPhoto
  );


document.addEventListener(
  "keydown",
  event => {

    if (
      !lightbox.classList.contains(
        "active"
      )
    ) {
      return;
    }


    if (
      event.key === "Escape"
    ) {

      closePhoto();

    }


    if (
      event.key === "ArrowRight"
    ) {

      nextPhoto();

    }


    if (
      event.key === "ArrowLeft"
    ) {

      previousPhoto();

    }

  }
);


/* =========================
   GALLERY → DATING
========================= */

document
  .getElementById("datingButton")
  .addEventListener(
    "click",
    () => {

      showScreen(
        screens.dating
      );

      loadDatingQuestion();

    }
  );


/* =========================
   DATING QUESTIONS
========================= */

const datingQuestions = [

  {
    icon:
      "🎨",

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
    icon:
      "🌙",

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
    icon:
      "🌹",

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
    icon:
      "🎵",

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
    icon:
      "🍿",

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
    icon:
      "💌",

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
  document.getElementById(
    "datingIcon"
  );

const datingTitle =
  document.getElementById(
    "datingTitle"
  );

const datingText =
  document.getElementById(
    "datingText"
  );

const datingOptions =
  document.getElementById(
    "datingOptions"
  );

const datingNumber =
  document.getElementById(
    "datingNumber"
  );

const datingProgress =
  document.getElementById(
    "datingProgress"
  );


function loadDatingQuestion() {

  const dating =
    datingQuestions[
      datingIndex
    ];


  datingIcon.innerText =
    dating.icon;

  datingTitle.innerText =
    dating.title;

  datingText.innerText =
    dating.text;


  datingNumber.innerText =

    `${String(datingIndex + 1).padStart(2,"0")} / 06`;


  datingProgress.style.width =

    `${((datingIndex + 1) / datingQuestions.length) * 100}%`;


  datingOptions.innerHTML =
    "";


  dating.options.forEach(
    option => {

      const button =
        document.createElement(
          "button"
        );


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
                transform:
                  "scale(1)"
              },

              {
                transform:
                  "scale(1.08)"
              },

              {
                transform:
                  "scale(1)"
              }
            ],

            {
              duration:
                450
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

                document
                  .getElementById(
                    "chosenColour"
                  )
                  .innerText =
                    selectedColour;


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


/* =========================
   HEART PARTICLES
========================= */

function createHearts(amount) {

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const heart =
      document.createElement(
        "div"
      );


    heart.className =
      "float-heart";


    heart.innerText =
      Math.random() > .3
        ? "♥"
        : "✦";


    heart.style.left =
      Math.random() * 100 +
      "vw";


    heart.style.top =
      Math.random() * 100 +
      "vh";


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


    document
      .getElementById(
        "particles"
      )
      .appendChild(
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


/* =========================
   START
========================= */

loadQuestion();
