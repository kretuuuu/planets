const container = document.querySelector(".container");
const mn = document.querySelector(".main");
const content = document.querySelector(".content");
const navbar = document.querySelector(".navbar");
const radioLangs = document.querySelectorAll(".lang");
const close = document.querySelector(".close-icon");
const menuToggle = document.querySelector(".menu-icon");
const settings = document.querySelector(".settings");
const navButton = document.querySelectorAll(".nav-button");
const performance = document.querySelector(".performance");

navButton.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

let planet_list = new Array();
let language = "ENG";
let shows;
let ifPerformance = false;

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
        navbar,
      ],
      "on-top"
    );
  },
};

menuToggle.addEventListener("click", function () {
  settings.classList.toggle("on-top");
});

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
  contentEl.position.innerHTML = findPlanetInfo.position;
  contentEl.diameter.innerHTML = findPlanetInfo.diameter;
  contentEl.mass.innerHTML = findPlanetInfo.mass;
  contentEl.distSun.innerHTML = findPlanetInfo.distance_from_sun;
  contentEl.period.innerHTML = findPlanetInfo.orbital_period;
  contentEl.dayLen.innerHTML = findPlanetInfo.day_len;
  contentEl.atmosphere.innerHTML = findPlanetInfo.atmosphere;
  contentEl.temperature.innerHTML = findPlanetInfo.temperature;
  contentEl.moons.innerHTML = findPlanetInfo.moons;
  contentEl.funFacts.innerHTML = findPlanetInfo.fun_facts;
};

const onTop = function () {
  shows = this;
  if (shows.hasAttribute("camera-controls")) {
    shows.removeAttribute("camera-controls");
  } else {
    shows.setAttribute("camera-controls", true);
  }
  generateInfo();
  contentEl.showHide();
  this.removeEventListener("click", onTop);
};

document.querySelectorAll(".lang").forEach((element) => {                      
  element.addEventListener("click", function changeLang() {
    if (language == this.value) {
      return;
    }
    document.querySelectorAll(".lang").forEach((el) => el.classList.remove("active"));
    language = this.value;
    this.classList.add("active");
    console.log("Nowy język:", language);
    document.querySelectorAll(".planets").forEach((el) => el.remove());
    main();
  });
});

performance.addEventListener("click", () => {
  ifPerformance = !ifPerformance;
})

const main = () => {
  fetch("./data/planets.json")
    .then((res) => res.json())
    .then((res) => {
      planet_list = res;
      res.forEach((element) => {
        if (element.language == language) {
          if (!ifPerformance)
          {

          }
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
