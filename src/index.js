import "./index.scss";
import "./main";

(function () {
  const modal = document.querySelector(".burger");
  const burgerBtn = document.querySelector(".header__burger");
  const closeBtn = document.querySelector(".burger__close");
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".follower");
  const links = document.querySelectorAll(".link");

  let followerX = 0,
    followerY = 0;

  let cursorX = 0,
    cursorY = 0;

  TweenMax.to({}, 0.01, {
    repeat: -1,
    onRepeat: () => {
      followerX += (cursorX - followerX) / 15;
      followerY += (cursorY - followerY) / 15;
      TweenMax.set(follower, {
        css: {
          left: followerX - 12,
          top: followerY - 12,
        },
      });

      TweenMax.set(cursor, {
        css: {
          left: cursorX,
          top: cursorY,
        },
      });
    },
  });

  window.addEventListener("mousemove", (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
  });

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
      follower.classList.add("active");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      follower.classList.remove("active");
    });
  });

  burgerBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  function openModal() {
    modal.style.display = "flex";
    burgerBtn.removeEventListener('"click', openModal);
  }

  function closeModal() {
    modal.style.display = "none";
  }
})();
