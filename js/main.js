const container = document.querySelector(".container");

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);

  }
}

const planets = function () {
  fetch("http://localhost/api_planets/")
    .then((res) => res.json())
    .then((res) => {
      console.log(res[0].name);

      res.forEach((element) => {
        const planImg = document.createElement("img");
        setAttributes(planImg, {"src": `http://localhost/api_planets/img/${element.name}.png`, "alt": element.name});
        // element.classList.add("planets");
        // planImg.addEventListener("click", powieksz);
        container.appendChild(planImg);
      });
    })
    .catch((error) => console.error("[ERROR] ", error));
};



planets();
