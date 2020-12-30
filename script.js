// mixer console scripts start:

//mixer order start
const orderBtn = document.querySelector("#orderBtn");
orderBtn.addEventListener("click", () => {
  orderBtn.classList.toggle("active-order-btn");
  orderBtn.classList.toggle("button");
});

//mixer order end

//mixer nav start
const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((butt) =>
      butt.classList.contains("active-btn")
        ? (butt.classList.remove("active-btn"), butt.classList.add("button"))
        : null
    );

    btn.classList.contains("active-btn")
      ? (btn.classList.remove("active-btn"), btn.classList.add("button"))
      : (btn.classList.add("active-btn"), btn.classList.remove("button"));
  });
});
//mixer nav end

//mixer console scripts end

//gallery
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter += 1;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter -= 1;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
});
//galley ends
