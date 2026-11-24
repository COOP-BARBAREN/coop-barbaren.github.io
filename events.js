/*
=========================================================
BARBAREN - EVENTS
=========================================================

This is the only file you need to edit when adding,
removing or changing events.

Each event contains:

date        = YYYY-MM-DD
time        = time shown on the website
title       = name of the event
type        = Spelning / Event / etc.
image       = path to the event image
description = description shown on the website

instagram   = optional Instagram link
email       = optional email address

The events are automatically sorted by date.
=========================================================
*/


const events = [

  // -------------------------------------------------------
  // OKTOBERFEST
  // -------------------------------------------------------

  {
    date: "2026-09-25",
    time: "15:00 - 23:30",

    title: "OKTOBERFEST",
    type: "Event",

    image: "images/oktoberfest.avif",

    description:
      "BarBaren flyttar till München för en kväll. " +
      "Vi bjuder på Märtzen Bärtzen i öltappen och bretzels på borden. " +
      "Extra välkomna är ni iklädda lederhosen eller dirndl. Prost!"
  },

  // -------------------------------------------------------
  // SLIERUP TROSLUND
  // -------------------------------------------------------

  {
    date: "2026-10-02",
    time: "19:00",

    title: "SLIERUP TROSLUND",
    type: "DJ Spelning",

    image: "images/???.jpg",

    description:
      "Neon Chorus är ett lokalt band från en liten, mörk källare i Malmö. " +
      "De spelar chorusdränkt 80-tals-pop men är inte främmande " +
      "för att blanda in diverse genrer i deras musikskaparprocess. " +
      "På BarBaren bjuder de på en spelning som är lika delar intim och energisk.",

    instagram: "https://www.instagram.com/neonchorus/",
    email: "neonchorus.music@gmail.com"
  },

  // -------------------------------------------------------
  // NEON CHORUS
  // -------------------------------------------------------

  {
    date: "2026-10-03",
    time: "20:00 - 21:00",

    title: "NEON CHORUS",
    type: "Spelning",

    image: "images/neonchorus.jpg",

    description:
      "Neon Chorus är ett lokalt band från en liten, mörk källare i Malmö. " +
      "De spelar chorusdränkt 80-tals-pop men är inte främmande " +
      "för att blanda in diverse genrer i deras musikskaparprocess. " +
      "På BarBaren bjuder de på en spelning som är lika delar intim och energisk.",

    instagram: "https://www.instagram.com/neonchorus/",
    email: "neonchorus.music@gmail.com"
  },


  // -------------------------------------------------------
  // DOG PARK
  // -------------------------------------------------------

  {
    date: "2026-11-07",
    time: "20:00 - 21:00",

    title: "DOG PARK",
    type: "Spelning",

    image: "images/dogpark.jpg",

    description:
      "Dog Park beskriver sin musik som \"sad songs from Gothenburg\". " +
      "På BarBaren ska de bjuda på en mysig kväll med smakprover " +
      "av deras debut-EP: Gemini.",

    instagram: "https://www.instagram.com/dogparkmusic/"
  },


  // -------------------------------------------------------
  // BEST THING SINCE SLICED BREAD
  // -------------------------------------------------------

  {
    date: "2026-11-05",
    time: "20:00 - 21:00",

    title: "BEST THING SINCE SLICED BREAD",
    type: "Spelning",

    image: "images/The Best Thing Since Sliced Bread 5_11 2026.png",

    description:

    "Projektet ”The Best Thing Since Sliced Bread” är resultatet av ett " +
    "samarbete mellan tre unga skandinaviska musiker, startat med avsikten " +
    "att skapa nytt och utforska ljudet av den nutida ”saxtrion”. Bandet " +
    "bildades under 2023, och Berlins musikscen hade en roll som kan " +
    "jämföras med att vattna din växt – helt och hållet avgörande.",

    instagram: "https://instagram.com/maltewibell/",
  },


  // -------------------------------------------------------
  // VIDE WINBLADH
  // -------------------------------------------------------

  {
    date: "2026-11-12",
    time: "20:00-21:00",

    title: "VIDE WINBLADH",
    type: "Spelning",

    image: "images/vide_winbladh.jpg",

    description:
      "Vide spelar spelar egenskriven varm och akustiskt musik med sitt band i en mysig sättning. Låtarna handlar om det lilla och stora i livet och drivs av ärlighet och det allmänmänskliga. Vänta er akustisk gitarr, stämsång, vispar, kontrabas och cello.",

    instagram: "https://instagram.com/vide_winbladh/",
    email: "vide.winbladh@gmail.com"
  },


  // -------------------------------------------------------
  // SELMA LUNDGREN
  // -------------------------------------------------------

/*  {
    date: "2026-12-19",
    time: "TID: TBA",

    title: "SELMA LUNDGREN BAND",
    type: "Spelning",

    image: "images/selmalundgren.jpg",

    description:
     "Selma Lundgren Band släpper sitt efterlängtade debutalbum! 23-åriga Selma Lundgren har ägnat de senaste fyra åren åt att skriva och forma musiken till ”Världen Väntar”. Med melodier som dröjer sig kvar skapar hon genom sin personliga röst ett eget uttryck i gränslandet mellan jazz och pop. Var med och fira!",

    instagram: "https://instagram.com/seelmalundgren/",
    email: "selmalundgren@hotmail.com"
  }, */

  // -------------------------------------------------------
  // HANS HARALD
  // -------------------------------------------------------

/*  {
    date: "2026-12-13",
    time: "TBA",

    title: "HANS HARALD",
    type: "Spelning",

    image: "images/exempel.jpg",

    description:
      "Blablabla",

    instagram: "https://www.instagram.com/hansharald.se/",
    email: "exempel@example.com"
  } */

  // -------------------------------------------------------
  // LEJLA CATO
  // -------------------------------------------------------

  {
    date: "2027-01-13",
    time: "18:00",

    title: "LEJLA CATO",
    type: "Läsning av diktdebut",

    image: "images/lejla_cato.png",

    description:
      "Varmt välkomna till releasefest för ”Skjuter ut mitt leende”, en diktdebut av Lejla Cato utgiven på Albert Bonniers förlag. Boken är skriven utifrån inbördeskriget i Bosnien och frågar: Finns det ett språk som kan skildra folkmord utan att skriva fram det på nytt?",

    instagram: "https://instagram.com/",
    email: "exempel@example.com"
  }, 

  // -------------------------------------------------------
  // JOHANNA BERLING
  // -------------------------------------------------------

  {
    date: "2027-01-21",
    time: "20:00 - 21:00",

    title: "JOHANNA BERLING",
    type: "Spelning",

    image: "images/johanna_berling.jpg",

    description:
      "Estrid Johanna bjuder på en eftertänksam och smakfull blandning av elektroniska och akustiska element. Scener målas upp i det inre och utifrån olika ljudlandskap och effekter, syntar och trummaskiner fantiserar hon i sång om det enkla och svåra i livet. Sångerna är nära, emotionella och stundtals drömlika.",

    instagram: "https://www.instagram.com/estridjohanna/",
    email: "estridjohanna@gmail.com"
  }, 

  // -------------------------------------------------------
  // HERMAN FREDH
  // -------------------------------------------------------

/*  {
    date: "2027-01-28",
    time: "TBA",

    title: "HERMAN FREDH",
    type: "Spelning",

    image: "images/exempel.jpg",

    description:
      "Blablabla",

    instagram: "https://www.instagram.com/herman_fredh/",
    email: "exempel@example.com"
  } */
  
  // -------------------------------------------------------
  // KUSTVÄGEN
  // -------------------------------------------------------

  {
    date: "2027-02-11",
    time: "TID: TBA",

    title: "KUSTVÄGEN",
    type: "Spelning",

    image: "images/kustvagen.jpg",

    description:
      "Med sin blandning av folk, visa och alt-country på skånska har Malmöbaserade Kustvägen blivit ett nytt namn på den svenska musikscenen att hålla ögonen på. Bandet debuterade under hösten 2022 med singeln ”Som din far”, vilken lovordades runt om i landet.",

    instagram: "https://www.instagram.com/kustvagenmusik/",
    email: "kristenssoncharlie@gmail.com"
  }, 

  // -------------------------------------------------------
  // ORBITAL EXPERIMENT
  // -------------------------------------------------------

  {
    date: "2027-02-24",
    time: "TID: TBA",

    title: "ORBITAL EXPERIMENT",
    type: "Spelning",

    image: "images/orbital_experiment.png",

    description:
      "Orbital Experiment är ett dansk-svenskt band som spelar neo-soul med influenser från hiphopens beats och jazzens lekfulla samspel. De blandar elektroniska sounds med improvisatoriska inslag i ett modernt uttryck som får det att pirra i hela kroppen.",

    instagram: "https://www.instagram.com/orbitalexperiment/",
    email: "orbitalband.media@gmail.com"
  }

  // -------------------------------------------------------
  // EXEMPEL
  // -------------------------------------------------------

/*  {
    date: "YYYY-MM-DD",
    time: "HH:MM - HH:MM",

    title: "NAMN",
    type: "TYP",

    image: "images/exempel.jpg",

    description:
      "Blablabla",

    instagram: "https://instagram.com/",
    email: "exempel@example.com"
  } */

];



