const brandsContainer = document.querySelector(".brands-container");

const brands = [
  {
    id: 0,
    marca: "Taramps",
    img: "img/taramps.png",
  },
  {
    id: 1,
    marca: "JBL",
    img: "img/jbl.png",
  },
  {
    id: 2,
    marca: "Bomber",
    img: "img/bomber.png",
  },
  {
    id: 3,
    marca: "Stetsom",
    img: "img/stetsom.png",
  },
  {
    id: 4,
    marca: "Spark",
    img: "img/spark.png",
  },
  {
    id: 5,
    marca: "Pioneer",
    img: "img/pioneer.png",
  },
  {
    id: 6,
    marca: "Kenwood",
    img: "img/kenwood.png",
  },
  {
    id: 7,
    marca: "Sony",
    img: "img/sony.png",
  },
  {
    id: 8,
    marca: "Rockford Fosgate",
    img: "img/rockford-fosgate.png",
  },
  {
    id: 9,
    marca: "Alpine",
    img: "img/alpine.png",
  },
  {
    id: 10,
    marca: "MTX Audio",
    img: "img/mtx-audio.png",
  },
  {
    id: 11,
    marca: "Kicker",
    img: "img/kicker.png",
  },
  {
    id: 12,
    marca: "Memphis Audio",
    img: "img/memphis-audio.png",
  },
  {
    id: 13,
    marca: "JL Audio",
    img: "img/jl-audio.png",
  },
];

brands.map((brand) => {
  brandsContainer.innerHTML += `
    <div class="brand-item">
      <div class="img-container">
        <img src="${brand.img}" title="${brand.marca}" />
      </div>
    </div>
  `;
})