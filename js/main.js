const container = document.querySelector(".container");

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);

  }
}

const planet_list = new Array();

const planets = function () {
  fetch("http://localhost/api_planets/")
    .then((res) => res.json())
    .then((res) => {
      console.log(res[0].name);

      res.forEach((element) => {
        const planImg = document.createElement("img");
        setAttributes(planImg, {"src": `http://localhost/api_planets/img/${element.name}.png`, "alt": element.name});
        planImg.classList.add("planety");
        planet_list.push(planImg)
        // planImg.addEventListener("click", powieksz);
        container.appendChild(planImg);
        planImg.addEventListener("click", function powieksz(){
          this.classList.toggle("powiekszenie");

        });
      });
    })
    .catch((error) => console.error("[ERROR] ", error));
};



planets();