/*
=========================================================
DO NOT EDIT BELOW THIS LINE
=========================================================

The code below takes the events above and creates
the HTML automatically.
=========================================================
*/


// Convert YYYY-MM-DD into Swedish date format.
// Example:
// 2026-10-03 → 3 OKTOBER 2026

function formatDate(dateString) {

  const date = new Date(dateString + "T12:00:00");

  return new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
    .format(date)
    .toUpperCase();
}



// Find the event container in event.html

const eventsContainer = document.getElementById("events");



// -------------------------------------------------------
// REMOVE EVENTS THAT HAVE ALREADY PASSED
// -------------------------------------------------------

// Create today's date at midnight.
//
// We use the local date rather than UTC so that the
// website uses the visitor's actual calendar date.

const today = new Date();

today.setHours(0, 0, 0, 0);


// Keep only events happening today or in the future.
//
// An event with the same date as today is still shown.

const upcomingEvents = events.filter(event => {

  const eventDate = new Date(event.date + "T00:00:00");

  return eventDate >= today;

});


// Sort upcoming events chronologically

upcomingEvents.sort((a, b) => {

  return a.date.localeCompare(b.date);

});


// Create each event

upcomingEvents.forEach(event => {

  const eventElement = document.createElement("div");

  eventElement.className = "event";


  // -------------------------------------------------------
  // IMAGE
  // -------------------------------------------------------

  const image = document.createElement("img");

  image.className = "event-image";
  image.src = event.image;
  image.alt = "Bild för " + event.title;



  // -------------------------------------------------------
  // TEXT CONTAINER
  // -------------------------------------------------------

  const info = document.createElement("div");

  info.className = "event-info";


  // DATE + TIME

  const date = document.createElement("div");

  date.className = "event-date";

  date.textContent =
    formatDate(event.date) + " · " + event.time;



  // TITLE

  const title = document.createElement("div");

  title.className = "event-title";

  title.textContent = event.title;



  // TYPE / ARTIST

  const type = document.createElement("div");

  type.className = "event-type";

  type.textContent = event.type;



  // DESCRIPTION

  const description = document.createElement("div");

  description.className = "event-description";

  description.textContent = event.description;



  // -------------------------------------------------------
  // CONTACT INFORMATION
  // -------------------------------------------------------

  const contact = document.createElement("div");

  contact.className = "event-contact";


  // Instagram

  if (event.instagram) {

    const instagram = document.createElement("a");

    instagram.href = event.instagram;
    instagram.target = "_blank";
    instagram.textContent = "@"+getInstagramName(event.instagram);

    contact.appendChild(instagram);
  }


  // Email

  if (event.email) {

    // Add spacing if Instagram exists

    if (event.instagram) {
      contact.appendChild(document.createTextNode("   "));
    }

    const email = document.createElement("a");

    email.href = "mailto:" + event.email;
    email.textContent = event.email;

    contact.appendChild(email);
  }



  // -------------------------------------------------------
  // PUT EVERYTHING TOGETHER
  // -------------------------------------------------------

  info.appendChild(date);
  info.appendChild(title);
  info.appendChild(type);
  info.appendChild(description);


  // Only add contact section if there is contact information

  if (event.instagram || event.email) {
    info.appendChild(contact);
  }


  eventElement.appendChild(image);
  eventElement.appendChild(info);


  eventsContainer.appendChild(eventElement);

});



// Extract Instagram username from URL.
// Example:
// https://www.instagram.com/neonchorus/
// becomes:
// neonchorus

function getInstagramName(url) {

  return url
    .replace(/\/$/, "")
    .split("/")
    .pop();
}