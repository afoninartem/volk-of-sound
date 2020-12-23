// mixer console scripts start:
const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {

    navButtons.forEach(butt => butt.classList.contains('active-btn') ? (butt.classList.remove('active-btn'), butt.classList.add('button')) : null)

    btn.classList.contains("active-btn")
      ? (btn.classList.remove("active-btn"), btn.classList.add("button"))
      : (btn.classList.add("active-btn"), btn.classList.remove("button"));
    
    
  });
});

//mixer console scripts end:
