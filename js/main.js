const container = document.querySelector(".container");
const mn = document.querySelector(".main");
const content = document.querySelector(".content");
const radioLangs = document.querySelectorAll(".lang");
let planet_list = new Array();
let language = "ENG";
let shows;

// radioLangs.forEach((element) => {
//   element.addEventListener("click", function changeLang() {
//     language = "ENG";
//     generateInfo();
//   });
// });

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

// const generateInfo = () => {
//   const findPlanetInfo = planet_list.find(
//     (element) => element.planetElement == shows 
//   );


//   const contentEl = {
//     title: document.querySelector(".content-title"),
//     position: document.querySelector(".position"),
//     diameter: document.querySelector(".diameter"),
//     mass: document.querySelector(".mass"),
//     distSun: document.querySelector(".dist-sun"),
//     period: document.querySelector(".period"),
//     dayLen: document.querySelector(".day-len"),
//     atmosphere: document.querySelector(".atmosphere"),
//     temperature: document.querySelector(".temperature"),
//     moons: document.querySelector(".moons"),
//     funFacts: document.querySelector(".fun-facts"),
//   };

//   contentEl.title.innerHTML = findPlanetInfo.name;
//   contentEl.position.innerHTML = "Position: " + findPlanetInfo.position;
//   contentEl.diameter.innerHTML = "Diameter: " + findPlanetInfo.diameter;
//   contentEl.mass.innerHTML = "Mass: " + findPlanetInfo.mass;
//   contentEl.distSun.innerHTML =
//     "Distance from sun: " + findPlanetInfo.distance_from_sun;
//   contentEl.period.innerHTML =
//     "Orbital period: " + findPlanetInfo.orbital_period;
//   contentEl.dayLen.innerHTML = "Day length: " + findPlanetInfo.day_len;
//   contentEl.atmosphere.innerHTML = "Atmosphere: " + findPlanetInfo.atmosphere;
//   contentEl.temperature.innerHTML =
//     "Temperature: " + findPlanetInfo.temperature;
//   contentEl.moons.innerHTML = "Moons: " + findPlanetInfo.moons;
//   contentEl.funFacts.innerHTML = "Fun facts: " + findPlanetInfo.fun_facts;

//   const infoLines = document.querySelectorAll(".info-line");
//   toggleClass(
//     [
//       ...infoLines,
//       contentEl.title,
//       contentEl.position,
//       contentEl.diameter,
//       contentEl.mass,
//       contentEl.distSun,
//       contentEl.period,
//       contentEl.dayLen,
//       contentEl.atmosphere,
//       contentEl.temperature,
//       contentEl.moons,
//       contentEl.funFacts,
//     ],
//     "on-top"
//   );
// };

const onTop = function () {
  shows = this;
  // if (this.hasAttribute("camera-controls"))
  // {
  //   this.removeAttribute("camera-controls");
  // }
  // else {
  //   this.setAttribute("camera-controls", true);
  // }
  // generateInfo();
  toggleClass([this, container, mn], "on-top");
  // toggleClass(infoLines, "on-top");
  planet_list.forEach((element) => {
    if (element.planetElement != shows && element.language == language) {
      // console.error(element)
      element.planetElement.classList.toggle("hidden");
    }
  });
};

const main = () => {
  fetch("./data/planets.json")
    .then((res) => res.json())
    .then((res) => {
      planet_list = res;
      res.forEach((element) => {
        if (element.language == language) {
          const planImg = document.createElement("img");
          setAttributes(planImg, {
            src: `./planets_img/${element.id}.png`,
            alt: element.id
          });
          planImg.setAttribute("auto-rotate", true);
          // planImg.setAttribute("camera-controls", true);
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
