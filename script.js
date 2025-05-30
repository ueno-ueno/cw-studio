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

  // トップに戻るボタン
  const totop = document.querySelector('.totop');
  const totopBtn = document.querySelector('.totop__btn');

  // スクロールイベント
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      totop.classList.add('is-show');
    } else {
      totop.classList.remove('is-show');
    }
  });

  // クリックイベント
  // totopBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // });
});
  

