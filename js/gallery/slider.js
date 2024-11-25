const slider_section = document.querySelectorAll(".random-slider");
const testuj = document.querySelector(".test");
const carouselInner = document.querySelector(".carousel-inner");

const zdjecia = () => {
  console.log(images());
};
testuj.addEventListener("click", zdjecia);

const images = function () {
  return fetch(`https://images-api.nasa.gov/search?q=mars&media_type=image`)
    .then((res) => res.json())
    .then((res) => {
      return res.collection.items[1].links[0].href;
    })
    .catch((error) => console.error("[ERROR] ", error));
};

// document.querySelector("button").addEventListener("click", planetToShow);

const setAttributes = (el, attrs) => {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}; // const images = function (planet, slider) {
//   fetch(`https://images-api.nasa.gov/search?q=${planet}&media_type=image`)
//     .then((res) => res.json())
//     .then((res) => {
//       const random = Math.floor(Math.random() * 100);
//       const slide_img = document.createElement("img");
//       const slide_title = document.createElement("h2");

//       slide_img.setAttribute("src", res.collection.items[random].links[0].href);
//       slider.append(slide_img, slide_title);
//       slide_title.innerText = res.collection.items[random].data[0].title;
//     })
//     .catch((error) => console.error("[ERROR] ", error));
// };
