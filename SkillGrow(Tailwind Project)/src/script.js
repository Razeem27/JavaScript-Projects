var carouselIn = document.querySelector(".carousel-in");
// const courseImages = document.querySelectorAll("[data-img]");

var transitionValue = 0;

var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    observer.unobserve(carouselIn);
    startTimer();
  });
});
function startTimer() {
    setInterval(() => {
  transitionValue -= 14.05;
        if (transitionValue < -45) {
            transitionValue = 0;
            carouselIn.style.transition=`0s`;      
        }
    carouselIn.style.transform = `translate(${transitionValue}%)`;
      carouselIn.style.transition = `0.9s`;
  },4000);
}

observer.observe(carouselIn);

document.querySelector(".carousel-btn1").addEventListener("click", () => {
    carouselIn.style.transform = `translate(-0%)`;
});
document.querySelector(".carousel-btn2").addEventListener(
  "click",
  () => {
    carouselIn.style.transform = `translate(-14.05%)`;
  }
);
document.querySelector(".carousel-btn3").addEventListener(
  "click",
  () => {
        carouselIn.style.transform = `translate(-28.1%)`;
  }
);
document.querySelector(".carousel-btn4").addEventListener(
  "click",
  () => {
      carouselIn.style.transform = "translate(-42.150000000000006%)";
  }
);

// let imgObserve = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
    
//     if (!entry.isIntersecting) return;
//     console.log(entry);
//     entry.target.classList.add("target-togg")
//   })
// });

// document.querySelectorAll(".target").forEach((card) => {
//   imgObserve.observe(card);
// })
document.querySelector("#hamburger").addEventListener("click", () => {
  document.querySelector(".hamburger-con").classList.toggle("hamburger-togg");
})
document.querySelector(".hamburger-con").addEventListener("click", () => {
  document.querySelector(".hamburger-con").classList.remove("hamburger-togg");
  
})
// document.querySelector(".card-top").addEventListener("click", () => {
//   document.querySelector(".card-top>img").classList.toggle("img-togg");
// })




// const imgobserve = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return
//     console.log(entry);
//   })
// })

// document.querySelectorAll(".card-top").forEach((card) => {
//   imgobserve.observe(card);
// })