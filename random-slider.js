const slider_section = document.querySelectorAll(".random-slider");

const planetToShow = () => {
  slider_section.forEach((element) => {
    element.innerHTML = "";
    const arrayOfClasses = element.className.split(" ");
    if (arrayOfClasses.length > 2) {
      console.error(
        " [ERROR] Poprawne użycie elementu planet-slider: class='planet-slider <nazwa planety>'"
      );
      return;
    }
    images(arrayOfClasses[1], element);
  });
};

const images = function (planet, slider) {
  fetch(`https://images-api.nasa.gov/search?q=${planet}&media_type=image`)
    .then((res) => res.json())
    .then((res) => {
      const random = Math.floor(Math.random() * 100);
      const slide_img = document.createElement("img");
      const slide_title = document.createElement("h2");

      slide_img.setAttribute("src", res.collection.items[random].links[0].href);
      slider.append(slide_img, slide_title);
      slide_title.innerText = res.collection.items[random].data[0].title;
    })
    .catch((error) => console.error("[ERROR] ", error));
};

document.querySelector("button").addEventListener("click", planetToShow);
