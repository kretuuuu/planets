const container = document.querySelector(".container");
const mn = document.querySelector(".main");
const content = document.querySelector(".content");
const arrows = document.querySelector(".nav-arrows");

let planet_list = new Array();
let shows;

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
  // const title = document.querySelector(".content-title");
  // const position = document.querySelector(".position");
  // const diameter = document.querySelector(".diameter");
  // const mass = document.querySelector(".mass");
  // const distSun = document.querySelector(".dist-sun");
  const contentEl = {
    title: document.querySelector(".content-title"),
    position: document.querySelector(".position"),
    diameter: document.querySelector(".diameter"),
    mass: document.querySelector(".mass"),
    distSun: document.querySelector(".dist-sun"),
    period: document.querySelector(".period"),
    dayLen: document.querySelector(".day-len"),
    // atmosphere: document.querySelector(".atmosphere"),
    // temperature: document.querySelector(".temperature"),
    // moons: document.querySelector(".moons"),
    // fanFucts: document.querySelector(".fun-facts")
  };

  contentEl.title.innerHTML = findPlanetInfo.name;
  contentEl.position.innerHTML = "Position: "+findPlanetInfo.position;
  contentEl.diameter.innerHTML = "Diameter: "+findPlanetInfo.diameter;
  contentEl.mass.innerHTML = "Mass: "+findPlanetInfo.mass;
  contentEl.distSun.innerHTML = "Distance from sun: "+findPlanetInfo.distance_from_sun;
  contentEl.period.innerHTML = "Orbital period: "+findPlanetInfo.orbital_period;
  contentEl.dayLen.innerHTML = "Day length: "+findPlanetInfo.day_len;

  const infoLines = document.querySelectorAll(".info-line");
  toggleClass([...infoLines, contentEl.title, contentEl.position, contentEl.diameter, contentEl.mass, contentEl.distSun, contentEl.period, contentEl.dayLen,arrows], "on-top");
};

const onTop = function () {
  shows = this;
  generateInfo();
  toggleClass([this, container, mn, content], "on-top");
  // toggleClass(infoLines, "on-top");
  planet_list.forEach((element) => {
    if (element.planetElement != shows) {
      // console.error(element)
      element.planetElement.classList.toggle("hidden");
    }
  });
};

const main = () => {
  fetch("http://localhost/api_planets/")
    .then((res) => res.json())
    .then((res) => {
      planet_list = res;
      res.forEach((element) => {
        const planImg = document.createElement("img");
        setAttributes(planImg, {
          src: `http://localhost/api_planets/img/${element.name}.png`,
          alt: element.name,
          role: "button",
        });
        planImg.classList.add("planets");
        planImg.classList.add(element.name);

        element.planetElement = planImg;
        container.appendChild(planImg);
        planImg.addEventListener("click", onTop);
      });
      console.log(res);
    })
    .catch((error) => console.error("[ERROR] ", error));
};

main();
