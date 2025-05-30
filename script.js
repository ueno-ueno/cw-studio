"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const fade = document.querySelectorAll(".fade");
  fade.forEach(fad => {
    const observer = new IntersectionObserver((entries, observer) => {
      
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    })
    observer.observe(fad);
  });
  });
  

