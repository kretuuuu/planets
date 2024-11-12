const container = document.querySelector(".container");
const mn = document.querySelector(".main");
const content = document.querySelector(".content");
const radioLangs = document.querySelectorAll(".lang");
const close = document.querySelector(".close-icon");

let planet_list = new Array();
let language = "ENG";
let shows;

const contentEl = {
  title: document.querySelector(".content-title"),
  position: document.querySelector(".position"),
  diameter: document.querySelector(".diameter"),
  mass: document.querySelector(".mass"),
  distSun: document.querySelector(".dist-sun"),
  period: document.querySelector(".period"),
  dayLen: document.querySelector(".day-len"),
  atmosphere: document.querySelector(".atmosphere"),
  temperature: document.querySelector(".temperature"),
  moons: document.querySelector(".moons"),
  funFacts: document.querySelector(".fun-facts"),
  infoLines: document.querySelectorAll(".info-line"),

  showHide() {
    planet_list.forEach((element) => {
      if (element.planetElement != shows && element.language == language) {
        element.planetElement.classList.toggle("hidden");
      }
    });

    toggleClass(
      [
        ...this.infoLines,
        this.title,
        this.position,
        this.diameter,
        this.mass,
        this.distSun,
        this.period,
        this.dayLen,
        this.atmosphere,
        this.temperature,
        this.moons,
        this.funFacts,
        content,
        shows,
        container,
        mn,
      ],
      "on-top"
    );
  },
};

// radioLangs.forEach((element) => {
//   element.addEventListener("click", function changeLang() {
//     language = "ENG";
//     generateInfo();
//   });
// });

close.addEventListener("click", function () {
  contentEl.showHide();
  shows.removeAttribute("camera-controls");
  shows.addEventListener("click", onTop);
});

const setAttributes = (el, attrs) => {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

const toggleClass = (arr, cls) => {
  arr.forEach((element) => {
    element.classList.toggle(cls);
  });
};

const generateInfo = () => {
  const findPlanetInfo = planet_list.find(
    (element) => element.planetElement == shows
  );
  contentEl.title.innerHTML = findPlanetInfo.name;
  contentEl.position.innerHTML = "Position: " + findPlanetInfo.position;
  contentEl.diameter.innerHTML = "Diameter: " + findPlanetInfo.diameter;
  contentEl.mass.innerHTML = "Mass: " + findPlanetInfo.mass;
  contentEl.distSun.innerHTML =
    "Distance from sun: " + findPlanetInfo.distance_from_sun;
  contentEl.period.innerHTML =
    "Orbital period: " + findPlanetInfo.orbital_period;
  contentEl.dayLen.innerHTML = "Day length: " + findPlanetInfo.day_len;
  contentEl.atmosphere.innerHTML = "Atmosphere: " + findPlanetInfo.atmosphere;
  contentEl.temperature.innerHTML =
    "Temperature: " + findPlanetInfo.temperature;
  contentEl.moons.innerHTML = "Moons: " + findPlanetInfo.moons;
  contentEl.funFacts.innerHTML = "Fun facts: " + findPlanetInfo.fun_facts;

  contentEl.showHide();
};

const onTop = function () {
  shows = this;
  if (shows.hasAttribute("camera-controls")) {
    shows.removeAttribute("camera-controls");
  } else {
    shows.setAttribute("camera-controls", true);
  }
  generateInfo();
  this.removeEventListener("click", onTop);
};

const main = () => {
  fetch("./data/planets.json")
    .then((res) => res.json())
    .then((res) => {
      planet_list = res;
      res.forEach((element) => {
        if (element.language == language) {
          const planImg = document.createElement("model-viewer");
          setAttributes(planImg, {
            src: `./planets_img/${element.id}.glb`,
            alt: element.id,
            loading: "eager",
            poster: "../planets_poster/" + element.id + ".webp",
            "disable-tap": true,
            "disable-zoom": true,
            "disable-pan": true,
            "auto-rotate": true,
          });
          planImg.classList.add("planets");
          planImg.classList.add(element.id);

          element.planetElement = planImg;
          container.appendChild(planImg);
          planImg.addEventListener("click", onTop);
        } else {
          return;
        }
      });
      console.log(planet_list);
    })
    .catch((error) => console.error("[ERROR] ", error));
};

main();
