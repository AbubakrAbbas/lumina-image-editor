// first of all we create the filter using js //
let filters = {
  Brightness: {
    name: "Brightness",
    max: 200,
    unit: "%",
    min: 0,
    value: 100,
  },
  Contrast: {
    name: "Contrast",
    max: 200,
    min: 0,
    unit: "%",
    value: 100,
  },

  Saturation: {
    name: "Saturation",
    max: 200,
    min: 0,
    unit: "%",
    value: 100,
  },
  HueRotation: {
    name: "HueRotation",
    max: 360,
    min: 0,
    unit: "deg",
    value: 0,
  },
  Blur: {
    name: "Blur",
    max: 20,
    min: 0,
    value: 0,
    unit: "px",
  },
  GrayScale: {
    name: "GrayScale",
    max: 360,
    min: 0,
    value: 0,
    unit: "deg",
  },
  Sepia: {
    name: "Sepia",
    max: 100,
    min: 0,
    value: 0,
    unit: "%",
  },
  Opacity: {
    name: "Opacity",
    max: 100,
    min: 0,
    value: 100,
    unit: "%",
  },
  Invert: {
    name: "Invert",
    max: 360,
    min: 0,
    value: 0,
    unit: "deg",
  },
};
const imageCanvas = document.querySelector("#img-canvas");
const CanvasCtx = imageCanvas.getContext("2d");
const input = document.querySelector("#input");
const resetBtn = document.querySelector("#reset-btn");
const downloadBtn = document.querySelector("#download-btn");

let file = null;
let image = null;
const filterContainer = document.querySelector(".filters");
function createFilter(name, unit = "%", max, min, value) {
  const div = document.createElement("div");
  div.classList.add("filter");
  const input = document.createElement("input");
  input.classList.add("inp");
  input.type = "range";
  input.id = name;
  input.max = max;
  input.min = min;
  input.value = value;
  const p = document.createElement("p");
  p.classList.add("p-tag");
  p.innerText = name;
  p.setAttribute("data-val", value + unit);
  div.appendChild(p);
  div.appendChild(input);

  input.addEventListener("input", function (e) {
    filters[name].value = input.value;
    p.setAttribute("data-val", input.value + unit);
    // console.log(name, filters[name]);
    applyFilters();
  });
  return div;
}
function makeFilter() {
  Object.keys(filters).forEach((e) => {
    const createFitlerElement = createFilter(
      filters[e].name,
      filters[e].unit,
      filters[e].max,
      filters[e].min,
      filters[e].value,
    );
    filterContainer.appendChild(createFitlerElement);
  });
}
makeFilter();
// now we will preview the image on canvas //

input.addEventListener("change", function (e) {
  console.log(e);
  const placeholder = document.querySelector(".placeholder");
  imageCanvas.style.display = "block";
  placeholder.style.display = "none";
  file = e.target.files[0];
  const img = new Image();
  img.src = URL.createObjectURL(file);
  // this is the callback function when image is loaded //
  img.onload = () => {
    image = img;
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    CanvasCtx.drawImage(img, 0, 0);
  };
});

// now we work on the functionality of filters //
function applyFilters() {
  CanvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  CanvasCtx.filter = `brightness(${filters.Brightness.value}%)
    contrast(${filters.Contrast.value}%)
    saturate(${filters.Saturation.value}%)
    hue-rotate(${filters.HueRotation.value}deg)
    blur(${filters.Blur.value}px)
    grayscale(${filters.GrayScale.value}%)
    sepia(${filters.Sepia.value}%)
    opacity(${filters.Opacity.value}%)
    invert(${filters.Invert.value}%)`.trim();

  CanvasCtx.drawImage(image, 0, 0);
}
// now we will reset all the filters to default values //
resetBtn.addEventListener("click", function () {
  filters = {
    Brightness: {
      name: "Brightness",
      max: 200,
      unit: "%",
      min: 0,
      value: 100,
    },
    Contrast: {
      name: "Contrast",
      max: 200,
      min: 0,
      unit: "%",
      value: 100,
    },

    Saturation: {
      name: "Saturation",
      max: 200,
      min: 0,
      unit: "%",
      value: 100,
    },
    HueRotation: {
      name: "HueRotation",
      max: 360,
      min: 0,
      unit: "deg",
      value: 0,
    },
    Blur: {
      name: "Blur",
      max: 20,
      min: 0,
      value: 0,
      unit: "px",
    },
    GrayScale: {
      name: "GrayScale",
      max: 360,
      min: 0,
      value: 0,
      unit: "deg",
    },
    Sepia: {
      name: "Sepia",
      max: 100,
      min: 0,
      value: 0,
      unit: "%",
    },
    Opacity: {
      name: "Opacity",
      max: 100,
      min: 0,
      value: 100,
      unit: "%",
    },
    Invert: {
      name: "Invert",
      max: 360,
      min: 0,
      value: 0,
      unit: "deg",
    },
  };
  applyFilters();
  filterContainer.innerHTML = "";
  makeFilter();
});

// download functionality //
downloadBtn.addEventListener("click", function () {
  console.log("event fired");

  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imageCanvas.toDataURL();
  link.click();
});
