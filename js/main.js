const container = document.querySelector(".container"); 
const mn = document.querySelector(".main");
const content = document.querySelector(".content")
let planet_list = new Array();
let shows;

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const onTop = function() {
  console.log(this.getBoundingClientRect())
  this.classList.toggle("on-top");
  container.classList.toggle("on-top");
  mn.classList.toggle("on-top");
  content.classList.toggle("on-top");
  shows = this;
  planet_list.forEach(element => {
    if(element.planetElement!=shows)
    {
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
        element.planetElement = planImg;
        container.appendChild(planImg);
        planImg.addEventListener("click", onTop);
      });
      console.log(res);
    })
    .catch((error) => console.error("[ERROR] ", error));
};

main();
