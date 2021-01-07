//FIREBASE START

//FIREBASE END

//scroll start
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = 120;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
//scroll end

// mixer console scripts start:
//mixer order start
const orderBtn = document.querySelector("#orderBtn");
orderBtn.addEventListener("click", () => {
  orderBtn.classList.toggle("active-order-btn");
  orderBtn.classList.toggle("button");
  document.querySelector('.order-popup').style.transform = document.querySelector('.order-popup').style.transform !== 'translateY(-10vh)'
    ? document.querySelector('.order-popup').style.transform = 'translateY(-10vh)'
    : document.querySelector('.order-popup').style.transform = 'translateY(-110vh)';
});

const sendOrder = document.querySelector('#orderSubBtn');
sendOrder.addEventListener('click', () => {
  
})

//mixer order end

//mixer nav start
const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    navButtons.forEach((btn) =>
      btn.classList.contains("active-btn")
        ? (btn.classList.remove("active-btn"), btn.classList.add("button"))
        : null
    );
    btn.classList.toggle("button");
    btn.classList.toggle("active-btn");
  });
});
document.querySelector(".logo").onclick = function () {
  navButtons.forEach((btn) => {
    btn.classList.contains("active-btn")
      ? (btn.classList.remove("active-btn"), btn.classList.add("button"))
      : null;
  });
};
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

//services start
const priceCards = document.querySelectorAll(`.service-card`);
priceCards.forEach((card, i) => {
  card.style.background = `center / cover no-repeat url(./img/service-pics/service-pic-${
    i + 1
  }.jpg)`;
  const serviceRow = document.createElement("div");
  serviceRow.textContent = `Service ${i + 1}`;
  serviceRow.classList.add("service-card__title");
  card.appendChild(serviceRow);
  const priceRow = document.createElement("div");
  priceRow.textContent = `Price $$$`;
  priceRow.classList.add("service-card__price");
  card.appendChild(priceRow);
});
//services end
